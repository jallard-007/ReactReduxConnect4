import React from 'react';
import Occupant from '../redux/types/EOccupant';

interface IProps {
  occupant: Occupant;
  slotsNum: number;
}

function Token(props: IProps) {
  let coinStyle = {
    color: 'blue',
    transform: '',
    transition: 'transform ' + props.slotsNum / (props.slotsNum + 6) + 's cubic-bezier(0.46, 0.17, 0.85, 0.62)'
  };

  let defaultClass = 'token';
  switch (props.occupant) {
    case Occupant.Player1:
      defaultClass += ' tokenPlayer1';
      coinStyle.transform = 'translateY(calc(' + props.slotsNum + ' * min(84px, 10vw, 10vh)))';
      break;
    case Occupant.Player2:
      defaultClass += ' tokenPlayer2';
      coinStyle.transform = 'translateY(calc(' + props.slotsNum + ' * min(84px, 10vw, 10vh)))';
      break;
  }
  return <div className={defaultClass} style={coinStyle}></div>;
}

export default Token;
