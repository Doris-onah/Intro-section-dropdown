import React from "react";
import "./Home.css";
import hero from "./images/image-hero-desktop.png";
import audio from "./images/client-audiophile.svg";
import databiz from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
import heromobile from "./images/image-hero-mobile.png";
import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <div className="Home">
      <div className="home-container">
        <Helmet>
          <title>Into section</title>
          <meta name="description" content="Home" />
          <link rel="canonical" href="/" />
        </Helmet>

        <div className="box">
        <div className="box1">
          <div className="box-con">
         <div className="h1-box"><h1>Make <br/> Remote Work</h1></div>
          
          <p>
        Get your team in sync, no matter your location.<br/>
         Streamline processes, create team rituals, and <br/>
          watch productivity soar. Learn more
          </p>
        <div className="learn-btn">
          <button>Learn More</button>
          </div>
         </div>
          <div className="icons">
<img src={audio} alt="audio" width="73px" height="36px"/>
<img src={databiz} alt="databiz" width="114px" height="20px"/>
<img src={maker} alt="maker" width="83px" height="24px"/>
<img src={meet} alt="meet" width="90px" height="20px"/>
          </div>
        </div>
        </div>

        <div className="box2">
          <img src={hero} alt="hero-image" width="600px" height="700px" className="herodk"/>
          <img src={heromobile} alt="hero-image" width="300px" height="400px"  className="heromb"/>
        </div>
      </div>
    </div>
  );
}
