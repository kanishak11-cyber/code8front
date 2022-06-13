import React from 'react'

export default function OurPartnersItem(props) {
  return (
    <div className='item'>
      <div className='img-div'>

  <img
    src={props.link}
    alt={props.name}
  />
      </div>
      <div
      className='heading-div'>
{props.name}
      </div>
</div>

  )
}
