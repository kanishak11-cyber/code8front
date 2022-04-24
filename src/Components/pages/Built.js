import { height } from "@mui/system";
import React from "react";
import { Button } from "../Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Built() {
  return (
    <>
      {/* What is build */}
      <div className="builttop">
      <img
          src=".\images\Build Illustration (1) 1.png"
          style={{
            display:"flex",
            alignItems: "center",
            justifyContent:"center",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            viverra euismod pellentesque lorem sed sit mattis dictum. Eget dolor
            ut proin magna pellentesque augue gravida. Parturient libero vitae
            cursus eget vitae vitae at morbi pellentesque. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Arcu viverra euismod pellentesque
            lorem sed sit mattis dictum. Eget dolor ut proin magna pellentesque
            augue gravida. Parturient libero vitae cursus eget vitae vitae at
            morbi.
          </p>
          <div 
          style={{
            display:"flex",
            alignContent:"center",
            justifyContent:"center",
            marginTop:"30px"
             }}
          >
            <Button buttonSize="btn--large" buttonColor="blue">
              Start Building Project
            </Button>
          </div>
        </div>
      </div>

      {/* Still writing */}
      <div style={{ backgroundColor: "#5699b8" }}>
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

      {/* Why build projects with us */}

      <div>
        <h1 className="build-head">Why build projects with us?</h1>
        {/* div 1 */}
        <div style={{ padding: "20px 164px 0px 295px" }}>
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
                  background: "#ECFCF9",
                  boxSizing: "border-box",
                  boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)",
                  borderRadius: "56px",
                  marginTop: "80px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <img
                      className="whybuild-img"
                      src="/images/why_build_circle.png"
                    ></img>
                    <h1 className="whybuild-card-head">Integrity</h1>
                    <h1 className="whybuild-card-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi cras est nisl enim, pellentesque lorem dolor est
                      habitant. Vitae nunc, dolor gravida duis. At et, quam est
                      donec. Consectetur morbi et dignissim sed amet erat augue
                      quis. Et, aliquam ac turpis vestibulum vulputate tellus.
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/* 1.2 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "#ECFCF9",
                  boxSizing: "border-box",
                  boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)",
                  borderRadius: "56px",
                  marginTop: "80px",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <img
                      className="whybuild-img"
                      src="/images/why_build_circle.png"
                    ></img>
                    <h1 className="whybuild-card-head">Integrity</h1>
                    <h1 className="whybuild-card-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi cras est nisl enim, pellentesque lorem dolor est
                      habitant. Vitae nunc, dolor gravida duis. At et, quam est
                      donec. Consectetur morbi et dignissim sed amet erat augue
                      quis. Et, aliquam ac turpis vestibulum vulputate tellus.
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

        {/* div 2 */}
        <div style={{ padding: "30px 164px 50px 295px" }}>
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
                  background: "#ECFCF9",
                  boxSizing: "border-box",
                  boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)",
                  borderRadius: "56px",
                  marginTop: "80px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <img
                      className="whybuild-img"
                      src="/images/why_build_circle.png"
                    ></img>
                    <h1 className="whybuild-card-head">Integrity</h1>
                    <h1 className="whybuild-card-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi cras est nisl enim, pellentesque lorem dolor est
                      habitant. Vitae nunc, dolor gravida duis. At et, quam est
                      donec. Consectetur morbi et dignissim sed amet erat augue
                      quis. Et, aliquam ac turpis vestibulum vulputate tellus.
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/* 2.2 card */}
            <Grid item xs={6}>
              <Card
                sx={{
                  width: "400px",
                  background: "#ECFCF9",
                  boxSizing: "border-box",
                  boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)",
                  borderRadius: "56px",
                  marginTop: "80px",
                }}
              >
                <CardContent className="build-card-content">
                  <div>
                    <img
                      className="whybuild-img"
                      src="/images/why_build_circle.png"
                    ></img>
                    <h1 className="whybuild-card-head">Integrity</h1>
                    <h1 className="whybuild-card-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi cras est nisl enim, pellentesque lorem dolor est
                      habitant. Vitae nunc, dolor gravida duis. At et, quam est
                      donec. Consectetur morbi et dignissim sed amet erat augue
                      quis. Et, aliquam ac turpis vestibulum vulputate tellus.
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* How it works */}
      <div>
        <h1 className="build-head"
        >
          How it works?
        </h1>

        <div class="grid-container-built ">
          <div class="grid-item">
            <img id="img-built1" src="/images/rectangle.png"></img>
          </div>

          <div class="grid-item">
            <img id="img-arrow" src="/images/arrow.png"></img>
          </div>

          <div class="grid-item">
            <img id="img-built1" src="/images/rectangle.png"></img>
          </div>
        </div>

        <img
          style={{ width: "auto", paddingLeft: "1154px", marginTop: "60px" }}
          src="/images/arrow2.png"
        ></img>

        <div class="grid-container-built ">
          <div class="grid-item">
            <img id="img-built1" src="/images/rectangle.png"></img>
          </div>

          <div class="grid-item">
            <img id="img-arrow" src="/images/arrow3.png"></img>
          </div>

          <div class="grid-item">
            <img id="img-built1" src="/images/rectangle.png"></img>
          </div>
        </div>
      </div>

      {/* Find your next project */}
      <div className="bg-built-nextpro">
        <h1 className="build-head" 
        style={{PaddingTop:"20px",}}
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
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                    elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                    pellentesque em dolor est <br></br>
                    habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                    quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                    dignissim sed amet erat<br></br> augue quis.
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
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                    elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                    pellentesque em dolor est <br></br>
                    habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                    quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                    dignissim sed amet erat<br></br> augue quis.
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
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                    elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                    pellentesque em dolor est <br></br>
                    habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                    quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                    dignissim sed amet erat<br></br> augue quis.
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

      {/* Code8 Library */}
      <div style={{ marginTop: 50 }}>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontFamily: "poppins",
            fontWeight: 400,
          }}
        >
          <img id="icon" src="/images/Logo.png"></img>
          Library
        </h1>

        <div>
          <div class="grid-container-built-lib">
            <div class="grid-item">
              <div className="built-card-lib-container">
                <Card
                  className="code8-lib-card"
                  sx={{
                    overflow: "inherit",
                    filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                    border: "2px solid #1978A5",
                  }}
                >
                  <CardContent>
                    <img
                      style={{ marginLeft: -50 }}
                      id="img-abs-lib"
                      src="/images/codingpic.png"
                    ></img>

                    <div class="grid-container-built-project">
                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/wordpress.png"
                          ></img>
                          <p>Wordpress</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/angular.png"
                          ></img>
                          <p>Angular</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/react-js.png"
                          ></img>
                          <p>React</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </div>
            </div>

            <div class="grid-item">
              <div className="built-card-lib-container">
                <Card
                  className="code8-lib-card"
                  sx={{
                    overflow: "inherit",
                    filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                    border: "2px solid #1978A5",
                  }}
                >
                  <CardContent>
                    <img
                      style={{ marginLeft: -50 }}
                      id="img-abs-lib"
                      src="/images/app-dev.png"
                    ></img>

                    <div class="grid-container-built-project">
                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/android.png"
                          ></img>
                          <p>Wordpress</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/kotlin.png"
                          ></img>
                          <p>Angular</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/Flutter.png"
                          ></img>
                          <p>React</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </div>
            </div>

            <div class="grid-item">
              <div className="built-card-lib-container">
                <Card
                  className="code8-lib-card"
                  sx={{
                    overflow: "inherit",
                    filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                    border: "2px solid #1978A5",
                  }}
                >
                  <CardContent>
                    <img
                      style={{ marginLeft: -50 }}
                      id="img-abs-lib"
                      src="/images/cloud.png"
                    ></img>

                    <div class="grid-container-built-project">
                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/aws.png"
                          ></img>
                          <p>Wordpress</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/azure.png"
                          ></img>
                          <p>Angular</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/gcloud.png"
                          ></img>
                          <p>React</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </div>
            </div>

            <div class="grid-item">
              <div className="built-card-lib-container">
                <Card
                  className="code8-lib-card"
                  sx={{
                    overflow: "inherit",
                    filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                    border: "2px solid #1978A5",
                  }}
                >
                  <CardContent>
                    <img
                      style={{ marginLeft: -50 }}
                      id="img-abs-lib"
                      src="/images/database.png"
                    ></img>

                    <div class="grid-container-built-project">
                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/ethereum.png"
                          ></img>
                          <p>Wordpress</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/bitcoin.png"
                          ></img>
                          <p>Angular</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/Hyperledger.png"
                          ></img>
                          <p>React</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </div>
            </div>

            <div class="grid-item">
              <div className="built-card-lib-container">
                <Card
                  className="code8-lib-card"
                  sx={{
                    overflow: "inherit",
                    filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                    border: "2px solid #1978A5",
                  }}
                >
                  <CardContent>
                    <img
                      style={{ marginLeft: -50 }}
                      id="img-abs-lib"
                      src="/images/database.png"
                    ></img>

                    <div class="grid-container-built-project">
                      <div class="grid-item">
                        <h1
                          style={{
                            display: "flex",
                            marginTop: -50,
                            fontSize: 30,
                          }}
                        >
                          Blockchain
                        </h1>

                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/ethereum.png"
                          ></img>
                          <p>Wordpress</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/bitcoin.png"
                          ></img>
                          <p>Angular</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/Hyperledger.png"
                          ></img>
                          <p>React</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </div>
            </div>

            <div class="grid-item">
              <div className="built-card-lib-container">
                <Card
                  className="code8-lib-card"
                  sx={{
                    overflow: "inherit",
                    filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
                    border: "2px solid #1978A5",
                  }}
                >
                  <CardContent>
                    <img
                      style={{ marginLeft: -50 }}
                      id="img-abs-lib"
                      src="/images/database.png"
                    ></img>

                    <div class="grid-container-built-project">
                      <div class="grid-item">
                        <h1
                          style={{
                            display: "flex",
                            marginTop: -50,
                            fontSize: 30,
                          }}
                        >
                          AI/ML
                        </h1>

                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/ethereum.png"
                          ></img>
                          <p>Wordpress</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/bitcoin.png"
                          ></img>
                          <p>Angular</p>
                        </div>
                      </div>

                      <div class="grid-item">
                        <div style={{ marginLeft: 50 }}>
                          <img
                            style={{ display: "flex" }}
                            id="img"
                            src="/images/Hyperledger.png"
                          ></img>
                          <p>React</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              pellentesque sollicitudin a nec senectus rutrum. Ut sit sit
              aliquet egestas fermentum pretium quis id. Nisi enim felis,
              convallis urna, sit adipiscing id orci convallis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
