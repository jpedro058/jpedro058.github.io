import React from "react";

const ProgressBar = ({ progress }) => (
  <div
    style={{
      width: "50%",
      backgroundColor: "rgb(0, 82, 0)",
    }}
  >
    <div
      className="progress"
      style={{
        width: `${progress}%`,
        height: "20px",
        backgroundColor: "green",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-3px",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        {progress}%
      </div>
    </div>
  </div>
);

export default ProgressBar;
