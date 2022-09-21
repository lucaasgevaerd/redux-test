import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import Large from './components/Large';
import OtherComponent from './components/OtherComponent';
import { decrement, increment } from './features/counter/counterSlice';
import styles from './styles/App.module.css';

function App() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div className={styles.container}>
        <Large />
        <div className={styles.value_and_buttons}>
          <div className={styles.value}>{count}</div>
          <div className={styles.buttons_container}>
            <button className={styles.buttons} onClick={() => { dispatch(increment()) }}>Increment</button>
            <button className={styles.buttons} onClick={() => { dispatch(decrement()) }}>Decrement</button>
          </div>
        </div>
        <OtherComponent />
      </div>
    </>
  )
}

export default App
