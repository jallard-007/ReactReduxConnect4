import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CPU from '../BoardLogic/CPUMain';
import { _boardAddTokenActionCreator } from '../redux/actions/boardActions';
import Occupant from '../redux/types/EOccupant';
import IAppState from '../redux/types/IAppState';
import { SetGameHistory } from '../StoreGameMoves';
import Slot from './Slot';
import Token from './Token';

const root = document.documentElement;
let playerTurn = true;
function Column(props: { columnNum: number }) {
  let board = useSelector((state: IAppState) => state.board);
  const dispatch = useDispatch();

  function onMouseEnter() {
    root.style.setProperty('--value', board.columns[props.columnNum].slotsAvailable + '');
  }

  function handleClick() {
    if (!playerTurn) {
      return;
    }
    playerTurn = false;
    dispatch(
      _boardAddTokenActionCreator({
        columnNum: props.columnNum,
        playerID: Occupant.Player1
      })
    );
    SetGameHistory({ columnNum: props.columnNum, playerID: Occupant.Player1 }, true);
    setTimeout(() => {
      const compColumn = CPU(board);
      dispatch(
        _boardAddTokenActionCreator({
          columnNum: compColumn,
          playerID: Occupant.Player2
        })
      );
      SetGameHistory({ columnNum: compColumn, playerID: Occupant.Player2 }, true);
      playerTurn = true;
    }, Math.random() * 2000);
  }
  return (
    <div className='column' onClick={() => handleClick()} onMouseEnter={() => onMouseEnter()}>
      <Token slotsNum={1} occupant={board.columns[props.columnNum].slots[0].occupant} />
      <Token slotsNum={2} occupant={board.columns[props.columnNum].slots[1].occupant} />
      <Token slotsNum={3} occupant={board.columns[props.columnNum].slots[2].occupant} />
      <Token slotsNum={4} occupant={board.columns[props.columnNum].slots[3].occupant} />
      <Token slotsNum={5} occupant={board.columns[props.columnNum].slots[4].occupant} />
      <Token slotsNum={6} occupant={board.columns[props.columnNum].slots[5].occupant} />
      <Slot slotsNum={1} />
      <Slot slotsNum={2} />
      <Slot slotsNum={3} />
      <Slot slotsNum={4} />
      <Slot slotsNum={5} />
      <Slot slotsNum={6} />
    </div>
  );
}

export default Column;
