import logo from './logo.svg';
import './app.css';
import Reorder from './Reorder';
import React, { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const onReorder = () => {
    setCount(5);
  };
  const incre = () => {
    setCount(count + 1);
  };
  const decre = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>COUNTER-APP</h1>
          <h2>{count}</h2>
          <div className='btn_div'>
            <button onClick={incre}>Increment</button>
            <button onClick={decre} disabled={!count}> Decrement</button>
            <span className='Reorder'>
              {
                count === 0 ? <Reorder onReorder={onReorder} /> : null
              }
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
