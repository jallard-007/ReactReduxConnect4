import Occupant from '../redux/types/EOccupant';
import IBoard from '../redux/types/IBoard';

export interface WinningToken {
  columnNum: number;
  slotNum: number;
  whoWon: Occupant;
}
// CheckForWin will return true or false based if there is a win or not
// if returnWinningTokens is true and there is a win, CheckForWin will instead return an array of WinningToken containg the location of the win
export default function checkForWin(board: IBoard, ID: Occupant, returnWinningTokens: boolean): any {
  let currCheck: WinningToken[] | boolean;
  for (let columnNum = 0; columnNum < board.columns.length; columnNum++) {
    for (let slotNum = board.columns[columnNum].slots.length - 1; slotNum >= 0; slotNum--) {
      if (board.columns[columnNum].slots[slotNum].occupant !== ID) {
        continue;
      }
      if (columnNum < 4) {
        currCheck = checkForHorizontalWin(board, columnNum, slotNum, ID, returnWinningTokens);
        if (currCheck !== false) {
          return currCheck;
        }
      }
      if (slotNum < 3) {
        currCheck = checkForVerticalWin(board, columnNum, slotNum, ID, returnWinningTokens);
        if (currCheck !== false) {
          return currCheck;
        }
      }
      if (slotNum < 3 && columnNum < 4) {
        currCheck = checkForDiagonalWinUpperLeftToLowerRight(board, columnNum, slotNum, ID, returnWinningTokens);
        if (currCheck !== false) {
          return currCheck;
        }
      }
      if (slotNum < 3 && columnNum > 2) {
        currCheck = checkForDiagonalWinUpperRightToLowerLeft(board, columnNum, slotNum, ID, returnWinningTokens);
        if (currCheck !== false) {
          return currCheck;
        }
      }
    }
  }
  return false;
}

function checkForHorizontalWin(
  board: IBoard,
  columnNum: number,
  slotNum: number,
  ID: Occupant,
  shouldDoWinAnimation: boolean
) {
  if (
    board.columns[columnNum + 1].slots[slotNum].occupant === ID &&
    board.columns[columnNum + 2].slots[slotNum].occupant === ID &&
    board.columns[columnNum + 3].slots[slotNum].occupant === ID
  ) {
    if (shouldDoWinAnimation) {
      let winningTokens: WinningToken[] = [];
      for (let i = 0; i < 4; i++) {
        winningTokens.push(setWinningToken(columnNum + i, slotNum, ID));
      }
      return winningTokens;
    }
    return true;
  }
  return false;
}

function checkForVerticalWin(
  board: IBoard,
  columnNum: number,
  slotNum: number,
  ID: Occupant,
  shouldDoWinAnimation: boolean
) {
  if (
    board.columns[columnNum].slots[slotNum + 1].occupant === ID &&
    board.columns[columnNum].slots[slotNum + 2].occupant === ID &&
    board.columns[columnNum].slots[slotNum + 3].occupant === ID
  ) {
    if (shouldDoWinAnimation) {
      let winningTokens: WinningToken[] = [];
      for (let i = 0; i < 4; i++) {
        winningTokens.push(setWinningToken(columnNum, slotNum + i, ID));
      }
      return winningTokens;
    }
    return true;
  }
  return false;
}

function checkForDiagonalWinUpperLeftToLowerRight(
  board: IBoard,
  columnNum: number,
  slotNum: number,
  ID: Occupant,
  shouldDoWinAnimation: boolean
) {
  if (
    board.columns[columnNum + 1].slots[slotNum + 1].occupant === ID &&
    board.columns[columnNum + 2].slots[slotNum + 2].occupant === ID &&
    board.columns[columnNum + 3].slots[slotNum + 3].occupant === ID
  ) {
    if (shouldDoWinAnimation) {
      let winningTokens: WinningToken[] = [];
      for (let i = 0; i < 4; i++) {
        winningTokens.push(setWinningToken(columnNum + i, slotNum + i, ID));
      }
      return winningTokens;
    }
    return true;
  }
  return false;
}

function checkForDiagonalWinUpperRightToLowerLeft(
  board: IBoard,
  columnNum: number,
  slotNum: number,
  ID: Occupant,
  shouldDoWinAnimation: boolean
) {
  if (
    board.columns[columnNum - 1].slots[slotNum + 1].occupant === ID &&
    board.columns[columnNum - 2].slots[slotNum + 2].occupant === ID &&
    board.columns[columnNum - 3].slots[slotNum + 3].occupant === ID
  ) {
    if (shouldDoWinAnimation) {
      let winningTokens: WinningToken[] = [];
      for (let i = 0; i < 4; i++) {
        winningTokens.push(setWinningToken(columnNum - i, slotNum + i, ID));
      }
      return winningTokens;
    }
    return true;
  }
  return false;
}

// takes the location of the winning token, and returns an object of type WinningToken
function setWinningToken(columnNum: number, slotNum: number, ID: Occupant): WinningToken {
  const tokenInWin: WinningToken = {
    columnNum: columnNum,
    slotNum: slotNum,
    whoWon: ID
  };
  return tokenInWin;
}
