import React from 'react'

const Card = () => {
    return (
        <div className="testimonial-card">
            <img id="img-home" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/icons/profile.png?raw=true" ></img>
            <div className="Name-holder">
                {props.name}
            </div>
            <img id="img-rating" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/img/rating.png?raw=true" ></img>
            <div className="Testimonial-exp">
                Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                pellentesque em dolor est <br></br>
                habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                dignissim sed amet erat<br></br> augue quis.
            </div>
        </div>
    )
}

export default Card