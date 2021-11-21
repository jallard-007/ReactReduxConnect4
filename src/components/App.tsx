import React from 'react';
import '../styles.css';
import Board from './Board';
import ResetButton from './ResetButton';
import BackForButton from './BackwardForwardButton';

function App() {
  return (
    <div className='container'>
      <div className='App'>
        <header>
          <h1 className='text-center'>ConnectFour</h1>
        </header>
        <ResetButton />
        <BackForButton />
        <Board />
      </div>
    </div>
  );
}

export default App;
