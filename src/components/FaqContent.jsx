import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

// const baseURL = "http://localhost:8080/contact";

function FaqContent() {
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const result = await axios.get("http://localhost:8080/contact");
    setComment(result.data);
    setLoading(false);
  };
  if (!comments) return null;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h3 className="text-center">Frequently Asked Queries</h3>
            <hr />
            <table className="table table-bordered table-striped">
              <thead className="bg-dark text-light">
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{comment.username}</td>
                    <td>{comment.phone}</td>
                    <td>{comment.email}</td>
                    <td>{comment.comment}</td>
                    <td className="text-info">
                      <Link to="/faq/details">More..</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqContent;
