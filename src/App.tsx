import React from 'react';
import './App.css';

import GreetProps from './GreetComp'

function App() {
  return (
    <div className="App">
      <GreetProps name="stanley" age={50} />
    </div>
  );
}

export default App;
