import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'


export default function Cards() {
  return (
    <>
        <div class='grid-container-Courses-project'>
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
                    Learn Data structures and Algorithms right<br/>from the basics and become an<br/>accomplished programmer
                    using Java, one<br/>of the most popular programming<br/>languages in the world and brighten your<br/>
                    chances of making it to the Top Tech<br/>organisations as an Intern or SDE.
                  </Typography>

                  <h3
                    className="learn-more"
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
                  className="mui-typography"
                    
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
    </>
  )
}
