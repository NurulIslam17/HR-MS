import React from "react";
import contactImg from '../asset/static_img/contact.webp';

function ContactCon() {
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
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
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
                  placeholder="Enter Phone Address"
                  aria-describedby="phoneHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea name="comment" className="form-control" placeholder="Comment here..." id=""></textarea>
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>


        </div>
      </div>
    </>
  );
}

export default ContactCon;