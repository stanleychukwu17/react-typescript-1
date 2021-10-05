import React from 'react';
import './App.css';

import GreetProps from './GreetComp'
import ButtonComp from './ButtonComp'

function App() {
  const dts = {'firstName':'stanely', 'lastName':'chukwu', 'age':26}
  return (
    <div className="App">
      <GreetProps info={dts} />
      <ButtonComp handleClick={(event) => {
        console.log('now we done it', event.target)
        return 15;
      }} />
    </div>
  );
}

export default App;
