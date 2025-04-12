import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";


function Header({name, menu}){

  return (
    <header>
      <Link to="/"><h2>{name}</h2></Link>
      <ul>
      {menu.map((item)=>(
        <li>
          <Link to={item.url}>
            {item.name}
          </Link>
        </li>
      ))}
      </ul>


    </header>
  );
};
// console.log(Header())
export default Header;
