import React from 'react'
import '../../../App.css'

// import { Link } from 'react-router-dom'
import '../Ourcommunity/Ourcommunity.css'
// import Mentor from '../../mentors/Mentor'
import Mentorstats from '../../Stats/Mentorstats'
import Features from '../../Features/Features'

import './community.css'
import MobileSAP from './MobileSAP'
import SAP from './SAP'
import EventsDiv from './EventsDiv'
import Ourcommunity from '../Ourcommunity/Ourcommunity'
import Ourreach from '../../Ourreach/Ourreach'

export default function Community () {
  return (
    <div className='community'>
      {/* Join Us */}
      {/* <BuiltTop /> */}

      <SAP />

      <MobileSAP />
      
      <Features />

      <EventsDiv/>

      <Mentorstats />
 
      <Ourcommunity/>
    </div>
  )
}
