import React from 'react'

import './Features2.css'


export default function Features2() {
  return (
   
<div className="features2">
  <h1 className='build-head'>Features</h1>
  <p>
    What makes our courses special?
  </p>

  <div class='grid-container-home'>
    <div class='grid-item'>
      <div className='features-class'>
        <img style={{ display: 'flex' }} src='/images/brain.png'></img>
      </div>

      <div className='courses-features-h1'>Industry relevent curriculum</div>

      <p className='courses-features-para'>
        That keeps you ahead in career.
      </p>
    </div>

    <div className='grid-item'>
      <div className='features-class'>
        <img style={{ display: 'flex' }} src='/images/Notes.png'></img>
      </div>

      <div className='courses-features-h1'>Project based experiential learning</div>

      <p className='courses-features-para'>
        Specially designed to provide you with relevant experience and hands-on.

      </p>
    </div>

    <div className='grid-item'>
      <div className='features-class'>
        <img style={{ display: 'flex' }} src='/images/Projects.png'></img>
      </div>

      <div className='courses-features-h1'>Community driven collaborative learning</div>

      <p className='courses-features-para'>
        Take the community advantage to learn beyond classroom lectures.
      </p>
    </div>
  </div>

  <div class='flex'
  style={{
    width: '100%',
    justifyContent: 'space-between',
  }}>
    <div className='grid-item'
    style={{
    width: '20%',
  }}
    ></div>
    <div
      class='grid-item'
      style={{
        background: '#F5F5F5',
        margin: '1rem',
        borderRadius: '27px',
        padding: '0.7rem  1rem',
        // width: "60%"
      }}
    >

    
      <div className='features-class'>
        <img style={{ display: 'flex' }} src='/images/completion.png'></img>
      </div>

      <div className='courses-features-h1'>Skill validation and certificates</div>

      <p className='courses-features-para'>
       Get your skills validated and become certified by industry professionals.
      </p>

    </div>
    <div
  className='grid-item'
  style={{
    width: '20%'
  }}
></div>

  </div>
</div>

  )
}
