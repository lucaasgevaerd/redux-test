import React from 'react'
import Medium from '../Medium'
import styles from '../../styles/Boxs.module.css';

function Large() {
  return (
    <>
      <div className={`${styles.container} ${styles.large_box}`}>
        <h3>Large component</h3>
        <Medium />
      </div>
    </>
  )
}

export default Large