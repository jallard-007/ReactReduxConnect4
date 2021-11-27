import { IBoardAddTokenActionPayload } from '../redux/actions/boardActions';

let gameHistory: IBoardAddTokenActionPayload[] = [];
let gameHistoryRemoved: IBoardAddTokenActionPayload[] = [];
let gameHistoryLength = 0;
let gameHistoryRemovedLength = 0;
export function GetGameHistoryLength() {
  return gameHistoryLength;
}
export function SetGameHistory(move: IBoardAddTokenActionPayload, branch: boolean) {
  if (branch) {
    gameHistoryRemoved = [];
    gameHistoryRemovedLength = 0;
  }
  let thisMove = {} as IBoardAddTokenActionPayload;
  thisMove.columnNum = move.columnNum;
  thisMove.playerID = move.playerID;
  gameHistoryLength = gameHistory.push(thisMove);
}
export function GetGameHistory() {
  let move: any;
  move = gameHistory.pop();
  gameHistoryLength--;
  return move;
}

export function GetRemovedHistoryLength() {
  return gameHistoryRemovedLength;
}
export function SetRemovedHistory(move: IBoardAddTokenActionPayload) {
  console.log(move);
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

export function ClearGameHistory() {
  gameHistory = [];
  gameHistoryRemoved = [];
  gameHistoryLength = 0;
  gameHistoryRemovedLength = 0;
}
