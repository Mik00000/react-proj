import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <div>
      <div className="heading">
        <h1>Hello {isChecked ? userName : "Guest"}</h1>
      </div>
      <div className="form">
        <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/>
        <input type="checkbox" onChange={(e)=>{setIsChecked(e.target.checked)}}/>
      </div>
    </div>
  );
};

export default Form;
