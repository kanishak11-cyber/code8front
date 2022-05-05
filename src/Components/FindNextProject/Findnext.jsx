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
      <Project domain=' Web Development 'bgc='#384883B2' />
      <Project domain=' App Development' bgc='#1978A5B2' />
      <Project domain=' Blockchain ' bgc='#384883B2'/>
    </div>
  )
}

export default Findnext