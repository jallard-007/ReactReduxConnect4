import Occupant from '../types/EOccupant';

export const CHANGE_SCORE = 'CHANGE_SCORE';
export interface IChangeScoreAction {
  type: typeof CHANGE_SCORE;
  payload: IChangeScoreActionCreator;
}
interface IChangeScoreActionCreator {
  whoWon: Occupant;
}
export default function _changeScoreActionCreator(payload: IChangeScoreActionCreator): IChangeScoreAction {
  return {
    type: CHANGE_SCORE,
    payload
  };
}
