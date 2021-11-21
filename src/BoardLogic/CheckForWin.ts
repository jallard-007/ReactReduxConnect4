import Occupant from '../redux/types/EOccupant';
import IBoard from '../redux/types/IBoard';
import IColumn from '../redux/types/IColumn';

export default function CheckForWin(board: IBoard, ID: number) {
  for (let columnNum = 0; columnNum < board.columns.length; columnNum++) {
    for (let slotNum = board.columns[columnNum].slots.length - 1; slotNum >= 0; slotNum--) {
      if (board.columns[columnNum].slots[slotNum].occupant !== ID) {
        continue;
      }
      if (columnNum < 4 && CheckForHorizontalWin(board, columnNum, slotNum, ID)) {
        return true;
      }
      if (slotNum < 3 && CheckForVerticalWin(board.columns[columnNum], slotNum, ID)) {
        return true;
      }
      if (columnNum > 2 && slotNum < 3 && CheckForDiagonalWinLowerRighttoUpperLeft(board, columnNum, slotNum, ID)) {
        return true;
      }
      if (columnNum < 4 && slotNum < 3 && CheckForDiagonalWinUpperRightToLowerLeft(board, columnNum, slotNum, ID)) {
        return true;
      }
    }
  }
  return false;
}

export function CheckForHorizontalWin(board: IBoard, columnNum: number, slotNum: number, ID: Occupant) {
  if (
    board.columns[columnNum + 1].slots[slotNum].occupant === ID &&
    board.columns[columnNum + 2].slots[slotNum].occupant === ID &&
    board.columns[columnNum + 3].slots[slotNum].occupant === ID
  ) {
    return true;
  }
  return false;
}

export function CheckForVerticalWin(column: IColumn, slotNum: number, ID: Occupant) {
  if (
    column.slots[slotNum + 1].occupant === ID &&
    column.slots[slotNum + 2].occupant === ID &&
    column.slots[slotNum + 3].occupant === ID
  ) {
    return true;
  }
  return false;
}

export function CheckForDiagonalWinLowerRighttoUpperLeft(
  board: IBoard,
  columnNum: number,
  slotNum: number,
  ID: Occupant
) {
  if (
    board.columns[columnNum - 1].slots[slotNum + 1].occupant === ID &&
    board.columns[columnNum - 2].slots[slotNum + 2].occupant === ID &&
    board.columns[columnNum - 3].slots[slotNum + 3].occupant === ID
  ) {
    return true;
  }
  return false;
}

export function CheckForDiagonalWinUpperRightToLowerLeft(
  board: IBoard,
  columnNum: number,
  slotNum: number,
  ID: Occupant
) {
  if (
    board.columns[columnNum + 1].slots[slotNum + 1].occupant === ID &&
    board.columns[columnNum + 2].slots[slotNum + 2].occupant === ID &&
    board.columns[columnNum + 3].slots[slotNum + 3].occupant === ID
  ) {
    return true;
  }
  return false;
}
