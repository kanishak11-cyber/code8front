import React from "react";
import { Button } from "../Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Courses() {
  return (
    <>
      {/* Boost your career */}
      <div
        style={{
          // background: "linear-gradient(45deg ,#2AF59B 45% ,#0FBED8 10% ,#1BD78B 45%)",
          // backgroundImage:`url("/images/courses-bg.png")`,
          // backgroundSize:"contain",
          // backgroundRepeat: 'no-repeat',
        }}
      >
        <div class="grid-container">
          <div class="grid-item">
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "90px",
                marginTop: "100px",
                fontSize: "64px",
                fontFamily: "poppins",
                fontWeight: "400",
                color: "#1BD78B",
              }}
            >
              Boost your career with our courses!
            </h1>

            <p className="coursepg" style={{ color: 'black' }}>
              We believe that every student, irrespective of their<br></br>{" "}
              college or branch, can make it big. All of our courses<br></br>
              are FREE while never compromising on quality.<br></br>We cover
              every topic in detail with a hands-on<br></br>approach and mentor
              you with career.
            </p>
          </div>

          <div class="grid-item">
            <img src="/images/courses-hero-img.png"></img>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ marginTop: 50 }}>
        <h1 className="build-head">Features</h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 24,
            fontFamily: "Poppins",
          }}
        >
          What makes our courses special?
        </p>

        <div class="grid-container-home">
          <div class="grid-item" style={{background:"#F5F5F5",margin:"1rem",borderRadius:"27px",padding:"0.7rem  1rem"}}>
            <div className="features-class">
              <img style={{ display: "flex" }} src="/images/brain.png"></img>
            </div>

            <h1 className="courses-features-h1">Structured Learning</h1>

            <p className="courses-features-para">
              Learning made easy. Complete <br></br> syllabus is covered while
              never<br></br>
              compromising on quality.
            </p>
          </div>

          <div class="grid-item" style={{background:"#F5F5F5",margin:"1rem",borderRadius:"27px",padding:"0.7rem  1rem"}}>
            <div className="features-class">
              <img style={{ display: "flex" }} src="/images/Notes.png"></img>
            </div>

            <h1 className="courses-features-h1">Notes</h1>

            <p className="courses-features-para">
              Get complete notes for all<br></br>
              lectures so that you can focus on<br></br>learning and
              practising..
            </p>
          </div>

          <div class="grid-item" style={{background:"#F5F5F5",margin:"1rem",borderRadius:"27px",padding:"0.7rem  1rem"}}>
            <div className="features-class">
              <img style={{ display: "flex" }} src="/images/Projects.png"></img>
            </div>

            <h1 className="courses-features-h1">Projects</h1>

            <p className="courses-features-para">
              Learn by doing and apply your<br></br>
              knowledge via projects and open<br></br>source contributions.
            </p>
          </div>
        </div>

        <div class="grid-container-home">
          <div className="grid-item"></div>
          <div class="grid-item" style={{background:"#F5F5F5",margin:"1rem",borderRadius:"27px",padding:"0.7rem  1rem"}}>
            <div className="features-class">
              <img
                style={{ display: "flex" }}
                src="/images/completion.png"
              ></img>
            </div>

            <h1 className="courses-features-h1">Certificate of completion</h1>

            <p className="courses-features-para">
              Get Certificate on the successful<br></br>completion of a course
            </p>
          </div>
        </div>
      </div>

      {/* Courses */}

      <div className="bg-built-nextpro" style={{ background: "linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)" }}>
        <h1 className="build-head"
          style={{ PaddingTop: "20px", color: 'white' }}
        >
          Courses
        </h1>

        <p style={{ display: "flex", alignItems: 'center', justifyContent: "center", color: 'white', lineHeight: '2', fontSize: '20px', letterSpacing: '3px' }} >Explore a wide range of courses!!</p>

        <div class="grid-container-Courses-project">

          <div class="grid-item">
            <div className="course-card-container">
              <Card
                className="course-card"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                  border: "2px solid #1978A5",
                }}
              >
                <CardContent>

                  <img style={{ display: "block", marginLeft: 'auto', marginRight: 'auto' }} src="/images/javasym.png"></img>

                  <Typography
                    style={{
                      fontSize: "28px",
                      color: "black",
                      marginTop: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: 'center',
                      textAlign: '-webkit-center',
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                    color="#fff"
                    gutterBottom
                  >
                    Master Data Structures and <br></br> Algorithms using Java
                  </Typography>

                  <Typography
                    style={{
                      justifyContent: "center",
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "black",
                      display: "flex",
                      textAlign: "-webkit-center",
                      fontFamily: "Poppins",
                    }}
                  >
                    Learn Data structures and Algorithms right<br></br>from the basics and become an<br></br>accomplished programmer
                    using Java, one<br></br>of the most popular programming<br></br>languages in the world and brighten your<br></br>
                    chances of making it to the Top Tech<br></br>organisations as an Intern or SDE.
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
                    Learn more
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
            <div className="course-card-container">
              <Card
                className="course-card"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                  border: "2px solid #1978A5",
                }}
              >
                <CardContent>

                  <img style={{ display: "block", marginLeft: 'auto', marginRight: 'auto' }} src="/images/C++.png"></img>

                  <Typography
                    style={{
                      fontSize: "28px",
                      color: "black",
                      marginTop: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: 'center',
                      textAlign: '-webkit-center',
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                    color="#fff"
                    gutterBottom
                  >
                    Master Data Structures and<br></br>Algorithms using C++
                  </Typography>

                  <Typography
                    style={{
                      justifyContent: "center",
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "black",
                      display: "flex",
                      textAlign: "-webkit-center",
                      fontFamily: "Poppins",
                    }}
                  >
                    Learn Data structures and Algorithms right<br></br>from the basics and become an<br></br>accomplished programmer
                    using Java, one<br></br>of the most popular programming<br></br>languages in the world and brighten your<br></br>
                    chances of making it to the Top Tech<br></br>organisations as an Intern or SDE.
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
                    Learn more
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

        <div class="grid-container-Courses-project">

          <div class="grid-item">
            <div className="course-card-container">
              <Card
                className="course-card"
                sx={{
                  overflow: "inherit",
                  filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                  border: "2px solid #1978A5",
                }}
              >
                <CardContent>

                  <img style={{ display: "block", marginLeft: 'auto', marginRight: 'auto' }} src="/images/WebD.png"></img>

                  <Typography
                    style={{
                      fontSize: "28px",
                      color: "black",
                      marginTop: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: 'center',
                      textAlign: '-webkit-center',
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                    color="#fff"
                    gutterBottom
                  >
                    Master Full Stack Web<br></br>Development
                  </Typography>

                  <Typography
                    style={{
                      justifyContent: "center",
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "black",
                      display: "flex",
                      textAlign: "-webkit-center",
                      fontFamily: "Poppins",
                    }}
                  >
                    Learn Data structures and Algorithms right<br></br>from the basics and become an<br></br>accomplished programmer
                    using Java, one<br></br>of the most popular programming<br></br>languages in the world and brighten your<br></br>
                    chances of making it to the Top Tech<br></br>organisations as an Intern or SDE.
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
                    Learn more
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
          <div
            class="list"
            style={{ background: " linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8) ", color: "white" }}
          >
            <h3
              style={{
                fontWeight: "normal",
                fontSize: "48px",
                fontStyle: "normal",
              }}
            >
              Our Offerings
            </h3>
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
              learn from mentors from top tech companies.  ( the learning you need, the skills you want, the career you deserve)
              We partner with mentors from companies like amazon, paytm, deloitte, tcs, hitachi, cisco
              To provide you with industry relevant cohort based courses
              Get the company like experiential learning right from your college.
              Hone your skills like never before.

            </p>
            <br></br>

            <Button buttonSize="btn--large" buttonColor="blue">
              Join our community for FREE!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
