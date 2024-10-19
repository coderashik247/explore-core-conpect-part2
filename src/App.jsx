import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Player from './Player';
import Users from './Users';
import Friends from './Friends';


function App() {

  function handleButton() {
    alert('Clicked from First button');
  }

  const handleButton2 = () => {
    alert('Clicked from Second Button')
  }

  const addToFive =(num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h2>Explore React Core Concepts 2</h2>
      <Friends></Friends>

      {/* <Users></Users>
      <Player></Player>
      <Counter></Counter>
      <button onClick={handleButton}>First Button</button>
      <button onClick={handleButton2}>Second Button</button>
      <button
        onClick={() => {
          alert('Clicked From Third Button')
        }}>Third Button</button>
      <button onClick={() =>{addToFive(3)}}>Fourth Button</button> */}
    </>
  )
}

export default App
