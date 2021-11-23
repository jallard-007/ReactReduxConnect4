import { IChangeTurnAction } from '../actions/boardActions';

const initialState = {
  whosTurn: 'player'
};

export default function turnReducer(state = initialState, action: IChangeTurnAction) {
  switch (action.type) {
    case 'CHANGE_TURN_TO_PLAYER1':
      return {
        whosTurn: 'player1'
      };
    case 'CHANGE_TURN_TO_PLAYER2':
      return {
        whosTurn: 'player2'
      };
    default:
      return state;
  }
}
