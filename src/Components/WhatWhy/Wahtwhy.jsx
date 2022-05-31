import React from 'react'
import "./Whatwhy.css"

const Wahtwhy = () => {
    return (
        <div className="Whatwhy">
            <div className="what-card">
                <img src="/images/illustration_why we do.png" alt="" />
                <div className="what-head">
                    Why we do ?
                </div>
                <div className="what-card-text">
                Projects and doing stuff in real world is a great way to get upskilled and we believe in providing such opportunities to students at their fingertips with a professional cult.
                </div>
            </div>
            <div className="what-card">
                <img src="/images/illus_3.png" alt="" />
                <div className="what-head">
                    What we do ?
                </div>
                <div className="what-card-text">
                We provide students, experiential learning opportunities with our build, lean and community programs to gain more industry relevent skills and exposure in order to become truely professional.
                </div>
            </div>
        </div>
    )
}

export default Wahtwhy