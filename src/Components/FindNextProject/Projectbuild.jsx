import React from 'react'
import "./Projectbuild.css"

const Projectbuild = () => {
  return (
    <div className='Projectbuild'>
        <h1 className="Projectbuild-head">
        Find your Next Project
        </h1>
        <div className="Projectbuild-body">
            <div className="Project-template">
                <div className="Project-lvl">Begginer</div>
                <div className="Project-content">
                Find a beginner level project for you. Which requires entry level skills and short time to complete.
                </div>
                <div className="Progrct-link">
                  <a href="/production?level=Begginer"> Learn more </a>
                  <img
                      style={{ marginLeft: "15px" }}
                      src="/images/smallarrow.png"
                    ></img>
                </div>
            </div>
            <div className="Project-template">
                <div className="Project-lvl">Intermediate</div>
                <div className="Project-content">
                It's a mid skill project range where you can work on
                    a particular project for a long span of time individually
                    or in a team. It involves multi domain skills to get the
                    project done.
                </div>
                <div className="Progrct-link">
                  <a href="/production?level=Intermediate"> Learn more </a>
                  <img
                      style={{ marginLeft: "15px" }}
                      src="/images/smallarrow.png"
                    ></img>
                </div>
            </div>
            <div className="Project-template">
                <div className="Project-lvl">Advanced</div>
                <div className="Project-content">
                It's a whole team project, which directs towards solving
                    particular problems and developing an MVP As an innovative solution.
                    Here you work with mentors in real time to get the task done
                </div>
                <div className="Progrct-link">
                  <a href="/production"> Learn more </a>
                  <img
                      style={{ marginLeft: "15px" }}
                      src="/images/smallarrow.png"
                    ></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projectbuild