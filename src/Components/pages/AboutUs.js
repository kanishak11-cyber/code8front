import React from "react";
import "../../App.css";
import { Button } from "../Button";
import Whatdrivesus from "../whodiveus/Whatdrivesus";
import Wahtwhy from "../WhatWhy/Wahtwhy";
import Ouroffering from "../Ouroffering/Ouroffering";
import classes from "./css/aboutus.module.css";
import Mentorstats from "../Stats/Mentorstats";
export default function AboutUs() {
  return (
    <div>
      {/* Who we are */}
      <div className="grid-container">
        <div className="grid-item">
          <h1
          className = {`who-we-are ${classes.heading}`}
            style={{
              color: '#089ee8',
              fontWeight:"600"
            }}
          >
            Who we are?
          </h1>

          <p className={`aboutpg ${classes.aboutpg}`}>
            Code8 is an experiential  learning platform driven by the energy of code and ideas to harness the power of innovation in learners.
            We are building a culture to work on projects while getting upskilled with industry relevant learnings and experience.

          </p>
        </div>

        <div className={`grid-item ${classes.infographics}`}>
          <img id="img-ab" className={classes.whorweimg} src="https://github.com/KapadiaShubham/code8-media/blob/master/about-us/abo.png?raw=true"></img>
        </div>
      </div>

      {/* What drives us */}
      <Whatdrivesus />


      {/* {WHAT we do Why We do} */}
      <Wahtwhy />

      {/* Why Code8 */}
      {/* <div className="why-code8-heading">
        <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          fontSize: 80,
          fontSize: 64,
          fontFamily: "poppins",
          fontWeight: 400,
          }}
        >
          Why
          <img src="/images/code8.png"></img>
        </h3>
      </div> */}

      {/* Our offerings */}

      <Ouroffering Heading={'Our offerings'} />
  
     
      <Mentorstats/>
    </div>
  );
}
