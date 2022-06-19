import React from "react";
import "./Ourreach.css";

const Ourreach = () => {
  return (
    <div className="Ourreach">
      <div className="Ourreach-head">Our reach</div>
      <div className="reach-holder">
        <div className="reaches">
          <img src="/images/reach1.png" />
          <div className="reach-data">
            <h1 className="reach-card-head">2K+</h1>
            <h3 className="reach-card-p" style={{ width: "80px" }}>
              Community members
            </h3>
          </div>
        </div>
        <div className="reaches">
          <img src="/images/reach2.png" />
          <div className="reach-data">
            <h1 className="reach-card-head">500+</h1>
            <h3 className="reach-card-p" style={{ width: "120px" }}>
             Opportunities created
            </h3>
          </div>
        </div>
        <div className="reaches">
          <img src="/images/reach3.png"/>
          <div className="reach-data">
            <h1 className="reach-card-head">50+</h1>
            <h3 className="reach-card-p" style={{ width: "80px" }}>
              Projects build
            </h3>
          </div>
        </div>
        <div className="reaches">
          <img src="/images/reach4.png"/>
          <div className="reach-data">
            <h1 className="reach-card-head">10+</h1>
            <h3 className="reach-card-p" style={{ width: "80px" }}>
              Companies
            </h3>
          </div>
        </div>
        <div className="reaches">
          <img src="/images/reach5.png"/>
          <div className="reach-data">
            <h1 className="reach-card-head">50+</h1>
            <h3 className="reach-card-p" style={{ width: "120px" }}>
              Colleges
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourreach;
