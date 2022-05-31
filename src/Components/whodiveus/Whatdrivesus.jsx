import React from 'react'
import "./whatdriveus.css"

const Whatdrivesus = () => {
    return (
        <div className='Whatdrivesus'>
            <div className="w-card-holder">
                <div className="w-card">
                    <img src="/images/Vision.png" alt="" />
                    <div className="w-reason">Vision</div>
                    <div className="w-card-content">
                        To provide industry relevant skills and exposure to every engineer in making.
                    </div>
                </div>
                <div className="w-card">
                    <img src="/images/Mission.jpg" alt="" />
                    <div className="w-reason">Mission</div>
                    <div className="w-card-content">
                        Upskilling young geniuses to create a better world through technology.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Whatdrivesus