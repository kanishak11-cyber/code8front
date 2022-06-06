import React from 'react'
import "./Ourcommunity.css"

const Ourcommunity = () => {
  return (
    <div className='Our-community'>
      <div className="o-community">
       Join our community for free
      </div>
      <div className="O-comm-sponsor-holder">
        <div className="o-s-card whatsapp">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png" alt="wassup" />
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Whats App</p>
          </div> */}
        </div>
        <div className="o-s-card linkedin">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="linkedin" />
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Linked in.</p>
          </div> */}
        </div>
        <div className="o-s-card discord">
          <img src="https://www.linuxadictos.com/wp-content/uploads/discord.jpg" alt="discord" />
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Discord</p>
          </div> */}
        </div>
        <div className="o-s-card instagram">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="instagram" />
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Instagram</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Ourcommunity