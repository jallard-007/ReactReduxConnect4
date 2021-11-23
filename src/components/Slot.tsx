import React from 'react';

function Slot(props: { slotsNum: number; hover: boolean; nextSlotUp: number }) {
  let coinStyle = {
    background: 'transparent',
    opacity: 1,
    transform: 'translateY(calc(' + props.slotsNum + ' * min(84px, 13vw, 11vh)))'
  };
  if (props.hover && props.nextSlotUp === props.slotsNum + 1) {
    coinStyle.background = 'yellow';
    coinStyle.opacity = 0.3;
  }
  return <div className='slot' style={coinStyle}></div>;
}

export default Slot;
