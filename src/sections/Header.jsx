import React from "react";
import "./Header.css"
function Header({name, menu}){

  return (
    <header>
      <h2>{name}</h2>
      <ul>
      {menu.map((item)=>(
        <li>
          <a href={item.url}>
            {item.name}
          </a>
        </li>
      ))}
      </ul>


    </header>
  );
};

export default Header;
