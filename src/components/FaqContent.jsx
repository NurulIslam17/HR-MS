import React from "react";

function FaqContent() {
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
                </tr>
              </thead>
              <tbody>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Not Funny</td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Not Funny</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqContent;
