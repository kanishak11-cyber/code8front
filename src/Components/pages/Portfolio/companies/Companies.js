import React from 'react'
import styles from './Companies.module.css'

import logo from '../images/logo.png'
import del from '../images/logo_1.png'
import ama from '../images/logo_2.png'
import pay from '../images/logo_3.png'
import cis from '../images/logo_4.png'
import tcs from '../images/logo_5.png'
import hita from '../images/logo_6.png'
import cog from '../images/logo_7.png'
import tez from '../images/logo_8.png'

function Companies() {
    const info='We have partnered with mentors from top IT companies to help students through our platform:'
    const logos=[
        del,ama,pay,cis,
        tcs,hita,cog,tez
    ]
  return (
    <div className={`${styles.companies}`}>
        <div className={`${styles.title}`}>
            <img className={`${styles.title_logo}`} alt="logo" src={logo}/>
            <div className={`${styles.heading}`}>OUR EXPERTS FROM COMPANIES:</div>
        </div>
        <div className={`${styles.card}`}>
            <div className={`${styles.info}`}>{info}</div>
            <div className={`${styles.logos}`}>
                <div className={`${styles.img_div}`}><img className={`${styles.logo}`} src={logos[0]} alt="img"/></div>
                <div className={`${styles.img_div}`}><img className={`${styles.logo}`} src={logos[1]} alt="img"/></div>
                <div className={`${styles.img_div}`}><img className={`${styles.logo}`} src={logos[2]} alt="img"/></div>
                <div className={`${styles.img_div}`}><img className={`${styles.logo}`} src={logos[3]} alt="img"/></div>
                <div className={`${styles.img_div}`}><img className={`${styles.logo}`} src={logos[4]} alt="img"/></div>
                <div className={`${styles.img_div}`}><img className={`${styles.logo}`} src={logos[5]} alt="img"/></div>
                <div className={`${styles.img_div}`}><img className={`${styles.logo}`} src={logos[6]} alt="img"/></div>
                <div className={`${styles.img_div}`}><img className={`${styles.logo}`} src={logos[7]} alt="img"/></div>
            </div>
        </div>
    </div>
  )
}

export default Companies