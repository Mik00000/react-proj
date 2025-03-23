import React from "react";

const Button = ({ children, backgroundColor, padding }) => {
  return (
    <button
      className="btn"
      style={{
        padding: padding,
        fontWeight: 500,
        fontSize: "17px",
        lineHeight: "100%",
        letterSpacing: "0.01em",
        backgroundColor: backgroundColor || "transparent",
        border: backgroundColor ? "unset" : "1px solid white",
        color:"white"
      }}
    >
        {children}
    </button>
  );
};

export default Button;



