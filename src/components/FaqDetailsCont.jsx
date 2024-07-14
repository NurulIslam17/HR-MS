import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FaqDetailsCont() {
  const [contact, setContact] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getContact = async () => {
      const res = await axios.get(`http://localhost:8080/contact/${id}`);
      setContact(res.data);
    };
    getContact();
  }, [id]);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card card-body">
              <div className="row">
                <div className="col-md-4">
                  <h5 className="text-center">User Info</h5>
                  <hr />
                  <p className="mb-0">
                    <strong>Name : </strong> {contact.username}
                  </p>
                  <p className="mb-0">
                    <strong>Email : </strong>
                    {contact.email}
                  </p>
                  <p className="mb-0">
                    <strong>Phone : </strong>
                    {contact.phone}
                  </p>
                </div>
                <div className="col-md-8">
                  <h5 className="text-center">Comment Description</h5>
                  <hr />
                  <p className="text-justify">{contact.comment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqDetailsCont;
