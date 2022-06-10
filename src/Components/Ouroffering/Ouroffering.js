import React, { useEffect } from 'react'
import './Ouroffering.css'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const OfferingCard=(props)=>{
  return(
    <div className='Offering'>
      <div className='Offer-head'>
        <img
          src={props.imgLink}
          alt=''
        />
      </div>
      <div className='Offer-body'>
        <div className='Offer-name'>{props.title}</div>
        <div className='offer-content'>{props.content}</div>
      </div>
      <div className='Offer-bottom Explore'>{props.buttonTitle}<i className='fa-solid fa-angle-right'> </i></div>
    </div>
  )
}
const data = [
  {
    title: 'Project based experiential learning',
    imgLink:'https://github.com/KapadiaShubham/code8-media/blob/master/home/img/illus_4.png?raw=true',
    content: 'Our build program offers projects based learning opportunities in most industry relevant tech stack.It helps you hone your skills and let you validate your skills with our industry standard certification.',
    buttonTitle: 'Explore build'
  },
  {
    title: 'Learn what makes you truly industry ready',
    imgLink:'https://github.com/KapadiaShubham/code8-media/blob/master/home/img/illus_5.png?raw=true',
    content: 'We offer a wide range of cohort based learning courses, which helps you gain extra edge on your learning with project based experiential learning advantage.',
    buttonTitle: 'Explore learn'
  },
  {
    title: 'Community',
    imgLink:'https://github.com/KapadiaShubham/code8-media/blob/master/home/img/illustration_about.png?raw=true',
    content: 'Community driven peer to peer learning ecosystem Where you learn among peers from different colleges, share skills, collaborate on projects and what not.Our events, bootcamps and workshops keep you all updated with the latest learning trends and skills.',
    buttonTitle: 'Join community'
  }
];
const Ouroffering = props => {
  const { Heading } = props
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      '.Offering',
      { opacity: 0, y: 100, scale: 0.3 },
      {
        scrollTrigger: { trigger: '.Offering' },
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.5,
        scale: 1
      }
    )
  }, [])

  return (
    <div className='Ouroffering'>
      <div className='what-we-offer'> {Heading} </div>
      <div className='offerings-wrapper'>
      {data.map((item, index) => {
        return (
          <OfferingCard key={index} {...item} />
        )
      })}
      </div>
    </div>
  )
}

export default Ouroffering
