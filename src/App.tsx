import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import Counter from './components/state/Counter';
import Test from './components/state/Test';
import ThemeContextProvider from './components/context/ThemeContext';
import Box from './components/context/Box';
import UserContextProvider from './components/context/UserContext';
import UserTwo from './components/context/User2';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import Toast from './components/template-literals/Toast';
import CustomButton from './components/html/Button';
import CustomInput from './components/html/Input';


function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]

  return (
    <div className="App">
      <Greet name='Yixin' messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status='loading'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo!</Heading>
      </Oscar>
      <Button handleClick={(e, id) => {console.log(e, id)}}/>
      <Input value='Kek' handleChange={(e) => {console.log('parent:', e.currentTarget.value)}}/>
      <Container styles={{border: '1px solid black', padding: '1rem'}}/>
      <LoggedIn />
      <Counter />
      <Test />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserTwo />
      </UserContextProvider>
      <Private isLoggedIn={true} Component={Profile}/>
      <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)}/>
      <RandomNumber value={10} isPositive/>
      <Toast position='center'/>
      <CustomButton variant='primary' onClick={() => console.log('clicked')}>Primary Button</CustomButton>
      <CustomInput />
    </div>
  );
}

export default App;
