import { CHANGE_TURN, IChangeTurnAction } from '../actions/turnActions';
import Occupant from '../types/EOccupant';

const initialState = Occupant.Player1;

export default function turnReducer(state = initialState, action: IChangeTurnAction) {
  if (action.type === CHANGE_TURN) {
    return action.payload.whosTurn;
  }
  return state;
}
