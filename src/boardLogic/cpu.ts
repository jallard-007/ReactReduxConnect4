import Occupant from '../redux/types/EOccupant';
import IBoard from '../redux/types/IBoard';
import IColumn from '../redux/types/IColumn';
import checkForWin from './checkForWin';

export default function CPU(boardState: IBoard, cpuToken: Occupant) {
  let board = JSON.parse(JSON.stringify(boardState));
  let valueOfColumns = [0, 0, 0, 0, 0, 0, 0];
  for (let columnNum = board.columns.length - 1; columnNum >= 0; columnNum--) {
    if (columnIsFull(board.columns[columnNum])) {
      valueOfColumns[columnNum] = -100;
    } else if (isWinHere(board, columnNum, Occupant.Player1)) {
      if (cpuToken === Occupant.Player1) {
        valueOfColumns[columnNum] = 100;
      } else {
        valueOfColumns[columnNum] = 99;
      }
    } else if (isWinHere(board, columnNum, Occupant.Player2)) {
      if (cpuToken === Occupant.Player1) {
        valueOfColumns[columnNum] = 99;
      } else {
        valueOfColumns[columnNum] = 100;
      }
    }
  }
  valueOfColumns = assignRandomValues(valueOfColumns);
  return findBestColumn(valueOfColumns);
}

function assignRandomValues(valueOfColumns: number[]) {
  for (let columnNum = 0; columnNum <= 6; columnNum++) {
    if (valueOfColumns[columnNum] === 0) {
      valueOfColumns[columnNum] = Math.floor(Math.random() * 10);
    }
  }
  return valueOfColumns;
}

function findBestColumn(valueOfColumns: number[]) {
  let bestColumn = 0;
  for (let columnNum = 1; columnNum <= 6; columnNum++) {
    if (valueOfColumns[columnNum] > valueOfColumns[bestColumn]) {
      bestColumn = columnNum;
    }
    if (valueOfColumns[columnNum] === valueOfColumns[bestColumn]) {
      if (Math.abs(3 - columnNum) < Math.abs(3 - bestColumn)) {
        bestColumn = columnNum;
      }
    }
  }
  return bestColumn;
}

function columnIsFull(column: IColumn) {
  return column.slotsAvailable === 0;
}

function isWinHere(board: IBoard, columnNum: number, ID: Occupant) {
  const slotNum = board.columns[columnNum].slotsAvailable;
  board.columns[columnNum].slots[slotNum - 1].occupant = ID;
  if (checkForWin(board, ID, false)) {
    board.columns[columnNum].slots[slotNum - 1].occupant = 0;
    return true;
  }
  board.columns[columnNum].slots[slotNum - 1].occupant = 0;
  return false;
}
