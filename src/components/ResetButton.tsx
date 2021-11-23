import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { _boardClearActionCreator, _changeTurnActionCreator } from '../redux/actions/boardActions';
import { ClearGameHistory as newGameMoves } from '../boardLogic/StoreGameMoves';

export default function ResetButton() {
  const [clearBoardButtonText, setClearBoardButtonText] = useState('Clear Board');
  const dispatch = useDispatch();
  function resetGame() {
    dispatch(_changeTurnActionCreator('player1'));
    newGameMoves();
    dispatch(_boardClearActionCreator());
    setClearBoardButtonText('Clear Board');
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
        {clearBoardButtonText}
      </button>
    </div>
  );
}
