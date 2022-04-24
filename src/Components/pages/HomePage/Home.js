import React from "react";
import HeroSection from "../../HeroSection";
import { Button } from "../../Button";
// import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo } from "./Data";
// import Pricing from '../../Pricing';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Hidden } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Portfolio from "../Portfolio/Portfolio";
import Ourcommunity from "../Ourcommunity/Ourcommunity";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <div style={{ float: "right", marginTop: "-80px", marginRight: "108px" }}>
        <Button buttonSize="btn--large" buttonColor="blue">
          Join our community for free
        </Button>
      </div>
      <HeroSection {...homeObjTwo} />

      <div style={{ float: "right", marginTop: "-80px", marginRight: "360px" }}>
        <Button buttonSize="btn--large" buttonColor="blue">
          <span style={{ display: "flex" }}>
            Read more <ArrowForwardIcon style={{ marginLeft: "7px" }} />
          </span>
        </Button>
      </div>

      {/* Why What */}
      <svg
        style={{ marginBottom: "-20px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1978A5"
          fill-opacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,85.3C672,64,768,32,864,16C960,0,1056,0,1152,10.7C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div style={{ margin: "40px 0px", background: "#1978A5" }}>
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

      {/* Portfolio */}
      <Portfolio />
      {/* Our Reach */}
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "64px",
            lineHeight: "96px",
          }}
        >
          Our reach
        </h1>
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            fontFamily: "poppins",
            fontWeight: 400,
          }}
        >
          <img id="icon" src="/images/Logo.png"></img>
          Community
        </h3>
        {/* 1st container */}
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
          margin=""
          style={{ padding: "50px 0px 60px 170px" }}
        >
          {/* 1.1 card */}
          <Grid item xs={4}>
            <Card
              sx={{
                width: "280px",
                background: "rgba(25, 120, 165, 0.7)",
                boxSizing: "border-box",
                borderRadius: "22px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingBottom: "16px",
                }}
              >
                <div style={{ margin: "0px 20px 0px 0px" }}>
                  <img
                    src="/images/reach1.png"
                    style={{
                      width: "90px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "left",
                  }}
                >
                  <h1 className="reach-card-head">1K+</h1>
                  <h1 className="reach-card-p" style={{ width: "80px" }}>
                    Total Students
                  </h1>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* 1.2 card */}
          <Grid item xs={4}>
            <Card
              sx={{
                width: "280px",
                background: "rgba(25, 120, 165, 0.7)",
                boxSizing: "border-box",
                borderRadius: "22px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingBottom: "16px",
                }}
              >
                <div style={{ margin: "0px 20px 0px 0px" }}>
                  <img
                    src="/images/reach2.png"
                    style={{
                      width: "90px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "left",
                  }}
                >
                  <h1 className="reach-card-head">10+</h1>
                  <h1 className="reach-card-p" style={{ width: "120px" }}>
                    Programs & Workshops
                  </h1>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* 1.3 card */}
          <Grid item xs={4}>
            <Card
              sx={{
                width: "280px",
                background: "rgba(25, 120, 165, 0.7)",
                boxSizing: "border-box",
                borderRadius: "22px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingBottom: "16px",
                }}
              >
                <div style={{ margin: "0px 20px 0px 0px" }}>
                  <img
                    src="/images/reach3.png"
                    style={{
                      width: "90px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "left",
                  }}
                >
                  <h1 className="reach-card-head">10</h1>
                  <h1 className="reach-card-p" style={{ width: "80px" }}>
                    Projects Completed
                  </h1>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* 2nd container */}
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
          margin=""
          style={{ padding: "0px 0px 80px 170px" }}
        >
          {/* 2.1 card */}
          <Grid item xs={4}>
            <Card
              sx={{
                width: "280px",
                background: "rgba(25, 120, 165, 0.7)",
                boxSizing: "border-box",
                borderRadius: "22px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingBottom: "16px",
                }}
              >
                <div style={{ margin: "0px 20px 0px 0px" }}>
                  <img
                    src="/images/reach4.png"
                    style={{
                      width: "90px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "left",
                  }}
                >
                  <h1 className="reach-card-head">10</h1>
                  <h1 className="reach-card-p" style={{ width: "80px" }}>
                    Companies Associated
                  </h1>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* 2.2 card */}
          <Grid item xs={4}>
            <Card
              sx={{
                width: "280px",
                background: "rgba(25, 120, 165, 0.7)",
                boxSizing: "border-box",
                borderRadius: "22px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingBottom: "16px",
                }}
              >
                <div style={{ margin: "0px 20px 0px 0px" }}>
                  <img
                    src="/images/reach5.png"
                    style={{
                      width: "90px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "left",
                  }}
                >
                  <h1 className="reach-card-head">10</h1>
                  <h1 className="reach-card-p" style={{ width: "120px" }}>
                    Institutes Associated
                  </h1>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* Events Gallery */}
      <h2 style={{
        paddingTop: "1rem",
        textAlign: "center",
        fontWeight: "bold"
      }}>Events Gallery</h2>
      <h2 style={{
        paddingBottom: "1.5rem",
        textAlign: "center",
        fontWeight: "normal"
      }}>Some Clicks From Previous Events</h2>
      <section className=" py-4 my-8" style={{
        fontFamily: "poppins",
        textAlign: "center",
        background: "rgba(25, 120, 165, 0.7)"
      }}>

        <FontAwesomeIcon icon={faChevronRight} style={{
          height: "3rem",
          width: "3rem",
          float: "left",
          marginLeft: "4.4rem",
          marginTop: '11.4rem'
        }} />


        <div className="container">
          <FontAwesomeIcon icon={faChevronRight} style={{
            height: "3rem",
            width: "3rem",
            float: "right",
            marginTop: '11.4rem'
          }} />
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail ">
                  <img src="https://www.markuptag.com/images/image-six.jpg" className="img-fluid" alt="thumbnail" />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail" >
                  <img src="https://www.markuptag.com/images/image-six.jpg" className="img-fluid" alt="thumbnail" />
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail" >
                  <img src="https://www.markuptag.com/images/image-six.jpg" className="img-fluid" alt="thumbnail" />
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail">
                  <img src="https://www.markuptag.com/images/image-six.jpg" className="img-fluid" alt="thumbnail" />
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail" >
                  <img src="https://www.markuptag.com/images/image-six.jpg" className="img-fluid" alt="thumbnail" />
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail">
                  <img src="https://www.markuptag.com/images/image-six.jpg" className="img-fluid" alt="thumbnail" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div></div>

      {/* Our Community */}
      <Ourcommunity />
      {/* Testimonial */}
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "64px",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Testimonials
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
            fontFamily: "Poppins",
            fontWeight: "normal",
            padding: "10px 30px 40px 30px",
          }}
        >
          Some amazing Experience from Techie Around.
        </p>

        <div class="grid-container-home">
          <div class="grid-item">
            <div className="home-card-container">
              <Card
                className="homecard"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                }}
              >
                <CardContent>
                  <img
                    style={{ display: "flex", marginLeft: 85 }}
                    id="img-home"
                    src="/images/profile.png"
                  ></img>

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
                    Anirudh
                  </Typography>

                  <img
                    style={{ display: "flex", marginLeft: 50 }}
                    id="img-rating"
                    src="/images/rating.png"
                  ></img>

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
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                    elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                    pellentesque em dolor est <br></br>
                    habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                    quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                    dignissim sed amet erat<br></br> augue quis.
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="grid-item">
            <div className="home-card-container">
              <Card
                className="homecard"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                }}
              >
                <CardContent>
                  <img
                    style={{ display: "flex", marginLeft: 85 }}
                    id="img-home"
                    src="/images/profile.png"
                  ></img>

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
                    Anirudh
                  </Typography>

                  <img
                    style={{ display: "flex", marginLeft: 50 }}
                    id="img-rating"
                    src="/images/rating.png"
                  ></img>

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
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                    elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                    pellentesque em dolor est <br></br>
                    habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                    quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                    dignissim sed amet erat<br></br> augue quis.
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="grid-item">
            <div className="home-card-container">
              <Card
                className="homecard"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                }}
              >
                <CardContent>
                  <img
                    style={{ display: "flex", marginLeft: 85 }}
                    id="img-home"
                    src="/images/profile.png"
                  ></img>

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
                    Anirudh
                  </Typography>

                  <img
                    style={{ display: "flex", marginLeft: 50 }}
                    id="img-rating"
                    src="/images/rating.png"
                  ></img>

                  <Typography
                    style={{
                      justifyContent: "center",
                      fontSize: "18px",
                      marginTop: "20px",
                      justifyContent: "center",
                      color: "black",
                      display: "flex",
                      textAlign: "justify",
                      fontFamily: "Poppins",
                    }}
                  >
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                    elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                    pellentesque em dolor est <br></br>
                    habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                    quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                    dignissim sed amet erat<br></br> augue quis.
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
