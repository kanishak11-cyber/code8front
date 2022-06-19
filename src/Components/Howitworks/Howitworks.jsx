import React,{useEffect} from 'react'
import "./Howitworks.css"
import { gsap } from 'gsap'
import { duration } from '@mui/material'

const Howitworks = () => {

  useEffect(() => {
    gsap.fromTo(".step-number",{ y:-40 ,opacity:0,rotationZ:-127,scrollTrigger:'.step-number'},{duration:1,stagger:0.6,y:0,opacity:1,rotationZ:0})
    gsap.fromTo(".procedure-description",{y:-40,opacity:0},{duration:1,stagger:0.7,y:0,opacity:1})
  },[])
  

  return (
    <div className='Howitworks'>
    <div className="Howitworks-head">
    How it works
    </div>
    <div className="Procedure-holder">
        <div className="procedur-step">
            <div className="step-number">1</div>
            <div className="procedure-description">Take challenge</div>
        </div>
        <div className="procedur-step">
            <div className="step-number">2</div>
            <div className="procedure-description">Start building</div>
        </div>
        <div className="procedur-step">
            <div className="step-number">3</div>
            <div className="procedure-description">Ask for help</div>
        </div>
        <div className="procedur-step">
            <div className="step-number">4</div>
            <div className="procedure-description">Submit</div>
        </div>
        <div className="procedur-step">
            <div className="step-number">5</div>
            <div className="procedure-description">Pay and earn the certificate</div>
        </div>
    </div>
    </div>
  )
}

export default Howitworks