import Occupant from '../types/EOccupant';

export const PLAYER_ID = 'PLAYER_ID';
export interface IPlayerIDAction {
  type: typeof PLAYER_ID;
  payload: IPlayerIDActionPayload;
}
export interface IPlayerIDActionPayload {
  playerID: Occupant;
}
export function _changePlayerIDActionCreator(payload: IPlayerIDActionPayload): IPlayerIDAction {
  return {
    type: PLAYER_ID,
    payload
  };
}
