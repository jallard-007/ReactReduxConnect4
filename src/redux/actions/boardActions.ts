import IBoard from '../types/IBoard';

export const UPDATE_BOARD = 'UPDATE_BOARD';
export interface IUpdateBoardAction {
  type: typeof UPDATE_BOARD;
  payload: IUpdateBoardActionPayload;
}
export interface IUpdateBoardActionPayload {
  newBoard: IBoard;
}
export function _updateBoardActionCreator(payload: IUpdateBoardActionPayload): IUpdateBoardAction {
  return {
    type: UPDATE_BOARD,
    payload
  };
}
