import React from "react";
import '../asset/css/style.css'
function Hero(props) {
  return (
    <>
    <div className="container-fluid">
      <div className="row bg-grey">
        <div className="d-flex justify-content-center col-md-12 py-5">

          <div>
            <h1>{props.page} page</h1>
            <p>Wellcome to Home {props.page}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
