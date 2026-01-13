import React from 'react'
import './assets/css/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/actions/counterActions';

function App() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App