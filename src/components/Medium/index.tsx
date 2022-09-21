import React from 'react'
import Small from '../Small'
import styles from '../../styles/Boxs.module.css'

function Medium() {
  return (
    <>
      <div className={`${styles.container} ${styles.medium_box}`}>
        <h3>Medium component</h3>
        <Small />
      </div>
    </>
  )
}

export default Medium