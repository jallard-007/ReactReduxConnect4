import Occupant from '../types/EOccupant';

export const BOARD_ADD_TOKEN = 'ADD_TOKEN';
export interface IBoardAddTokenAction {
  type: typeof BOARD_ADD_TOKEN;
  payload: IBoardAddTokenActionPayload;
}
export interface IBoardAddTokenActionPayload {
  columnNum: number;
  playerID: Occupant;
}
export function _boardAddTokenActionCreator(payload: IBoardAddTokenActionPayload): IBoardAddTokenAction {
  return {
    type: BOARD_ADD_TOKEN,
    payload
  };
}

export const BOARD_ADD_TOKEN_WIN = 'ADD_TOKEN_WIN';
export interface IBoardAddTokenWinAction {
  type: typeof BOARD_ADD_TOKEN_WIN;
  payload: IBoardAddTokenWinActionPayload;
}
export interface IBoardAddTokenWinActionPayload {
  columnNum: number;
  slotNum: number;
  whoWon: Occupant;
}
export function _boardAddTokenWinActionCreator(payload: IBoardAddTokenWinActionPayload): IBoardAddTokenWinAction {
  return {
    type: BOARD_ADD_TOKEN_WIN,
    payload
  };
}

export const BOARD_REMOVE_TOKEN = 'REMOVE_TOKEN';
export interface IBoardRemoveTokenAction {
  type: typeof BOARD_REMOVE_TOKEN;
  payload: IBoardRemoveTokenActionPayload;
}
interface IBoardRemoveTokenActionPayload {
  columnNum: number;
}
export function _boardRemoveTokenActionCreator(payload: IBoardRemoveTokenActionPayload): IBoardRemoveTokenAction {
  return {
    type: BOARD_REMOVE_TOKEN,
    payload
  };
}

export const BOARD_CLEAR = 'CLEAR';
export interface IBoardClearAction {
  type: typeof BOARD_CLEAR;
}
export function _boardClearActionCreator(): IBoardClearAction {
  return {
    type: BOARD_CLEAR
  };
}

type BoardActions = IBoardAddTokenAction | IBoardRemoveTokenAction | IBoardClearAction | IBoardAddTokenWinAction;

export default BoardActions;
