import React from 'react';
import '../styles.css';
import Board from './Board';
import ResetButton from './ResetButton';
import BackForButton from './BackwardForwardButton';
import ScoreBoard from './ScoreBoard';

function App() {
  return (
    <div>
      <header>
        <h1 className='text-center'>ConnectFour</h1>
      </header>
      <ScoreBoard />
      <BackForButton />
      <ResetButton />
      <Board />
    </div>
  );
}

export default App;
