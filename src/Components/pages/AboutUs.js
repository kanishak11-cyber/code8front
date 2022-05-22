import React from "react";
import "../../App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button } from "../Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Whatdrivesus from "../whodiveus/Whatdrivesus";

export default function AboutUs() {
  return (
    <div>
      {/* Who we are */}
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
              fontWeight: 400,
            }}
          >
            Who we are?
          </h1>

          <p className="aboutpg">
          Code8 is an experiential  learning platform driven by the energy of code and ideas to harness the power of innovation in learners.
We are building a culture to work on projects while getting upskilled with industry relevant learnings and experience.

          </p>
        </div>

        <div class="grid-item">
          <img id="img-ab" src="/images/abo.png"></img>
        </div>
      </div>

      {/* How students learn with us */}
      <div class="grid-container">
        <div class="grid-item">
          <img id="img-ab2" src="/images/abo2.png"></img>
        </div>

        <div class="grid-item">
          <div className="jr-container">
            <Card className="juniorolym"  style={{
             background :"linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
          }}>
              <CardContent>
                <Typography
                  style={{
                    fontSize: "36px",
                    color: "black",
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "70px",
                    alignItems: "justify",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  color="#fff"
                  gutterBottom
                >
                  How student learn with us?
                </Typography>
                <Typography
                  style={{
                    justifyContent: "center",
                    fontSize: "18px",
                    color: "black",
                    display: "flex",
                    textAlign: "justify",
                    fontFamily: "Poppins",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Rutrum <br></br> laoreet tellus nulla in justo. Cursus
                  pulvinar in neque accumsan id <br></br> erat. In amet ac donec
                  magnis ligula. Vulputate mauris, vel ultrices<br></br>
                  quam commodo commodo. Risus id quam urna volutpat dignissim
                  <br></br> ullamcorper. Fermentum ultricies dui leo pulvinar
                  porta. Sollicitudin<br></br>ac eget et habitant nullam.
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>

          <div className="jr-container" >
            <Card className="juniorolym" style={{
             background :"linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
          }}>
              <CardContent>
                <Typography
                  style={{
                    fontSize: "36px",
                    color: "black",
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "justify",
                    marginLeft: "70px",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  color="#fff"
                  gutterBottom
                >
                  Philosophy
                </Typography>
                <Typography
                  style={{
                    justifyContent: "center",
                    fontSize: "18px",
                    color: "black",
                    display: "flex",
                    textAlign: "justify",
                    fontFamily: "Poppins",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Rutrum <br></br> laoreet tellus nulla in justo. Cursus
                  pulvinar in neque accumsan id <br></br> erat. In amet ac donec
                  magnis ligula. Vulputate mauris, vel ultrices<br></br>
                  quam commodo commodo. Risus id quam urna volutpat dignissim
                  <br></br> ullamcorper. Fermentum ultricies dui leo pulvinar
                  porta. Sollicitudin<br></br>ac eget et habitant nullam.
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
        </div>
      </div>
   
      {/* {WHAT we do Wht We do} */}
     
      <svg
        style={{ marginBottom: "-20px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#089ee8"
          fill-opacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,85.3C672,64,768,32,864,16C960,0,1056,0,1152,10.7C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div style={{ margin: "40px 0px", background: "#089ee8" }}>
        <Grid container spacing={4} style={{ padding: "0px 30px" }}>
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: "100%",
                filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                background: "#F5F5F5",
                boxSizing: "border-box",
                borderRadius: "39px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "30px",
                }}
              >
                <div style={{ margin: "0px" }}>
                  <img
                    src="/images/illustration_why we do.png"
                    style={{
                      borderRadius: "56px",
                      width: "350px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "36px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#000000",
                    margin: "0px",
                  }}
                >
                  Why We Do?
                </div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#000000",
                    margin: "10px 0px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  cras est nisl enim, pellentesque lorem dolor est habitant.
                  Vitae nunc, dolor gravida duis. At et, quam est donec.
                  Consectetur morbi et dignissim sed amet erat augue quis. Et,
                  aliquam ac turpis vestibulum vulputate tellus. Sed sit mauris
                  suspendisse imperdiet lectus ultrices eget ornare interdum.
                  Neque ultricies ornare nunc, pulvinar malesuada odio pharetra.
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: "100%",
                filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                background: "#F5F5F5",

                boxSizing: "border-box",
                borderRadius: "39px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "30px 30px",
                }}
              >
                <div style={{ margin: "0px" }}>
                  <img
                    src="/images/illus_3.png"
                    style={{
                      borderRadius: "56px",
                      width: "350px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "36px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#000000",
                    margin: "0px",
                  }}
                >
                  What We Do?
                </div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#000000",
                    margin: "10px 0px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  cras est nisl enim, pellentesque lorem dolor est habitant.
                  Vitae nunc, dolor gravida duis. At et, quam est donec.
                  Consectetur morbi et dignissim sed amet erat augue quis. Et,
                  aliquam ac turpis vestibulum vulputate tellus. Sed sit mauris
                  suspendisse imperdiet lectus ultrices eget ornare interdum.
                  Neque ultricies ornare nunc, pulvinar malesuada odio pharetra.
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: "100%",
                filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                background: "#F5F5F5",
                boxSizing: "border-box",
                borderRadius: "39px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "30px 30px",
                }}
              >
                <div style={{ margin: "0px" }}>
                  <img
                    src="/images/illus_4.png"
                    style={{
                      borderRadius: "56px",
                      width: "350px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "36px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#000000",
                    margin: "0px",
                  }}
                >
                  How will you learn?
                </div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#000000",
                    margin: "10px 0px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  cras est nisl enim, pellentesque lorem dolor est habitant.
                  Vitae nunc, dolor gravida duis. At et, quam est donec.
                  Consectetur morbi et dignissim sed amet erat augue quis. Et,
                  aliquam ac turpis vestibulum vulputate tellus. Sed sit mauris
                  suspendisse imperdiet lectus ultrices eget ornare interdum.
                  Neque ultricies ornare nunc, pulvinar malesuada odio pharetra.
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <img src="images/ladder.png" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                minWidth: "100%",
                filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                background: "#F5F5F5",

                marginTop: "40px",
                boxSizing: "border-box",
                borderRadius: "39px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "30px 30px",
                }}
              >
                <div style={{ margin: "0px" }}>
                  <img
                    src="/images/illus_5.png"
                    style={{
                      borderRadius: "56px",
                      width: "350px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "36px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#000000",
                    // margin: "20px 0px",
                  }}
                >
                  Why Code8?
                </div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#000000",
                    margin: "10px 0px",
                  }}
                >
                  Code8 is an experiential  learning platform driven by the energy 
                  of code and ideas to harness the power of innovation in learners.
                  We are building a culture to work on projects while getting upskilled
                   with industry relevant learnings and experience.

                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <img src="images/baloon.png" />
            </div>
          </Grid>
        </Grid>
      </div>
 
      {/* What drives us */}
       <Whatdrivesus/>
      {/* Why Code8 */}
      <div class="why-code8-heading">
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
      </div>

      <div class="hello">
        <div class="information">
          <div class="list" style={{
              background: 'linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)',
          }}>
            <h3 style={{
                fontWeight: "normal",
                fontSize: "48px",
                fontStyle: "normal",
              }}
             >Our Offerings</h3>
            <ul>
              <li>Project-based Learning</li>
              <li>Start-up & Incubator Network</li>
              <li>Soft Skill Development</li>
              <li>Placement Preparation</li>
              <li>Academic Guidance</li>
              <li>Career Mapping</li>
            </ul>
          </div>
          <div class="text-info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              vitae vehicula nisi, tincidunt eget. Imperdiet quam quam pharetra
              in semper senectus semper. Orci dui semper molestie ac rutrum
              sociis nulla. Hac est donec nulla et sit sit. Quam eu laoreet
              tellus sed. Ridiculus at mi aliquam lacus lectus scelerisque
              tempus, dictumst augue. Scelerisque ut non interdum risus et massa
              amet sed. Vitae, donec aliquam at mauris in. Bibendum senectus nec
              eget arcu mattis lectus id. Fames aliquet lacus, et massa,
              ullamcorper sem morbi erat congue.
            </p>
            <br></br>
            
            {/* <button class="btn1">Join our community for FREE!</button> */}
            <Button buttonSize="btn--large" buttonColor="blue">
              Join our community for FREE!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
