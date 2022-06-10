import React from 'react'
import { Button } from '../../Button'


export default function SAP () {
  return (
    <>
      {/* Student Ambassador Program*/}
      <div className='sap'>
        <div>
          <h1 className='community-h1'>Community</h1>
          <div className='community-aboutpg'>
            <p>
              Learn on the go with diverse community of techies and get ahead in
              your career.
            </p>
            <p>
              We have created a cultured community of t5echies for you to
              leverage peer to peer learning, collaboration and help.
            </p>
          </div>
          <div className='community-join-button'>
            <Button buttonSize='btn--large' buttonColor='blue'>
              Join now for free
            </Button>
          </div>
        </div>

        <div class=''>
          <img
            className='ambassador-img'
            src='https://github.com/KapadiaShubham/code8-media/blob/master/community/ambassador.png?raw=true'
            alt='Community'
          />
        </div>
      </div>
    </>
  )
}
