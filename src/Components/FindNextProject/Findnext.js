import React from 'react'
import Project from './Project'
import "./Findnext.css"

const Findnext = (props) => {
 
  const queryurl = new URLSearchParams(window.location.search)

  const level = queryurl.get('level')

  return (
    <div className='Findnext'>
      <div className='project-page-head'>Find your next project</div>
      <div className="levels"> {level} </div>
      <div className="Status">
      </div>
    
    </div>
  )
}

export default Findnext