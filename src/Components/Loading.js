import React from "react";
import loadingImage from "./Spin.gif";

function Loading() {
  return (
    <>
      <img
        src={loadingImage}
        alt="Loading"
        style={{
          display: "block",
          width: "200px",
          margin: "auto",
        }}
      />
    </>
  );
}

export default Loading;
