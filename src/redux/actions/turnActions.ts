export const CHANGE_TURN = 'CHANGE_TURN';
export interface IChangeTurnAction {
  type: typeof CHANGE_TURN;
  payload: IChangeTurnActionCreator;
}
interface IChangeTurnActionCreator {
  whosTurn: string;
}
export default function _changeTurnActionCreator(payload: IChangeTurnActionCreator): IChangeTurnAction {
  return {
    type: CHANGE_TURN,
    payload
  };
}
