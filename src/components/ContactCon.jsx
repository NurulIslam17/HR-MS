import React, { useState } from "react";
import contactImg from '../asset/static_img/contact.webp';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ContactCon() {

  let redirect = useNavigate();

  const [contact, setContact] = useState({
    username:"",
    email:"",
    phone:"",
    comment:""
   });

   const {username,email,phone,comment} = contact;

   const onInputChange = (e) =>{
    setContact({...contact,[e.target.name]:e.target.value});
   }

   const onSubmitHandle = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8080/contact",contact)
    redirect("/faq")
   }

  return (
    <>
      <div className="container my-3">
        <div className="row mt-4">

          <div className="col-md-6 mt-5 left-div">
            <img src={contactImg} className="w-100 w-100" alt="" srcSet="" />
          </div>

          <div className="col-md-6 right-div">
            <h3 className="text-center">Contact Us</h3>
            <hr/>
            <form onSubmit={(e) =>onSubmitHandle(e)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name ="username"
                  value={username}
                  onChange={(e)=>onInputChange(e)}
                  placeholder="Enter Your Name"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>onInputChange(e)}
                  placeholder="Enter Email Address"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e)=>onInputChange(e)}
                  placeholder="Enter Phone Address"
                  aria-describedby="phoneHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea name="comment" onChange={(e)=>onInputChange(e)} value={comment} className="form-control" placeholder="Comment here..." id=""></textarea>
              </div>

              <button type="submit" className="btn btn-outline-success border rounded-0">
                Submit
              </button>
              <Link to="/" className="btn btn-outline-danger rounded-0 ms-2">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCon;