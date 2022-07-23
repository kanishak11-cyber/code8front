import React from 'react'
import "./Projects.css"
import { Link } from 'react-router-dom'

const Projects = () => {
  return (<div className='Projects'>
    <div className="Project-name">
        Amazon Clone
    </div>
    <div className="Project-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur consequatur magni! Eveniet nemo nulla, velit minus nostrum magni impedit fugit distinctio.
    </div>
    <div className="Project-buttons">
       <Link to="/project-page"> <button className="View project-but">View Project  <i className="fa-solid fa-arrow-right"></i></button></Link>
        <Link to="/project-page"><button className="Download project-but">Download Projects  <i className="fa-solid fa-arrow-right"></i></button></Link>
    </div>
  </div>
  )
}

export default Projects