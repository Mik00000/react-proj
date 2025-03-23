import React, { useState } from "react";

const Test = () => {
  const [counter, setCounter] = useState(0);
//   const [змінна, сеттерЗмінної] = useState(початкове значення)
  return (
    <div
      style={{
        color: "#FFF",
      }}
    >
      {counter}
      <button onClick={()=>{
        // setCounter(counter+1)
        setCounter((prev)=>prev+1)
      }}>Click me</button>
    </div>
  );
};

export default Test;
