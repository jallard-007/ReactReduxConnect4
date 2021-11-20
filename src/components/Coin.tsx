import React from 'react';
import Occupant from '../redux/types/EOccupant';

function Coin(props: { occupant: number }) {
  let defaultClass = 'coin';
  if (props.occupant === Occupant.Player1) {
    defaultClass += ' coinPlayer';
  } else if (props.occupant === Occupant.Player2) {
    defaultClass += ' coinComp';
  }
  return <div className={defaultClass}></div>;
}

export default Coin;
