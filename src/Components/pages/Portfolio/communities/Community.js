import React from 'react'
import styles from './Community.module.css'

function Community(props) {
    const {comp}=props;
  return (
    <div className={`${styles.community}`}>
        <img className={`${styles.img}`} src={comp.img} alt="community"/>
        <div className={`${styles.title}`}>{comp.title}</div>
    </div>
  )
}

export default Community