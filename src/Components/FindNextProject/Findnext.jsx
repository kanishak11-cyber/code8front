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
        Coming Soon
      </div>
      {/* <Project domain=' Web Development 'bgc='linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)' />
      <Project domain=' App Development' bgc='linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)' />
      <Project domain=' Blockchain ' bgc='linear-gradient(136deg , #56a8d0 ,#00b7d5 , #089ee8)'/> */}
    </div>
  )
}

export default Findnext