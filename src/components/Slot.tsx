import React from 'react';
import { useSelector } from 'react-redux';
import IAppState from '../redux/types/IAppState';

function Slot(props: { slotsNum: number; nextSlotUp: number; columnNum: number }) {
  const whosTurn = useSelector((state: IAppState) => state.whosTurn);
  const cursorOverThisColumn = useSelector((state: IAppState) => state.currColumnNum);
  let coinStyle = {
    background: 'transparent',
    opacity: 1,
    transform: 'translateY(calc(' + props.slotsNum + ' * min(84px, 13vw, 11vh)))'
  };
  if (whosTurn === 'player1' && props.columnNum === cursorOverThisColumn && props.nextSlotUp === props.slotsNum + 1) {
    coinStyle.background = 'yellow';
    coinStyle.opacity = 0.3;
  }
  return <div className='slot' style={coinStyle}></div>;
}

export default Slot;
