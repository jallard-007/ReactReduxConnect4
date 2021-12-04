import { CHANGE_SCORE, IChangeScoreAction } from '../actions/scoreActions';
import Occupant from '../types/EOccupant';

const defaultState = {
  player1Score: 0,
  player2Score: 0
};

export default function scoreReducer(state = defaultState, action: IChangeScoreAction) {
  if (action.type === CHANGE_SCORE) {
    if (action.payload.whoWon === Occupant.Player1) {
      return {
        player1Score: state.player1Score + 1,
        player2Score: state.player2Score
      };
    }
    return {
      player1Score: state.player1Score,
      player2Score: state.player2Score + 1
    };
  }
  return state;
}
