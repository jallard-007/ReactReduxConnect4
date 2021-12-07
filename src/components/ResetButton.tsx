import React from 'react';
import socket from '../socket';

export default function ResetButton() {
  function handleClick() {
    socket.emit('reset');
  }

  return (
    <div className='text-center'>
      <button
        className='btn btn-danger button'
        type='button'
        onClick={() => {
          handleClick();
        }}
      >
        Vote For New Game
      </button>
    </div>
  );
}
