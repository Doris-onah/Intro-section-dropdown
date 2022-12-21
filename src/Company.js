import React from "react";
import "./Company.css"
import { useState } from "react";
import arrowUp from "../src/images/icon-arrow-up.svg";
import arrowDown from "../src/images/icon-arrow-down.svg";

export default function Company() {
    const [arrow, setArrow] = useState(true)
    return(
        <div className="company">
                    <a href="#" >Company</a>
                    <div onClick={() => setArrow(!arrow)}>
                        {arrow?
                    <img src={arrowUp} alt="arrowup"  width="10px" height="6px"/> :
                    <img src={arrowDown} alt="arrowdown" width="10px" height="6px" />}

<div className= {arrow? "get" : "dropdown" } >
     <ul>
       <li>
        <span></span> <a href="#">History</a>
       </li>
       <li>
         <a href="#">Our Team</a>
       </li>
       <li>
         <a href="#">Blog</a>
       </li>
     </ul>
       </div>

                    </div>
        </div>
    )
}