import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {   decrementBy5, incrementBy5 } from './features/counterSlice';

const App = () => {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.value);

  return (
    <div className='App'>
      <h1>Counter : {count} </h1>
      <button onClick={()=>dispatch(incrementBy5())}>Increment by 5</button>
      <button onClick={()=>dispatch(decrementBy5())}>Decrement by 5</button>


      
    </div>
  )
}

export default App