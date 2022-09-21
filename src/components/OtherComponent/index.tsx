import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import styles from '../../styles/Boxs.module.css';

function OtherComponent() {

  const count = useSelector((state: RootState) => state.counter.value)

  return (
    <>
      <div className={`${styles.container} ${styles.other_component_box}`}>
        <h3>Other component</h3>
        <h3>Redux state:</h3>
        <h3 className={styles.box_count}>{count}</h3>
      </div>
    </>
  )
}

export default OtherComponent