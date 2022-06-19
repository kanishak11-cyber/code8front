import { height } from "@mui/system";
import React from "react";
import { Button } from "../Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Howitworks from "../Howitworks/Howitworks";
import Stats from "../Stats/Stats";
import Projectbuild from "../FindNextProject/Projectbuild";

export default function Built() {
  return (
    <>
      {/* What is build */}
      <div className="builttop">
        <div className="builtpara">
          <div className="build-head">
            Master your skill, one project at a time !
          </div>
          <div
            style={{
              fontFamily: "Poppins",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            We have created a wide range of build programs
            where you can hone your skill while working
            on projects.
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: "30px"
            }}
          >
            <Button buttonSize="btn--large" buttonColor="blue">
              Start Building Project
            </Button>
          </div>
        </div>
        <img src="/images/build.jpeg" />
      </div>

      {/* Still writing */}
      <div style={{ background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)", margin: "10vh 0" , padding:"4vh 0"}} className="Still-writing">
        <div class="grid-container">
          <img src="/images/still_writing.png" style={{height:"auto",width:"85%",margin:"auto"}}></img>
          <div class="grid-item">
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                marginTop: "80px",
                fontSize: "36px",
                fontFamily: "Poppins",
                fontWeight: "600",
                letterSpacing: "0.01em",
                padding: "1.1rem",
              }}
            >
              Still writing “Hello World”?
            </h1>

            <p
              style={{
                fontFamily: "Poppins",
                paddingLeft: "30px",
                fontSize: "1.6rem",
                lineHeight: "27px",
                marginTop: "14px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.01em",
                width: "85%",
              }}
            >
              start building real world projects with us.
            </p>
          </div>
        </div>
      </div>

      <Howitworks />

      {/* Find your next project */}
      <Projectbuild />

      <Stats />

      {/* Built by Code8 */}
      <div className="builtbycode8">
        <div class="grid-container">
          <div class="grid-item">
            <img src="/images/built_by_code8.png" style={{height:"auto",width:"85%",margin:"auto"}}></img>
          </div>

          <div class="grid-item">
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "30px",
                marginTop: "44px",
                fontSize: "36px",
                fontFamily: "Poppins",
                fontWeight: "600",
                letterSpacing: "0.01em",
              }}
            >
              Build like a software engineer.
              {/* <img src="https://github.com/KapadiaShubham/code8-media/blob/master/Logo.png?raw=true" style={{height:"10%",width:"20%"}}></img> */}
            </h1>

            <p
              style={{
                fontFamily: "Poppins",
                paddingLeft: "30px",
                fontSize: "18px",
                lineHeight: "27px",
                marginTop: "14px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.01em",
                width: "70%",
              }}
            >
              Go zero to one
              From an idea to fully develop MVP.
              Build MVP while working in a team.
              One on one realtime mentoring and project building experience like a tech company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
