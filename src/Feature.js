import React from "react";
import { useState } from "react";
import arrowUp from "../src/images/icon-arrow-up.svg";
import arrowDown from "../src/images/icon-arrow-down.svg";
import todo from "../src/images/icon-todo.svg";
import reminder from "../src/images/icon-reminders.svg";
import calendar from "../src/images/icon-calendar.svg";
import planing from "../src/images/icon-planning.svg";

export default function Company() {
    const [arrow,setArrow] = useState(true)
   
    return(
        <div className="Feature">
                <a href="#">Features</a>
        <div onClick={() => setArrow(!arrow)}>
  {arrow?
         <img src={arrowUp} alt="arrow"  width="10px" height="6px"/> :
         <img src={arrowDown} alt="arrow"  width="10px" height="6px"/>}
         

         <div className= {arrow? "get" : "dropdown" } >
     <ul>
       <li>
        <span><img src={todo} alt="todo" /></span> <a href="#">Todo list</a>
       </li>
       <li>
        <span><img src={calendar} alt="calender" /></span> <a href="#">Calender</a>
       </li>
       <li>
       <span><img src={reminder} alt="reminder" /></span>  <a href="#">Reminders</a>
       </li>
       <li>
        <span><img src={planing} alt="planing" /></span> <a href="#">Planing</a>
       </li>
     </ul>
       </div>
       </div>
       </div>
    )
}