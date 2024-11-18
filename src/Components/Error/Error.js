import React from "react";

const Error = () => {
  const message = "An error occurred. Please try again later.";
  return (
    <div>
      Error: {message}
      <div
        style={{
          color: "red",
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "5px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default Error;
