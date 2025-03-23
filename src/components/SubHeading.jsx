import React from "react";

const SubHeading = ({children}) => {
  return (
    <h2
      style={{
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "100%",
        letterSpacing: "0em",
        color:"white",
        letterSpacing: "0.01em",
        padding:"10px"
      }}
    >
        {children}
    </h2>
  );
};

export default SubHeading;
