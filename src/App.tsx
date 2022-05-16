import React from 'react';
import './App.css';

import Status from './Status';

function App() {
  const dts: object = {'firstName':'stanely', 'lastName':'chukwu', 'age':26}

  console.log(dts)
  return (
    <div className="App">
      <Status msg='success' />
    </div>
  );
}

export default App;
