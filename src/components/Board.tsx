import React from 'react';
import Column from './Column';

interface IProps {
  board: any;
}

export default function Board(props: IProps) {
  return (
    <div id='gameBoard'>
      <Column column={props.board.columns[0]} />
      <Column column={props.board.columns[1]} />
      <Column column={props.board.columns[2]} />
      <Column column={props.board.columns[3]} />
      <Column column={props.board.columns[4]} />
      <Column column={props.board.columns[5]} />
      <Column column={props.board.columns[6]} />
    </div>
  );
}
