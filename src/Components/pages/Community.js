import React from "react";
import "../../App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button } from "../Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "../pages/Ourcommunity/Ourcommunity.css";

import Typography from "@mui/material/Typography";
import Mentor from "../mentors/Mentor";

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
          src="/images/Join-Us.png"
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
            <Button buttonSize="btn--large" buttonColor="blue">
              Join our community for FREE!
            </Button>
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
            Student Ambassador Program
          </h1>

          <p className="aboutpg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            Sit duis in posuere platea tellus libero id. Sit ac vitae<br></br>
            pellentesque auctor. Turpis non nunc tellus adipiscing<br></br>
            augue nam ut convallis. Commodo sed a metus, pulvinar<br></br>
            elementum pellentesque. Donec elementum dignissim id<br></br>
            cursus odio nisi nisi, eleifend eu.
          </p>

          <div
            style={{ display: "flex", marginLeft: "88px", marginTop: "-60px" }}
          >
            <Button buttonSize="btn--large" buttonColor="blue">
              Apply Now
            </Button>
          </div>
        </div>

        <div class="grid-item">
          <img
            style={{ marginTop: "120px", paddingRight: "100px" }}
            src="/images/ambassdaor.png"
          ></img>
        </div>
      </div>

      {/* Mentors */}
       <Mentor/>
      {/* Workshops */}
      <div style={{ padding: "30px 0px 60px 0px" }}>
        <h1 className="build-head">Workshops</h1>
        {/* 1st div */}
        <div style={{ padding: "20px 214px 0px 328px" }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {/* 1.1 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "rgba(25, 120, 165, 0.17)",
                  boxSizing: "border-box",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  border: "1px solid #1978A5",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <h1 className="workshops-card-head">
                      Lorem ipsum dolor sit
                    </h1>
                    <h1 className="workshops-card-para">80+ Participants</h1>
                    <Link to="/knowMore" className="workshops-card-knowMore">
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/* 1.2 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "rgba(25, 120, 165, 0.17)",
                  boxSizing: "border-box",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  border: "1px solid #1978A5",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <h1 className="workshops-card-head">
                      Lorem ipsum dolor sit
                    </h1>
                    <h1 className="workshops-card-para">80+ Participants</h1>
                    <Link to="/knowMore" className="workshops-card-knowMore">
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        {/* 2nd div */}
        <div style={{ padding: "20px 214px 0px 328px" }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {/* 2.1 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "rgba(25, 120, 165, 0.17)",
                  boxSizing: "border-box",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  border: "1px solid #1978A5",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <h1 className="workshops-card-head">
                      Lorem ipsum dolor sit
                    </h1>
                    <h1 className="workshops-card-para">80+ Participants</h1>
                    <Link to="/knowMore" className="workshops-card-knowMore">
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/* 1.2 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "rgba(25, 120, 165, 0.17)",
                  boxSizing: "border-box",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  border: "1px solid #1978A5",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <h1 className="workshops-card-head">
                      Lorem ipsum dolor sit
                    </h1>
                    <h1 className="workshops-card-para">80+ Participants</h1>
                    <Link to="/knowMore" className="workshops-card-knowMore">
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        {/* 3rd div */}
        <div style={{ padding: "20px 214px 0px 328px" }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {/* 3.1 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "rgba(25, 120, 165, 0.17)",
                  boxSizing: "border-box",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  border: "1px solid #1978A5",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <h1 className="workshops-card-head">
                      Lorem ipsum dolor sit
                    </h1>
                    <h1 className="workshops-card-para">80+ Participants</h1>
                    <Link to="/knowMore" className="workshops-card-knowMore">
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/* 3.2 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "rgba(25, 120, 165, 0.17)",
                  boxSizing: "border-box",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  border: "1px solid #1978A5",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <h1 className="workshops-card-head">
                      Lorem ipsum dolor sit
                    </h1>
                    <h1 className="workshops-card-para">80+ Participants</h1>
                    <Link to="/knowMore" className="workshops-card-knowMore">
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        {/* 4th div */}
        <div style={{ padding: "20px 214px 0px 328px" }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {/* 4.1 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "rgba(25, 120, 165, 0.17)",
                  boxSizing: "border-box",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  border: "1px solid #1978A5",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <h1 className="workshops-card-head">
                      Lorem ipsum dolor sit
                    </h1>
                    <h1 className="workshops-card-para">80+ Participants</h1>
                    <Link to="/knowMore" className="workshops-card-knowMore">
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/* 4.2 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "rgba(25, 120, 165, 0.17)",
                  boxSizing: "border-box",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  border: "1px solid #1978A5",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <h1 className="workshops-card-head">
                      Lorem ipsum dolor sit
                    </h1>
                    <h1 className="workshops-card-para">80+ Participants</h1>
                    <Link to="/knowMore" className="workshops-card-knowMore">
                      Know More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

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
                src="/images/events-img.png"
              ></img>
            </Grid>

            <Grid item>
              <div style={{ margin: "100px 80px" }}>
                <div>
                  <h1 className="events-h1">Upcoming Events</h1>
                  <h1 className="events-h2">No Upcoming Events.</h1>
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
    </div>
  );
}
