import React from 'react'
import "./Mentorstats.css"

const Mentorstats = () => {
  return (
    <div className='Mentorstats'>
        <div className="Stats-head">
        Stats
        </div>
        <div className="Stats-holder">
            <div className="stats-block Mstat">
                <div className="MSdata">100+ </div>
                <div className="MSmetadata">Events</div>
            </div>
            <div className="stats-block Mstat">
                <div className="MSdata">1K+</div>
                <div className="MSmetadata">Community members</div>
            </div>
            <div className="stats-block Mstat">
                <div className="MSdata">10K+</div>
                <div className="MSmetadata">have taken the advantage of our programs</div>
            </div>
            <div className="stats-block Mstat">
                <div className="MSdata">100+</div>
                <div className="MSmetadata">Hours of free learing</div>
            </div>
        </div>
    </div>
  )
}

export default Mentorstats