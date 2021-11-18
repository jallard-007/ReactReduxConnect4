import React from "react";
import Column from "./Column";

interface IProps {
  board: any;
}

export default function Board(props: IProps) {
  return (
    <div id='gameBoard'>
      <Column columnNum={0} column={props.board.columns[0]} />
      <Column columnNum={1} column={props.board.columns[1]} />
      <Column columnNum={2} column={props.board.columns[2]} />
      <Column columnNum={3} column={props.board.columns[3]} />
      <Column columnNum={4} column={props.board.columns[4]} />
      <Column columnNum={5} column={props.board.columns[5]} />
      <Column columnNum={6} column={props.board.columns[6]} />
    </div>
  );
}
