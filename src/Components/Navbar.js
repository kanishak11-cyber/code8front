import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown1 from "./Dropdown/Dropdown1";
import Dropdown2 from "./Dropdown/Dropdown2";
import Dropdown3 from "./Dropdown/Dropdown3";
import Dropdown4 from "./Dropdown/Dropdown4";
import Dropdown from "@restart/ui/esm/Dropdown";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaCross, FaExclamationCircle } from "react-icons/fa";

function Navbar() {
  const [open2, setOpen2] = useState(false);
  const [pop, setpop] = useState(true);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [button1, setButton1] = useState(true);
  const showButton1 = () => {
    if (window.innerWidth <= 960) {
      setButton1(false);
    } else {
      setButton1(true);
    }
  };
  window.addEventListener("resize", showButton1);

  // Dropdown1
  const [click1, setClick1] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick1 = () => setClick1(!click1);
  const closeMobileMenu1 = () =>{
    setClick1(false);
  } 

  const extendElement1 = () => {
    dropdown1 ? setDropdown1(false) : setDropdown1(true);
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  // Dropdown2
  const [click2, setClick2] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick2 = () => setClick2(!click2);
  const closeMobileMenu2 = () => setClick2(false);

  const extendElement2 = () => {
    dropdown1 ? setDropdown2(false) : setDropdown2(true);
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  // Dropdown3
  const [click3, setClick3] = useState(false);

  const handleClick3 = () => setClick3(!click3);
  const closeMobileMenu3 = () => setClick3(false);

  const [click4, setClick4] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  const handleClick4 = () => setClick4(!click4);
  const closeMobileMenu4 = () => setClick4(false);

  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* logo */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu1}>
          <img src="/images/Frame1.png"></img>
        </Link>

        {/* Home */}
        <div className="menu-icon" onClick={handleClick1}>
          <i className={click1 ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click1 ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu1}>
              Home
            </Link>
          </li>

          {/* About us */}
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu1}
            >
              About Us
            </Link>
          </li>

          {/* Library */}
          <li
            className="nav-item"
            onClick={extendElement1}
          >
            <Link
              to="/built"
              className="nav-links"
              onClick={closeMobileMenu1}>
              Build
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={closeMobileMenu1}
          >
            <Link to="/learn" className="nav-links">
              Learn
            </Link>
          </li>

          {/* Community */}
          <li
            className="nav-item"
            onClick={closeMobileMenu1}
          >
            <Link to="/community" className="nav-links">
              Community
              {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {/* {dropdown4 && <Dropdown4 onCloseMobileMenu={closeMobileMenu4} />} */}
          </li>
          {/* Updates */}

          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu1}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {/* <LoginButton /> */}
        {/* <SignUpButton /> */}
        <div className="btn-mobile">
          {button1 && (
            <Button
              buttonStyle="btn--primary btn--mobile"
              buttonSize="btn--medium"
              onClick={handleClickOpen}
            >
              Login
            </Button>
          )}
        </div>
        <div className="btn-mobile">
          {button1 && (
            <Button
              buttonStyle="btn--primary btn--mobile"
              buttonSize="btn--medium"
              onClick={handleClickOpen2}
            >
              Sign Up
            </Button>
          )}
        </div>
        {pop && <div className="Popup">
          <div className="popup-head">
            <div className="close-button">
              <i class="fa-solid fa-xmark" onClick={()=>{setpop(false)}}></i>
            </div>
          </div>
          <div className="popup-body">
            <p>Let opportunities land in your inbox.</p>
            <div onClick={handleClickOpen2} style={{cursor:"pointer"}}> Sign up now for free. </div>
          </div>
        </div>}
      </nav>
      <Dialog open={open2} onClose={handleClose2} fullWidth="yes" maxWidth="sm">
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <img
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/x-mark%201.png?raw=true"
                onClick={handleClose2}
                style={{ cursor: "pointer" }}
              />
            </span>
            <span style={{ display: "flex" }}>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  marginRight: "18px",
                  fontSize: "16px",
                  lineHeight: "36px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                New to Code8 ?
              </div>
              {/* <Button
                buttonStyle="btn--primary sizee"
                buttonSize="btn--small"
                buttonStyl
              >
                Sign Up
              </Button> */}
            </span>
          </div>
          <div>
            <TextField label="Email" fullWidth style={{ margin: "15px 0px" }} />
            <TextField
              label="Password"
              fullWidth
              style={{ margin: "15px 0px 5px 0px" }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "36px",
                display: "flex",
                justifyContent: "end",
                color: "#407BFF",
                cursor:"pointer"
              }}
            >
              Forget Password?
            </span>
          </div>
          <Button
            buttonStyle="btn--primary sizee"
            buttonSize="btn--small"
            stylee="stylee"
          >
            Signin
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px 0px 0px",
            }}
          >
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      <Dialog open={open} onClose={handleClose} fullWidth="yes" maxWidth="sm">
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <img
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/x-mark%201.png?raw=true"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </span>
            <span style={{ display: "flex" }}>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  marginRight: "18px",
                  fontSize: "16px",
                  lineHeight: "36px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                New to Code8 ?
              </div>
              {/* <Button
                buttonStyle="btn--primary sizee btn--mobile"
                buttonSize="btn--small"
              >
                Sign Up
              </Button> */}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span
              style={{
                margin: "10px 0px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "35px",
                lineHeight: "72px",
                display: "flex",
                alignItems: "center",
                color: "#000000",
              }}
            >
              Welcome Back
            </span>
          </div>

          <div>
            <TextField label="Email" fullWidth style={{ margin: "15px 0px" }} />
            <TextField
              label="Password"
              fullWidth
              style={{ margin: "15px 0px 5px 0px" }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "36px",
                display: "flex",
                justifyContent: "end",
                color: "#407BFF",
                cursor:"pointer"
              }}
            >
              Forget Password?
            </span>
          </div>
          <Button
            buttonStyle="btn--primary sizee"
            buttonSize="btn--small"
            stylee="stylee"
          >
            Login
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px 0px 0px",
            }}
          >
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default Navbar;
