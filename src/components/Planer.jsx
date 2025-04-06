import React, { useState } from "react";
import "./Planer.css"
const Planer = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
    console.log(tasks)
  function addTask(){
    setTasks([...tasks, newTask])
    setNewTask("")
  }
  return (
    <div className="planer">
      <div className="heading">
        <input type="text" onChange={(e)=>{setNewTask(e.target.value)}} value={newTask}/>
        <button type="submit" onClick={()=>{addTask()}}>Submit</button>
      </div>
      <ul className="tasks">
        {tasks.map((task, key)=>(
            <li className="task" key={key}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Planer;
