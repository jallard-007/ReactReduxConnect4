import { CHANGE_SCORE, IChangeScoreAction } from '../actions/scoreActions';

const defaultState = {
  player1Score: 0,
  player2Score: 0
};

export default function scoreReducer(state = defaultState, action: IChangeScoreAction) {
  if (action.type === CHANGE_SCORE) {
    return action.payload.score;
  }
  return state;
}
