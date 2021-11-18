import React from 'react';
import Coin from './Coin';

interface IProps {
  column: any;
}

function Column(props: IProps) {
  console.log(props.column.slots[0].occupant);
  return (
    <div className='column'>
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
