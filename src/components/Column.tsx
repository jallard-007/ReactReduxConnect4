import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkForWin, { WinningToken } from '../boardLogic/CheckForWin';
import CPU from '../boardLogic/CPUMain';
import {
  _boardAddTokenActionCreator,
  _boardAddTokenWinActionCreator,
  _changeTurnActionCreator
} from '../redux/actions/boardActions';
import store from '../redux/store';
import Occupant from '../redux/types/EOccupant';
import IAppState from '../redux/types/IAppState';
import { SetGameHistory } from '../boardLogic/StoreGameMoves';
import Slot from './Slot';
import Token from './Token';

const root = document.documentElement;
function Column(props: { columnNum: number }) {
  const [hover, setHover] = useState(false);
  let board = useSelector((state: IAppState) => state.board);
  const dispatch = useDispatch();

  function onMouseEnter() {
    setHover(true);
    root.style.setProperty('--tokenDropAmount', board.columns[props.columnNum].slotsAvailable + '');
  }
  function onMouseLeave() {
    setHover(false);
  }

  function isWin(playerID: Occupant) {
    board = store.getState().board;
    const isThereAWin: WinningToken[] | boolean = checkForWin(board, playerID, true);
    if (typeof isThereAWin === 'object') {
      showWin(isThereAWin);
      console.log(playerID + ' won');
      return true;
    }
    return false;
  }

  function showWin(WinningTokens: WinningToken[]) {
    for (let i = 0; i < 4; i++) {
      dispatch(
        _boardAddTokenWinActionCreator({
          columnNum: WinningTokens[i].columnNum,
          slotNum: WinningTokens[i].slotNum,
          whoWon: WinningTokens[i].whoWon
        })
      );
    }
  }

  function addTokenAndSetHistory(columnNum: number, playerID: Occupant) {
    dispatch(
      _boardAddTokenActionCreator({
        columnNum: columnNum,
        playerID: playerID
      })
    );
    SetGameHistory({ columnNum: columnNum, playerID: playerID }, true);
  }

  function handleClick() {
    if (store.getState().turn.whosTurn === 'player2') {
      return;
    }
    addTokenAndSetHistory(props.columnNum, Occupant.Player1);
    setHover(false);
    if (isWin(Occupant.Player1)) {
      return;
    }
    dispatch(_changeTurnActionCreator('player2'));
    setTimeout(() => {
      const turn = store.getState().turn.whosTurn;
      if (turn === 'player1') {
        return;
      }

      board = store.getState().board;
      const compColumn = CPU(board);
      addTokenAndSetHistory(compColumn, Occupant.Player2);
      if (isWin(Occupant.Player2)) {
        return;
      }
      dispatch(_changeTurnActionCreator('player1'));
    }, 750);
  }
  const columnProperties = board.columns[props.columnNum];
  const columnNumMap: number[] = [0, 1, 2, 3, 4, 5];
  return (
    <div
      className='column'
      onClick={() => handleClick()}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      {columnNumMap.map((slotNum) => (
        <Token
          key={slotNum + ', ' + props.columnNum}
          positionInColumn={slotNum}
          slotsNum={slotNum + 1}
          occupant={columnProperties.slots[slotNum].occupant}
        />
      ))}
      {columnNumMap.map((slotNum) => (
        <Slot slotsNum={slotNum} hover={hover} nextSlotUp={columnProperties.slotsAvailable} />
      ))}
    </div>
  );
}

export default Column;
