import React from 'react'
import "./Explorecategory.css"

const Explorecategories = (props) => {
    return (
        <div className='Explorecategories'>
            <div className="Category-image">
                <img src={`/images/${props.image}.png`} alt="" />
            </div>
            <div className='Category-body'>
                <div>
                    <div className="Category-name">{props.topic}</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam unde voluptate nihil dolor perferendis! Porro, ex architecto voluptatum sint repellat ut! Nemo.</div>
                </div>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            {props.options && <div className="Category-operations">
                <button className="cat-option 🙂">Read more  <i className="fa-solid fa-arrow-right"></i> </button>
                <button className="cat-option 🥶">Ask Mentors  <i className="fa-solid fa-arrow-right"></i> </button>
                <button className="cat-option 🥶">View Project  <i className="fa-solid fa-arrow-right"></i> </button>
                <button className="cat-option 😁">Join the community  <i className="fa-solid fa-arrow-right"></i> </button>
            </div>}
        </div>
    )
}

export default Explorecategories