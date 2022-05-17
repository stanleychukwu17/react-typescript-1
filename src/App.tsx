import React from 'react';
import './App.css';

// lecture-5 - Advanced props
import Status from './components/5/Status';
import Heading from './components/5/Heading';
import Oscar from './components/5/Oscar';

// lecture-6 - Event props & lecture-7 style props
import Button from './components/6/Button';
import Input from './components/6/Input';
import Container from './components/7/Container';

// please note that props can also be destructured
// const get_user = ({name, age, gender} : userProps) => this is me right here

// lecture-11 - useState Type Assertion
import UserDts from './components/11/User';

function App() {
  // const dts: object = {'firstName':'stanely', 'lastName':'chukwu', 'age':26}

  return (
    <div className="App">
      <div className='cover'>
        <h1>Lecture 5</h1>
        <Status msg='success' />
        <Heading>This is the children testing props</Heading>
        <Oscar>
          <Heading>Showing in the oscars</Heading>
        </Oscar>
      </div>

      <div className='cover'>
        <h1>Lecture 6</h1>
        <Button clickHandler={(event, id) => { console.log('clicked me', event, id) }} />
        <Input
          value='james'
          changeHandler={(event) => { console.log('changed me', event, event.target.value) }}
        />
      </div>

      <div className='cover'>
        <h1>Lecture 7</h1>
        <Container style={{color: 'green', fontWeight: 'bold'}} />
      </div>

      <div className='cover'>
        <h1>Lecture 11</h1>
        <UserDts />
      </div>



      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
