import { IPlayerIDAction, PLAYER_ID } from '../actions/playerIDActions';
import Occupant from '../types/EOccupant';

export default function playerIDReducer(state = { playerID: Occupant.Empty }, action: IPlayerIDAction) {
  if (action.type === PLAYER_ID) {
    return action.payload.playerID;
  }
  return state;
}
