/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Column from './Column';
import gameboard from '../gameboard.png';

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
      <img id='gameboardImage' src={gameboard} />
    </div>
  );
}
