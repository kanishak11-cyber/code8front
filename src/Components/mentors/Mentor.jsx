import React from 'react'
import "./Mentor.css"
import Mentorcar from './Mentorcar'

const Mentor = () => {
  return (
    <div className='Mentors'>
      <div className="mento-paragraph">
        <div className="ment-prog-head">
        Mentors
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quaerat cum pariatur voluptate veritatis consectetur expedita corporis possimus autem hic! Tempora eveniet, esse numquam dolores provident sint accusantium? Nesciunt aspernatur ex, minus doloribus unde doloremque rem? Et iste magni eveniet, nesciunt expedita ut dicta officiis nisi iure pariatur iusto debitis ducimus velit architecto commodi.
        </p>
      </div>
      <div className="Ment-wrapper">
        <Mentorcar />
        <Mentorcar />
        <Mentorcar />
        <Mentorcar />
      </div>
    </div>
  )
}

export default Mentor