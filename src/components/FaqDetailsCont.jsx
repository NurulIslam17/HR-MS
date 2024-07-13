import React from "react";

function FaqDetailsCont() {
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
                    <strong>Name : </strong> Md. Sagor Khan
                  </p>
                  <p className="mb-0">
                    <strong>Email : </strong>app@.com
                  </p>
                  <p className="mb-0">
                    <strong>Phone : </strong>023772388
                  </p>
                </div>
                <div className="col-md-8">
                  <h5 className="text-center">Comment Description</h5>
                  <hr />
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sunt cupiditate perferendis doloremque fugit ullam facilis
                    reprehenderit optio repellendus omnis aut.
                  </p>
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
