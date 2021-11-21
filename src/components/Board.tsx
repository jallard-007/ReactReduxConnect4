import React from 'react';
import Column from './Column';

export default function Board() {
  return (
    <div id='gameBoard'>
      <Column columnNum={0} />
      <Column columnNum={1} />
      <Column columnNum={2} />
      <Column columnNum={3} />
      <Column columnNum={4} />
      <Column columnNum={5} />
      <Column columnNum={6} />
    </div>
  );
}
