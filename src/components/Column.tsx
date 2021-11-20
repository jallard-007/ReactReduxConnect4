import React from 'react';
import { useDispatch } from 'react-redux';
import { _boardAddTokenActionCreator } from '../redux/actions/boardActions';
import Occupant from '../redux/types/EOccupant';
import { SetGameHistory } from '../StoreGameMoves';
import Coin from './Coin';

interface IProps {
  column: any;
  columnNum: number;
}

function Column(props: IProps) {
  const dispatch = useDispatch();

  function thunkFunk() {
    dispatch(
      _boardAddTokenActionCreator({
        columnNum: props.columnNum,
        playerID: Occupant.Player1
      })
    );
    SetGameHistory(
      { columnNum: props.columnNum, playerID: Occupant.Player1 },
      true
    );
  }
  return (
    <div className='column' onClick={() => thunkFunk()}>
      <Coin occupant={props.column.slots[0].occupant} />
      <Coin occupant={props.column.slots[1].occupant} />
      <Coin occupant={props.column.slots[2].occupant} />
      <Coin occupant={props.column.slots[3].occupant} />
      <Coin occupant={props.column.slots[4].occupant} />
      <Coin occupant={props.column.slots[5].occupant} />
    </div>
  );
}

export default Column;
