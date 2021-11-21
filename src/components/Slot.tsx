import React from 'react';

function Slot(props: { slotsNum: number }) {
  let coinStyle = {
    color: 'blue',
    transform: 'translateY(calc(' + props.slotsNum + ' * min(84px, 10vw, 10vh)))'
  };
  return <div className='slot' style={coinStyle}></div>;
}

export default Slot;
