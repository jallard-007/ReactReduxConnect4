import React from 'react';
import '../sldkf.css';
import Board from './Board';
import { useDispatch, useSelector } from 'react-redux';
import IAppState from '../redux/types/IAppState';
import { _boardAddTokenActionCreator } from '../redux/actions/boardActions';
import Occupant from '../redux/types/EOccupant';

function App() {
  const dispatch = useDispatch();
  let board = useSelector((state: IAppState) => state.board);
  function dispatchAddToken() {
    dispatch(_boardAddTokenActionCreator({ column: 0, playerID: Occupant.Player1 }));
  }

  return (
    <div className='App' onClick={() => dispatchAddToken()}>
      <Board board={board} />
    </div>
  );
}

export default App;
