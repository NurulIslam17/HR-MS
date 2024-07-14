import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <RotatingLines
        visible={true}
        height="15"
        width="15"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
}

export default Loader;
