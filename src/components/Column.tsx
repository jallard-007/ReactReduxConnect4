import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slot from './Slot';
import Token from './Token';
import socket from '../socket';
import store from '../redux/store';
import IAppState from '../redux/types/IAppState';
import { _columnChangeNumActionCreator } from '../redux/actions/columnNumActions';

function Column(props: { columnNum: number }) {
  let board = useSelector((state: IAppState) => state.board);
  const dispatch = useDispatch();
  function onMouseEnter() {
    dispatch(_columnChangeNumActionCreator({ currColumnNum: props.columnNum }));
  }
  function onMouseLeave() {
    dispatch(_columnChangeNumActionCreator({ currColumnNum: null }));
  }

  function handleClick() {
    const thisPlayerID = store.getState().playerID;
    if (store.getState().whosTurn !== thisPlayerID) {
      console.log(store.getState().whosTurn);
      console.log('not your turn', thisPlayerID);
      return;
    }
    socket.emit('custom-clicked', props.columnNum, thisPlayerID);
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
