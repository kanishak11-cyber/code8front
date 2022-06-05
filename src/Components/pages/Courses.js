import React from 'react'
import { Button } from '../Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import About2 from './AboutCode8/About2'
import Stats2 from '../Stats/Stats2'

import { Link } from 'react-router-dom'

import './css/learncss.css'
import './buttonCSS/test-button.css'
import Features2 from './Features2'
import Features3 from '../Features/Features3'

export default function Courses () {
  return (
    <>
      {/* Boost your career */}
      <div
        className='learnPage'
        style={
          {
            // background: "linear-gradient(45deg ,#2AF59B 45% ,#0FBED8 10% ,#1BD78B 45%)",
            // backgroundImage:`url("/images/courses-bg.png")`,
            // backgroundSize:"contain",
            // backgroundRepeat: 'no-repeat',
          }
        }
      >
        <div class='grid-container'>
          <div class='grid-item learn-content'>
            <h1
              className = 'learn-page-h1'

            >
              Learn from mentors you want,
              <br />
              the career you deserve!
            </h1>
            <p className='coursepg' style={{ color: 'black' }}>
              We partner with mentors from companies like Amazon, PayTm,
              Deloitte, TCE, Hitachi, Cisco to provide you with industry
              relevant cohort based courses.
              <br />
              Get the company like experiential learning right from your college
              and Hone your skills like never before.
            </p>
            <div className='flex justify-content-center'>
              <Link className='btn' to='/register'>
                <span className='btn-content'>
                  Register to get notify for our next cohort
                </span>
                <span className='icon'>
                  <i className='fa fa-arrow-right' aria-hidden='true'></i>
                </span>
              </Link>
            </div>
          </div>

          <div className='grid-item'>
            <img src='/images/courses-hero-img.png'></img>
          </div>
        </div>
      </div>

      <Features2 />

      {/* Courses */}

      <div
        className='bg-built-nextpro explore-courses'
        style={{
          background: 'linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)'
        }}
      >
        <h1
          className='build-head'
          style={{ PaddingTop: '20px', color: 'white', textAlign: 'center'}}
        >
          Explore Courses
        </h1>

        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            lineHeight: '2',
            fontSize: '20px',
            letterSpacing: '3px'
          }}
        >
          Explore a wide range of courses!!
        </p>

        <div class='grid-container-Courses-project'>
          {/* <div class="grid-item">
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
          </div> */}
        </div>

        {/* <div class="grid-container-Courses-project">

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
 </div> */}

        {/* <div className="coming-soon glow-on-hover"> */}
        <div id='testbutton'></div>
      </div>
      <About2 />

      {/* Why Code8 */}
      <div class='why-code8-heading'>
        <h3
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            fontSize: 80,
            fontSize: 64,
            fontFamily: 'poppins',
            fontWeight: 400
          }}
        >
          Why
          <img src='/images/code8.png'></img>
        </h3>
      </div>
      <Features3 />

      <div class='s2-hello'>
        <div class='stats2-information'>
          <Stats2 />
          <div class='mentor-text-info'>
            <p>
              Learn from mentors from top tech companies. ( the learning you
              need, the skills you want, the career you deserve) We partner with
              mentors from companies like amazon, paytm, deloitte, tcs, hitachi,
              cisco To provide you with industry relevant cohort based courses
              Get the company like experiential learning right from your
              college. Hone your skills like never before.
            </p>
            <br></br>
            <div className='register-now'>
              Register now and get notify for our upcoming courses
              <br />
              <Button buttonSize='btn--large' buttonColor='blue'>
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
