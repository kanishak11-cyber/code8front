import React from 'react'
import { Button } from '../../Button'

import About2 from '../AboutCode8/About2'
import Stats2 from '../../Stats/Stats2'

import { Link } from 'react-router-dom'

import './learncss.css'
import './buttonCSS/test-button.css'
import Features2 from './Features2'
import Features3 from '../../Features/Features3'
import Cards from './Cards' // Currently commented and coming soon

export default function Courses () {
  return (
    <>
      <div className='learnPage'>
        <div class='learn-grid-container'>
          <div class='grid-item learn-content'>
            <h1 className = 'learn-page-h1'
            >
             Learn skills that keeps you ahead, like never before.
            </h1>
            <p className='coursepg'>
              We partner with mentors from companies like Amazon, PayTm,
              Deloitte, TCE, Hitachi, Cisco to provide you with industry
              relevant cohort based courses.
            </p>
            <div className='flex justify-content-center'>
              <Link className='btn' to='/learn'>
                <span className='btn-content'>
                  Register to get notify for our next cohort
                </span>
                <span className='icon'>
                  <i className='fa fa-arrow-right' aria-hidden='true'></i>
                </span>
              </Link>
            </div>
          </div>

          <div className='learn-img'>
            <img src='https://github.com/KapadiaShubham/code8-media/blob/master/learn/learnpage-first-img.png/?raw=true'></img>
          </div>
        </div>
      </div>

      <Features2 />

      {/* Courses */}

      <div className='bg-built-nextpro explore-courses'>
        <h1 className='build-head learn-bh' >
          Explore Courses
        </h1>

        <p>
          Explore a wide range of courses!!
        </p>

        {/* <Cards/> */}


        <div id='testbutton'></div>
      </div>
      <About2 />

      {/* Why Code8 */}
      <div class='why-code8-heading'>
        <h3>
          Why Us ?
          {/* <img src='/images/code8.png'></img> */}
        </h3>
      </div>
      <Features3 />

      <div class='s2-hello'>
        <div class='stats2-information'>
          <Stats2 />
          <div class='mentor-text-info'>
            <h3>
               The learning you need, the skills you want, the career you deserve.
            </h3>
            <br></br>
            <div className='register-now'>
              Register now and get notify for our upcoming courses.
              <br />
              <Button buttonSize='btn--large' buttonColor='blue'>
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
