import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Spinner() {
  return (
    <>
      <div className="text-center my-3">
        <RotatingLines
          visible={true}
          height="40"
          width="40"
          color="dark"
          strokeWidth="7"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
}

export default Spinner;
