import React from 'react';
import './App.css';

// the below are all from lecture-5 - Advanced props
import Status from './Status';
import Heading from './Heading';
import Oscar from './Oscar';

function App() {
  const dts: object = {'firstName':'stanely', 'lastName':'chukwu', 'age':26}
  console.log(dts)

  return (
    <div className="App">
      <div>
        <h1>Lecture 5</h1>
        <Status msg='success' />
        <Heading>This is the children testing props</Heading>
        <Oscar>
          <Heading>Showing in the oscars</Heading>
        </Oscar>
      </div>
    </div>
  );
}

export default App;
