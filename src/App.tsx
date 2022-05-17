import React from 'react';
import './App.css';

// the below are all from lecture-5 - Advanced props
import Status from './components/5/Status';
import Heading from './components/5/Heading';
import Oscar from './components/5/Oscar';

// the below are all from lecture-6 - Event props
import Button from './components/6/Button';
import Input from './components/6/Input';

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

      <div>
        <h1>Lecture 6</h1>
        <Button clickHandler={(event, id) => { console.log('clicked me', event, id) }} />
        <Input
          value='james'
          changeHandler={(event) => { console.log('changed me', event, event.target.value) }}
        />
      </div>
    </div>
  );
}

export default App;
