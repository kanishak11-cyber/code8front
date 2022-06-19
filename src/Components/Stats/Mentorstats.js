import React from "react";
import "./Mentorstats.css";

const Mentorstats = () => {
  return (
    <div className="Mentorstats">
      <div className="Stats-head">Stats</div>
      <div className="Stats-holder">
        <div className="stats-block Mstat">
          <img src="/images/reach5.png"/>
          <div>
          <div className="MSdata">50+ </div>
          <div className="MSmetadata">Colleges</div>
          </div>
        </div>
        <div className="stats-block Mstat">
        <img src="/images/reach1.png" />
        <div>
          <div className="MSdata">2K+</div>
          <div className="MSmetadata">Community members</div>
        </div>
        </div>
        <div className="stats-block Mstat">
        <img src="/images/reach2.png" />
          <div>
          <div className="MSdata">500+</div>
          <div className="MSmetadata">Opportunities created</div>
          </div>
        </div>
        <div className="stats-block Mstat">
        <img src="/images/reach3.png"/>
          <div>
          <div className="MSdata">50+</div>
          <div className="MSmetadata">Projects Build</div>
          </div>
        </div>
        <div className="stats-block Mstat">
        <img src="/images/reach4.png"/>
        <div>
          <div className="MSdata">10+</div>
          <div className="MSmetadata">Companies and Partners</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorstats;
