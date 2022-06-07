import React from "react";
import "../../App.css";
import { Button } from "../Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "../pages/Ourcommunity/Ourcommunity.css";
import Mentor from "../mentors/Mentor";
import Mentorstats from "../Stats/Mentorstats";
import Features from "../Features/Features";
import Ouroffering from "../Ouroffering/Ouroffering";
import Ourcommunity from "./Ourcommunity/Ourcommunity";

export default function Community() {
  return (
    <div>
      {/* Join Us */}
      <div className="builttop">
        <img
          className="community-image"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
          src="https://github.com/KapadiaShubham/code8-media/blob/master/community/Join-Us.png?raw=true"
        ></img>

        <div className="builtpara">
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
          </div>
        </div>
      </div>

      {/* Student Ambassador Program*/}
      <div class="grid-container">
        <div class="grid-item">
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "90px",
              marginTop: "100px",
              fontSize: 64,
              fontFamily: "poppins",
              fontWeight: 500,
            }}
          >
            Community
          </h1>
          <div className="aboutpg">
            <p>Learn on the go with diverse community of techies and get ahead in your career.</p>
            <p>We have created a cultured community of t5echies for you to leverage peer to peer learning, collaboration and help.</p>
          </div>
          {/* <Button buttonSize="btn--large" buttonColor="blue">
            Join now for free.
          </Button> */}

          <Button buttonSize="btn--large" buttonColor="blue" stylee={{ margin: "20px" }}>
            Join now for free
          </Button>
        </div>

        <div class="grid-item">
          <img
            style={{ marginTop: "120px", paddingRight: "100px" }}
            src="https://github.com/KapadiaShubham/code8-media/blob/master/community/ambassador.png?raw=true"
          ></img>
        </div>
      </div>

      {/* Mentors */}
      {/* <Mentor/> */}


      {/* Features */}
      <Features />

      <div style={{ padding: "30px 0px 60px 0px" }}>
        {/* Events */}
        <div style={{ padding: "50px 0px 50px 0px" }}>
          <h1 className="build-head">Events</h1>
          <Grid container>
            <Grid item>
              <img
                style={{
                  width: "65%",
                  marginLeft: "220px",
                  marginTop: "20px",
                  marginBottom: "40px",
                }}
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/events-img.png?raw=true"
              ></img>
            </Grid>

            <Grid item>
              <div style={{ margin: "100px 80px" }}>
                <div>
                  <h1 className="events-h1">Upcoming Events</h1>
                  <h1 className="events-h2">Coming Soon</h1>
                </div>
                <br></br>
                <br></br>
                <div>
                  <h1 className="events-h1">Past Events</h1>
                  <div className="events-list">
                    <ul>
                      <li>04/02/2022, Hackathon</li>
                      <li>06/02/2022, Hackathon</li>
                      <li>14/02/2022, Hackathon</li>
                    </ul>
                  </div>
                </div>
                <br></br>
                <Button buttonSize="btn--large" buttonColor="blue">
                  See More
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* Mentors Stats */}
      <Mentorstats />

      {/* Our offerings */}
      <Ourcommunity/>
    </div>
  );
}
