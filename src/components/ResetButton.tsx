import React from 'react';
import { useDispatch } from 'react-redux';
import { ClearGameHistory } from '../boardLogic/gameHistory';
import { _boardClearActionCreator } from '../redux/actions/boardActions';
import _changeTurnActionCreator from '../redux/actions/turnActions';

export default function ResetButton() {
  const dispatch = useDispatch();
  function resetGame() {
    dispatch(_changeTurnActionCreator({ whosTurn: 'player1' }));
    dispatch(_boardClearActionCreator());
    ClearGameHistory();
  }
  return (
    <div className='text-center'>
      <button
        className='btn btn-danger button'
        type='button'
        onClick={() => {
          resetGame();
        }}
      >
        Clear Board
      </button>
    </div>
  );
}
