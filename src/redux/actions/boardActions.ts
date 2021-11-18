import Occupant from "../types/EOccupant";

export const BOARD_ADD_TOKEN = "ADD_TOKEN";
export interface IBoardAddTokenAction {
  type: typeof BOARD_ADD_TOKEN;
  payload: IBoardAddTokenActionPayload;
}
interface IBoardAddTokenActionPayload {
  columnNum: number;
  playerID: Occupant;
}
export function _boardAddTokenActionCreator(
  payload: IBoardAddTokenActionPayload
): IBoardAddTokenAction {
  return {
    type: BOARD_ADD_TOKEN,
    payload
  };
}

export const BOARD_REMOVE_TOKEN = "REMOVE_TOKEN";
export interface IBoardRemoveTokenAction {
  type: typeof BOARD_REMOVE_TOKEN;
  payload: IBoardRemoveTokenActionPayload;
}
interface IBoardRemoveTokenActionPayload {
  columnNum: number;
}
export function _boardRemoveTokenActionCreator(
  payload: IBoardRemoveTokenActionPayload
): IBoardRemoveTokenAction {
  return {
    type: BOARD_REMOVE_TOKEN,
    payload
  };
}

export const BOARD_CLEAR = "CLEAR";
export interface IBoardClearAction {
  type: typeof BOARD_CLEAR;
}
export function _boardClearActionCreator(): IBoardClearAction {
  return {
    type: BOARD_CLEAR
  };
}

type BoardActions =
  | IBoardAddTokenAction
  | IBoardRemoveTokenAction
  | IBoardClearAction;

export const CHANGE_TURN = "CHANGE_TURN";
export interface IChangeTurnAction {
  type: typeof CHANGE_TURN;
}
export function _changeTurnActionCreator(): IChangeTurnAction {
  return {
    type: CHANGE_TURN
  };
}

export default BoardActions;
