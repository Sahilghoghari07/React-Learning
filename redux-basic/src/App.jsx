import React from 'react'
import './assets/css/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from './redux/features/counterSlice';

function App() {

  const dispath = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => {
        dispath(INCREMENT());
      }}>
        Increment
      </button>

      <button onClick={() => {
        dispath(DECREMENT());
      }}>
        Decrement
      </button>
    </>
  )
}

export default App