import React,{useEffect} from 'react'
import "./Features.css"

const Features = () => {
  useEffect(() => {
  }, [])
  
  return (
    <div className='Featuresc'>
       <div className="Featuresc-head">
       Features
       </div>
       <div className="Featuresc-holder">
         <div className="Feature Red">Attend free boot camps and learning sessions</div>
         <div className="Feature Blue">Collaborate and build cool project</div>
         <div className="Feature Yellow">Build professional network</div>
       </div>
    </div>
  )
}

export default Features