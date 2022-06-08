import React from 'react'
import "./whatdriveus.css"
const Card = (props) => {
    return (
        <div className={`w-card ${props.index==0? "":"not-first-card"}`}>
            <img src={props.imgLink} alt="" />
            <div className="w-reason">{props.title}</div>
            <div className="w-card-content">
                {props.content}
            </div>
        </div>
    )
}
const data = [
    {
        title: "Vision",
        imgLink: "/images/Vision.png",
        content: "To provide industry relevant skills and exposure to every engineer in making."
    },
    {
        title: "Mission",
        imgLink: "/images/Mission.jpg",
        content: "Upskilling young geniuses to create a better world through technology."
    }
]
const Whatdrivesus = () => {
    return (
        <div className='Whatdrivesus'>
            <div className="w-card-holder">
                {data.map((item, index) => {
                    return <Card key={index} index={index} title={item.title} imgLink={item.imgLink} content={item.content} />
                })}
            </div>
        </div>
    )
}

export default Whatdrivesus