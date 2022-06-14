import React from "react";
import "./Whatwhy.css";
import { Parallax } from "react-scroll-parallax";

const Wahtwhy = () => {
  return (
    <div className="Whatwhy">
      <div className="what-card">
        <div className="what-card-image">
          <img src="/images/illustration_why we do.png" alt="" />
        </div>
        <div className="what-card-text">
          <div className="what-head">
            <Parallax translateX={[100,-45]}><span>Why</span></Parallax>
            <Parallax translateX={[120,-10]}><span>we</span></Parallax>
            <Parallax translateX={[140,40]}><span>do</span> </Parallax>
            <Parallax translateX={[180,200]}> <span>?</span></Parallax>
         
          </div>
          Projects and doing stuff in real world is a great way to get upskilled
          and we believe in providing such opportunities to students at their
          fingertips with a professional cult.
        </div>
      </div>
      <div className="what-card">
        <div className="what-card-image">
          <img src="/images/illus_3.png" alt="" />
        </div>
        <div className="what-card-text">
          <div className="what-head">
          <Parallax translateX={[100,-45]}><span>What</span></Parallax>
            <Parallax translateX={[120,-10]}><span>we</span></Parallax>
            <Parallax translateX={[140,40]}><span>do</span> </Parallax>
            <Parallax translateX={[180,200]}> <span>?</span></Parallax>
          </div>
          We provide students, experiential learning opportunities with our
          build, lean and community programs to gain more industry relevent
          skills and exposure in order to become truely professional.
        </div>
      </div>
    </div>
  );
};

export default Wahtwhy;
