import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import styles from '../../styles/Boxs.module.css'

function Small() {

  const count = useSelector((state: RootState) => state.counter.value)!

  return (
    <>
      <div className={`${styles.container} ${styles.small_box}`}>
        <h3>Small component</h3>
        <h3>Redux state:</h3>
        <h3 className={styles.box_count}>{count}</h3>
      </div>
    </>
  )
}

export default Small