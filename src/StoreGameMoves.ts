let gameHistory = [[]];
let gameHistoryRemoved = [[]];
let gameHistoryLength = 0;
let gameHistoryRemovedLength = 0;
export function GetGameHistoryLength() {
  return gameHistoryLength;
}
export function SetGameHistory(move: any, branch: boolean) {
  if (branch) {
    gameHistoryRemoved = [[]];
    gameHistoryRemovedLength = 0;
  }
  gameHistory.push(move);
  gameHistoryLength++;
}
export function GetGameHistory() {
  let move: any;
  move = gameHistory.pop();
  gameHistoryLength--;
  SetRemovedHistory(move);
  return move;
}

export function GetRemovedHistoryLength() {
  return gameHistoryRemovedLength;
}
function SetRemovedHistory(move: any) {
  gameHistoryRemoved.push(move);
  gameHistoryRemovedLength++;
}
export function GetRemovedHistory() {
  let move: any;
  move = gameHistoryRemoved.pop();
  gameHistoryRemovedLength--;
  SetGameHistory(move, false);
  return move;
}

export function NewGameMoves() {
  gameHistory = [[]];
  gameHistoryRemoved = [[]];
  gameHistoryLength = 0;
  gameHistoryRemovedLength = 0;
}
