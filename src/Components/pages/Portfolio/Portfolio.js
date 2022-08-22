import React from 'react'
import Communities from './communities/Communities'
import Companies from './companies/Companies'
import Milestones from './milestones/Milestones'
import Partners from './partners/Partners'

function Portfolio() {
  return (
    <div>
        <Milestones/>
        <Partners/>
        <Communities/>
        <Companies/>
    </div>
  )
}

export default Portfolio