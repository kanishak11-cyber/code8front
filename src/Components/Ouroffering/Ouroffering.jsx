import React,{useEffect} from 'react'
import "./Ouroffering.css"
import {gsap} from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'

const Ouroffering = (props) => {
    const {Heading} = props;
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.Offering',{opacity:0 ,y:100, scale:0.3},{scrollTrigger:{ trigger:".Offering"}, duration:1,opacity:1,y:0 , stagger:0.5,scale:1})
    }, [])
    
    return (<div className='Ouroffering'>
        <div className="what-we-offer">
            {Heading}
        </div>
        <div className="Offering">
            <div className="Offer-head">
                <img src="/images/illus_4.png" alt="" />
            </div>
            <div className="Offer-body">
                <div className="Offer-name">
                    Project based experiential learning
                </div>
                <div className="offer-content">
                    Our build program offers projects based learning
                    opportunities in most industry relevant tech stack.
                    It helps you hone your skills and let you validate
                    your skills with our industry standard certification.
                </div>
            </div>
            <div className="Offer-bottom Explore">
                Explore build <i className="fa-solid fa-angle-right"></i> 
            </div>
        </div>
        <div className="Offering">
            <div className="Offer-head">
                <img src="/images/illus_5.png" alt="" />
            </div>
            <div className="Offer-body">
                <div className="Offer-name">
                    Learn what makes you truly industry ready
                </div>
                <div className="offer-content">
                    We offer a wide range of cohort based learning
                    courses, which helps you gain extra edge on your
                    learning with project based experiential learning
                    advantage.
                </div>
            </div>
            <div className="Offer-bottom Explore">
                Explore learn <i className="fa-solid fa-angle-right"></i> 
            </div>
        </div>
        <div className="Offering">
            <div className="Offer-head">
                <img src="/images/illustration_about.png" alt="" />
            </div>
            <div className="Offer-body">
                <div className="Offer-name">
                    Community
                </div>
                <div className="offer-content">
                    Community driven peer to peer learning ecosystem
                    Where you learn among peers from different colleges,
                    share skills, collaborate on projects and what not.
                    Our events, bootcamps and workshops keep you all updated
                    with the latest learning trends and skills.
                </div>
                <p>Join community and be the part of cult</p>
            </div>
            <div className="Offer-bottom Explore">
                Join community <i className="fa-solid fa-angle-right"></i> 
            </div>
        </div>
    </div>
    )
}

export default Ouroffering