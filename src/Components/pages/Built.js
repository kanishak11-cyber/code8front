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

export default function Built() {
  return (
    <>
      {/* What is build */}
      <div className="builttop">
        <img
          src=".\images\Build Illustration (1) 1.png"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        />
        <div className="builtpara">
          <h1 className="build-head"
          >
            What is Build?
          </h1>
          <p
            style={{

              fontFamily: "Poppins",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "30px",
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            Master your skills, one project at a time.
            We have created a wide range of build programs
            where you can hone your skill while working
            on projects.
          </p>
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
      </div>

      {/* Still writing */}
      <div style={{ background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)", margin: "10vh 0" }}>
        <div class="grid-container">
          <div class="grid-item">
            <img
              style={{
                marginLeft: "170px",
                width: "70%",
                marginTop: "40px",
                marginBottom: "40px",
              }}
              src="/images/still_writing.png"
            ></img>
          </div>

          <div class="grid-item">
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "70px",
                marginTop: "110px",
                fontSize: "36px",
                fontFamily: "Poppins",
                fontWeight: "600",
                letterSpacing: "0.01em",
              }}
            >
              Still writing “Hello World”? <br></br>
              Build real-world projects
            </h1>

            <p
              style={{
                fontFamily: "Poppins",
                paddingLeft: "70px",
                fontSize: "18px",
                lineHeight: "27px",
                marginTop: "14px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.01em",
                width: "70%",
              }}
            >
              Bridge the gap between learning and applying new skills through
              projects designed by senior developers. More languages coming
              soon!
            </p>
          </div>
        </div>
      </div>

      <Howitworks />

      {/* Find your next project */}
      <div>
        <h1 className="build-head"
          style={{ PaddingTop: "20px", }}
        >
          Find your Next Project
        </h1>

        <div class="grid-container-built-project">
          <div class="grid-item">
            <div className="home-card-container">
              <Card
                className="built-card"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                  border: "2px solid #1978A5",
                }}

                style={{
                  height: "100%",
                  background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
                }}
              >
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "36px",
                      color: "black",
                      marginTop: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "justify",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                    color="#fff"
                    gutterBottom
                  >
                    Beginner
                  </Typography>

                  <Typography
                    style={{
                      justifyContent: "center",
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "black",
                      display: "flex",
                      textAlign: "justify",
                      fontFamily: "Poppins",
                    }}
                  >
                    Find a beginner level project for you. Which requires entry level skills and short time to complete.
                  </Typography>

                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 40,
                      fontSize: 20,
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    <a href="/production?level=Begginer"> Learn more </a>
                    <img
                      style={{ marginLeft: "15px" }}
                      src="/images/smallarrow.png"
                    ></img>
                  </h3>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="grid-item">
            <div className="home-card-container">
              <Card
                className="built-card"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                  border: "2px solid #1978A5",
                }}
                style={{
                  height: "100%",
                  background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
                }}
              >
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "36px",
                      color: "black",
                      marginTop: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "justify",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                    color="#fff"
                    gutterBottom
                  >
                    Intermediate
                  </Typography>

                  <Typography
                    style={{
                      justifyContent: "center",
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "black",
                      display: "flex",
                      textAlign: "justify",
                      fontFamily: "Poppins",
                    }}
                  >
                    It's a mid skill project range where you can work on
                    a particular project for a long span of time individually
                    or in a team. It involves multi domain skills to get the
                    project done.
                  </Typography>

                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 40,
                      fontSize: 20,
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    <a href="/production?level=Intermediate"> Learn more </a>
                    <img
                      style={{ marginLeft: "15px" }}
                      src="/images/smallarrow.png"
                    ></img>
                  </h3>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="grid-item">
            <div className="home-card-container">
              <Card
                className="built-card"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                  border: "2px solid #1978A5",
                }}
                style={{
                  height: "100%",
                  background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
                }}
              >
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "36px",
                      color: "black",
                      marginTop: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "justify",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                    color="#fff"
                    gutterBottom
                  >
                    Advanced
                  </Typography>

                  <Typography
                    style={{
                      justifyContent: "center",
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "black",
                      display: "flex",
                      textAlign: "justify",
                      fontFamily: "Poppins",
                    }}
                  >
                    It's a whole team project, which directs towards solving
                    particular problems and developing an MVP As an innovative solution.
                    Here you work with mentors in real time to get the task done
                  </Typography>

                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 40,
                      fontSize: 20,
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                  >
                    <a href="/production"> Learn more </a>
                    <img
                      style={{ marginLeft: "15px" }}
                      src="/images/smallarrow.png"
                    ></img>
                  </h3>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Stats />
      {/* Built by Code8 */}
      <div style={{}}>
        <div class="grid-container">
          <div class="grid-item">
            <img
              style={{
                marginLeft: "200px",
                width: "50%",
                marginTop: "40px",
                marginBottom: "40px",
              }}
              src="/images/built_by_code8.png"
            ></img>
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
              Built by
              <img src="/images/Logo.png"></img>
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
              Build like a software engineer
              Go zero to one
              From an idea to fully develop MVP
              Build MVP while working in a team.
              One on one realtime mentoring and project building experience like a tech company.
              Solve real life problems
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
