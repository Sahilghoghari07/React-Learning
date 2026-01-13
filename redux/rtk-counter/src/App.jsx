import React from 'react'
import './assets/css/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value);
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