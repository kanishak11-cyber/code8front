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
import Triointro from "../../Triointro/Triointro";
import Stats from "../../Stats/Stats";
import Aboutcode8 from "../AboutCode8/Aboutcode8";
import Ouroffering from "../../Ouroffering/Ouroffering";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      {/* <div style={{ float: "right", marginTop: "-80px", marginRight: "108px" }}>
        <Button buttonSize="btn--large" buttonColor="blue" className="button">
          Join our community for free
        </Button>
      </div> */}
      {/* {Trio Introduction} */}
      <Ouroffering Heading={'Explore our programs'}/>
      {/* <Triointro/> */}
      {/* <HeroSection {...homeObjTwo} /> */}

     <Aboutcode8/>      

      {/* <div style={{ float: "right", marginTop: "-80px", marginRight: "360px" }}>
        <Button buttonSize="btn--large" buttonColor="blue">
          <span style={{ display: "flex" }}>
            Read more <ArrowForwardIcon style={{ marginLeft: "7px" }} />
          </span>
        </Button>
      </div> */}

       {/* Stats */}
       
      <Stats/>

      {/* Portfolio */}
      {/* <Portfolio /> */}
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
        {/* <h3
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
        </h3> */}
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
              style={{
                background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
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
              style={{
                background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
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
              style={{
                background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
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
              style={{
                background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
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
              style={{
                background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)"
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

      {/* Events Gallery */}
     
      <section className=" py-4 my-8" style={{
        fontFamily: "poppins",
        textAlign: "center",
        padding:'2rem 0rem',
        background: 'linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)',
      }}>
           
           <h2 style={{
        paddingTop: "1rem",
        textAlign: "center",
        fontWeight: "bold",
        margin:"1rem 0",
        fontSize:"2.4rem",
        fontFamily: "'Poppins', sans-serif",
      }}> Explore us in pictures </h2>
      {/* <h2 style={{
        paddingBottom: "1.5rem",
        textAlign: "center",
        fontWeight: "normal",
        fontFamily: "'Poppins', sans-serif",
      }}>Some Clicks From Previous Events</h2> */}

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
            marginTop: '11.4rem',
          }} />
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                margin:"5px 10px"
                // boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail ">
                  <a href="https://code8.ggeeks.me">
                  <img src="/images/Event1.jpeg" className="img-fluid" alt="thumbnail" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                margin:"5px 10px"
                // boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail" >
                  <a href="https://code8.ggeeks.me">
                  <img src="/images/Event1.jpeg" className="img-fluid" alt="thumbnail" />
                  </a>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                margin:"5px 10px"
                // boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail" >
                  <a href="https://code8.ggeeks.me">
                  <img src="/images/Event1.jpeg" className="img-fluid" alt="thumbnail" />
                  </a>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                margin:"5px 10px"
                // boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail">
                  <a href="https://code8.ggeeks.me">
                  <img src="/images/Event1.jpeg" className="img-fluid" alt="thumbnail" />
                  </a>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                margin:"5px 10px"
                // boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail" >
                  <a href="https://code8.ggeeks.me">
                  <img src="/images/Event1.jpeg" className="img-fluid" alt="thumbnail" />
                  </a>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card my-2" style={{
                width: "18rem",
                border: "none",
                margin:"5px 10px"
                // boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }}>
                <div className="card-thumbnail">
                  <a href="https://code8.ggeeks.me">
                  <img src="/images/Event1.jpeg" className="img-fluid" alt="thumbnail" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div></div>

      {/* Our Community */}
      <Ourcommunity />

    </>
  );
}

export default Home;
