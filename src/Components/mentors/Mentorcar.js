import React from 'react'
import "./mentorcar.css"

const mentorcar = () => {
    return (
        <div className="ment-card">
            <div className="company-holder">AMAZON</div>
            <div className="ment-container">
                <div className="mentor-holder">
                    <img src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg" alt="" />
                    <span className="ment-name">Jennes Austin</span>
                    <div className="ment-logos">
                        <a href="#"> <i className="fa-brands fa-github"></i> </a>
                        <a href="#"> <i className="fa-brands fa-linkedin"></i> </a>
                    </div>
                </div>
                <div className="mentor-holder">
                    <img src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg" alt="" />
                    <span className="ment-name">Jennes Austin</span>
                    <div className="ment-logos">
                        <a href="#"> <i className="fa-brands fa-github"></i> </a>
                        <a href="#"> <i className="fa-brands fa-linkedin"></i> </a>
                    </div>
                </div>
                <div className="mentor-holder">
                    <img src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg" alt="" />
                    <span className="ment-name">Jennes Austin</span>
                    <div className="ment-logos">
                        <a href="#"> <i className="fa-brands fa-github"></i> </a>
                        <a href="#"> <i className="fa-brands fa-linkedin"></i> </a>
                    </div>
                </div>
            </div>
            <div className="read-more">
               <a href="#"> Read more <i className="fa-solid fa-angle-right"></i> </a>
            </div>
        </div>
    )
}

export default mentorcar