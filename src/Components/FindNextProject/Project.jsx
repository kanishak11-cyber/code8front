import React from 'react'
import './project.css'

const Project = (props) => {
  
    const{domain ,bgc} = props;

    return (
        <div className="project" style={{background:bgc }}>
            <div className="Domain">
            {props.domain}
            </div>
            <div className="projects">
                <div className="project-card">
                    <div className="pjc-head">Build a custom google map theme</div>
                    <div className="pjc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae error consequuntur dicta dolore rem cupiditate reprehenderit illum doloribus quam!</div>
                    <div className="pjc-skills">
                        <button className="skill-btn">Mongo DB</button>
                        <button className="skill-btn"> HTML </button>
                        <button className="skill-btn"> CSS3 </button>
                        <button className="skill-btn"> Postman </button>
                    </div>
                    <div className="pjc-foot">
                        <div className="viewmore"> view more </div>
                        <div className="download"> Download Project </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="pjc-head">Image search gallery</div>
                    <div className="pjc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae error consequuntur dicta dolore rem cupiditate reprehenderit illum doloribus quam!</div>
                    <div className="pjc-skills">
                        <button className="skill-btn">Mongo DB</button>
                        <button className="skill-btn"> HTML </button>
                        <button className="skill-btn"> CSS3 </button>
                        <button className="skill-btn"> Postman </button>
                    </div>
                    <div className="pjc-foot">
                        <div className="viewmore"> view more </div>
                        <div className="download"> Download Project </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="pjc-head">Build a custom google map theme</div>
                    <div className="pjc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae error consequuntur dicta dolore rem cupiditate reprehenderit illum doloribus quam!</div>
                    <div className="pjc-skills">
                        <button className="skill-btn">Mongo DB</button>
                        <button className="skill-btn"> HTML </button>
                        <button className="skill-btn"> CSS3 </button>
                        <button className="skill-btn"> Postman </button>
                    </div>
                    <div className="pjc-foot">
                        <div className="viewmore"> view more </div>
                        <div className="download"> Download Project </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project