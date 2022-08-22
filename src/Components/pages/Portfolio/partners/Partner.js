import React from 'react'
import styles from './Partner.module.css'

function Partner(props) {
  const {info}=props;
  return (
    <div className={`${styles.p}`}>
      <div className={`${styles.partner}`}>
        <div className={`${styles.img_div}`}>
          <img className={`${styles.img}`} src={info.img} alt="partner"/>
        </div>
        <div className={`${styles.title}`}>{info.title}</div>
        <div className={`${styles.about}`}>{info.info}</div>
      </div>
    </div>
  )
}

export default Partner