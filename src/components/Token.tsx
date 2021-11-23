import React, { useRef } from 'react';
import Occupant from '../redux/types/EOccupant';

interface IProps {
  occupant: Occupant;
  slotsNum: number;
  positionInColumn: number;
}

function Token(props: IProps) {
  const element = useRef<HTMLDivElement>(null);
  element.current?.style.setProperty('--custom', props.positionInColumn + 1 + '');
  let defaultClass = 'token';
  switch (props.occupant) {
    case Occupant.Player1:
      defaultClass += ' tokenPlayer1';
      break;
    case Occupant.Player2:
      defaultClass += ' tokenPlayer2';
      break;
    case Occupant.Player1Win:
      defaultClass += ' tokenPlayer1 tokenWin';
      break;
    case Occupant.Player2Win:
      defaultClass += ' tokenPlayer2 tokenWin';
      break;
  }
  return <div ref={element} className={defaultClass}></div>;
}

export default Token;
