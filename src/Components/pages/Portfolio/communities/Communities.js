import React from 'react'
import styles from './Communities.module.css'

import tech from '../images/tech.png'
import amity from '../images/amity.png'
import ways from '../images/ways.png'
import geeks from '../images/geeks.png'
import Community from './Community'

function Communities() {
    const communities=[
        {
            img:tech,
            title:''
        },
        {
            img:amity,
            title:''
        },
        {
            img:ways,
            title:''
        },
        {
            img:geeks,
            title:'Gaming Geeks'
        }
    ]
  return (
    <div className={`${styles.communities}`}>
        <div className={`${styles.heading}`}>Partner Communities</div>
        <div className={`${styles.cline}`}/>

        <div className={`${styles.card}`}>
            <Community comp={communities[0]}/>
            <Community comp={communities[1]}/>
            <Community comp={communities[2]}/>
            <Community comp={communities[2]}/>
            <Community comp={communities[3]}/>
        </div>

        <div className={`${styles.line}`} />

    </div>
  )
}

export default Communities