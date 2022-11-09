import React from 'react';
import './App.css';

// lecture-5 - Advanced props
import Status from './components/5/Status';
import Heading from './components/5/Heading';
import Oscar from './components/5/Oscar';

// lecture-6 - Event props & lecture-7 style props
import Button from './components/6/Button';
import Input from './components/6/Input';

// lecture-7 - style props
import Container, { Container2 } from './components/7/Container';

// please note that props can also be destructured
// const get_user = ({name, age, gender} : userProps) => this is me right here

// lecture-11 - useState Type Assertion
import UserDts from './components/11/User';

//lecture-16 - useRef Hook
import {MutableRef} from './components/16/MutableRef';

// lecture-18 - Component as a Prop, shows us how to send components as props to another component
import Private from './components/18/Private';
import P2 from './components/18/eg2/P2';
import U2 from './components/18/eg2/U2';

// Lecture-19 - Generics
import { List } from './components/19/List';
import { List3 } from './components/19/List'

// 20 Restricting props
// 21 Template literals and Exclude 

// Lecture 22 - Wrapping HTML Elements
import CustomButton from './components/22/Button';

// Lecture 23 - Extracting a Components Prop Types

// Lecture 24 - Polymorphic Components
import TextComp from './components/24/Text';

function App() {
  const itemsToSend: string[] = ['stanley', 'chino', 'daniel', 'pamela']

  return (
    <div className="App">
      <div className='cover'>
        <h1>Lecture 5</h1>
        <Status msg='success' />
        <div>
          <Heading><div>This is one is a react node or JSX.Element child</div></Heading>
          <Heading>This is one is a string child</Heading>
        </div>
        <Oscar>
          <Heading>Showing in the oscars</Heading>
        </Oscar>
      </div>

      <div className='cover'>
        <h1>Lecture 6</h1>
        <Button clickHandler={(event: React.MouseEvent<HTMLButtonElement>, id?: number) => { console.log('clicked me', event, id) }} />
        {/*can also do: <Button clickHandler={(event: React.MouseEvent, id?: number) => { console.log('clicked me', event, id) }} /> */}
        {/*can also do: <Button clickHandler={(event, id?: number) => { console.log('clicked me', event, id) }} /> */}
        <Input
          value='james'
          changeHandler={(event) => { console.log('changed me', event, event.target.value) }}
        />
      </div>

      <div className='cover'>
        <h1>Lecture 7</h1>
        <Container style={{color: 'green', fontWeight: 'bold'}} />
        <Container2 background='yellow' fontSize={20} />
      </div>

      <div className='cover'>
        <h1>Lecture 11</h1>
        <UserDts />
      </div>
    
      <div className='cover'>
        <h1>Lecture 16</h1>
        <MutableRef />
      </div>

      <div className='cover'>
        <h1>Lecture 18</h1>
        <Private isLoggedIn={false} />
        <br></br>----
        <P2 isLoggedIn={true} component={U2} />
      </div>


      <div className='cover'>
        <h1>Lecture 19</h1>
        <List items={itemsToSend} clickHandler={(received: string) => console.log(received)} />
        <List3 items={['stanley', 2, 3]} clickHandler={(received) => console.log(received)} />
      </div>

      <div className='cover'>
        <h1>Lecture 22</h1>
        <CustomButton variant='primary' onClick={() => console.log('we are moving')}>
          Click me
        </CustomButton>
      </div>
    
      <div className='cover'>
        <h1>Lecture 23</h1>

      </div>

      <div className='cover'>
        <h1>Lecture 24</h1>
        <div>
          <TextComp as='h1' size='lg'>Heading</TextComp>
          <TextComp as='p' size='md'>Paragraph</TextComp>
          <TextComp as='label' htmlFor='someId' size='sm' color='secondary'>Label</TextComp>
        </div>
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
