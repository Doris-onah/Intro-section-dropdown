import React from "react";
import "./Header.css";
import logo from "../src/images/logo.svg";
import Login from "./Login";
import Feature from "./Feature"
import iconMenu from "../src/images/icon-menu.svg";
import iconClose from "../src/images/icon-close-menu.svg";
import { useState } from "react";
import Company from "./Company";



export default function Header() {
  
  const [menu, setMenu] = useState(false);
  
  const handleMenu = (e) => {
    setMenu(!menu);
    e.preventDefault();
  };

  return (
    <div className="header">
      <div className="header-con">
      <div className="logo">
        <img src={logo} alt="logo" width="84px" height="27px"/>
      </div>

<div className={menu ? "get" : "nav" }>
  <div className=  "nav-link">
  <ul>
    <li>
      <a href="#"><Feature/></a>
    </li>
    <li>
      <a href="#"><Company/></a>
    </li>
    <li>
      <a href="#">Careers</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
  </ul>

<ul>
  
  <div className="signUp">
   <Login/>
   <button className="register">Register</button>
  </div>
  </ul>
  </div>
  
</div> 

<div className="menu">
{menu ? (
            <img src={iconMenu} alt="menu" onClick={handleMenu} width="26px" height="26px"/>
          ) : (
            <img src={iconClose} alt="menu" onClick={handleMenu} width="26px" height="26px"/>
          )}
        </div>


      </div>
      </div>
  )
}
