import React from 'react';
import './App.css';
import Draw from './Draw';
import Card from './Card';
import Dressing from './Dressing';

function App() {
  return (
    <div className='App'>
      <h1>Hello !</h1>
      <h2>Smash your DressUp</h2>
      <Draw/>
      <h3>And draw your DressUp</h3>
      <Card myCard/>
      <h3>My dressing :</h3>
      <Dressing/>
    </div>
  );
}

export default App;