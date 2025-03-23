import React from "react";

const Heading = ({ children }) => {
  return (
    <h2
      style={{
        fontWeight: 400,
        fontSize: "52px",
        lineHeight: "100%",
        letterSpacing: "0em",
        color: "white",
        padding: "10px",
      }}
    >
      {children}
    </h2>
  );
};

export default Heading;
