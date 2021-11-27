import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _boardAddTokenActionCreator, _boardAddTokenWinActionCreator } from '../redux/actions/boardActions';
import _changeTurnActionCreator from '../redux/actions/turnActions';
import store from '../redux/store';
import Occupant from '../redux/types/EOccupant';
import IAppState from '../redux/types/IAppState';
import Slot from './Slot';
import Token from './Token';
import { _columnChangeNumActionCreator } from '../redux/actions/columnNumActions';
import { SetGameHistory } from '../boardLogic/gameHistory';
import CPU from '../boardLogic/cpu';
import checkForWin, { WinningToken } from '../boardLogic/checkForWin';

const root = document.documentElement;
function Column(props: { columnNum: number }) {
  let board = useSelector((state: IAppState) => state.board);
  const dispatch = useDispatch();

  function onMouseEnter() {
    dispatch(_columnChangeNumActionCreator({ currColumnNum: props.columnNum }));
  }
  function onMouseLeave() {
    dispatch(_columnChangeNumActionCreator({ currColumnNum: null }));
  }

  function isWin(playerID: Occupant) {
    board = store.getState().board;
    const isThereAWin: WinningToken[] | boolean = checkForWin(board, playerID, true);
    if (typeof isThereAWin === 'object') {
      showWin(isThereAWin);
      dispatch(_changeTurnActionCreator({ whosTurn: 'neither' }));
      console.log('player' + playerID + ' won');
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
    if (store.getState().whosTurn !== 'player1') {
      return;
    }
    root.style.setProperty('--tokenDropAmount', board.columns[props.columnNum].slotsAvailable + '');
    addTokenAndSetHistory(props.columnNum, Occupant.Player1);
    if (isWin(Occupant.Player1)) {
      return;
    }
    dispatch(_changeTurnActionCreator({ whosTurn: 'player2' }));
    setTimeout(() => {
      const turn = store.getState().whosTurn;
      console.log(turn);
      if (turn !== 'player2') {
        return;
      }

      board = store.getState().board;
      const compColumn = CPU(board, Occupant.Player2);
      addTokenAndSetHistory(compColumn, Occupant.Player2);
      if (isWin(Occupant.Player2)) {
        return;
      }
      dispatch(_changeTurnActionCreator({ whosTurn: 'player1' }));
      dispatch(_columnChangeNumActionCreator({ currColumnNum: 'current' }));
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
        <Slot
          key={slotNum}
          slotsNum={slotNum}
          columnNum={props.columnNum}
          nextSlotUp={columnProperties.slotsAvailable}
        />
      ))}
    </div>
  );
}

export default Column;
