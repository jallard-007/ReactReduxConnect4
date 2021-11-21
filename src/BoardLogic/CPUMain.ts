import Occupant from '../redux/types/EOccupant';
import IBoard from '../redux/types/IBoard';
import IColumn from '../redux/types/IColumn';
import CheckForWin from './CheckForWin';

function CPU(boardState: IBoard) {
  let board = JSON.parse(JSON.stringify(boardState));
  let valueOfColumns = [0, 0, 0, 0, 0, 0, 0];
  for (let columnNum = board.columns.length - 1; columnNum >= 0; columnNum--) {
    if (ColumnIsFull(board.columns[columnNum])) {
      valueOfColumns[columnNum] = -100;
    } else if (IsWinHere(board, columnNum, Occupant.Player2)) {
      valueOfColumns[columnNum] = 100;
    } else if (IsWinHere(board, columnNum, Occupant.Player1)) {
      valueOfColumns[columnNum] = 99;
    }
  }
  valueOfColumns = AssignRandomValues(valueOfColumns);
  console.log(valueOfColumns);
  return FindBestColumn(valueOfColumns);
}

function AssignRandomValues(valueOfColumns: number[]) {
  for (let columnNum = 0; columnNum <= 6; columnNum++) {
    if (valueOfColumns[columnNum] === 0) {
      valueOfColumns[columnNum] = Math.floor(Math.random() * 10);
    }
  }
  return valueOfColumns;
}

function FindBestColumn(valueOfColumns: number[]) {
  let bestColumnTest = 0;
  for (let columnNum = 1; columnNum <= 6; columnNum++) {
    if (valueOfColumns[columnNum] > valueOfColumns[bestColumnTest]) {
      bestColumnTest = columnNum;
    }
  }
  return bestColumnTest;
}

function ColumnIsFull(column: IColumn) {
  return column.slotsAvailable === 0;
}

function IsWinHere(board: IBoard, columnNum: number, ID: Occupant) {
  for (let slotNum = 5; slotNum >= 0; slotNum--) {
    if (board.columns[columnNum].slots[slotNum].occupant !== Occupant.Empty) {
      continue;
    }
    board.columns[columnNum].slots[slotNum].occupant = ID;
    if (CheckForWin(board, ID)) {
      board.columns[columnNum].slots[slotNum].occupant = 0;
      return true;
    }
    board.columns[columnNum].slots[slotNum].occupant = 0;
    return false;
  }
}
export default CPU;
