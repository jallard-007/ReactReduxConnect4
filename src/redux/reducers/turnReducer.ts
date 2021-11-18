import { IChangeTurnAction } from '../actions/boardActions';

export default function turnReducer(state = { turn: 'player' }, action: IChangeTurnAction) {
  switch (state.turn) {
    case 'player':
      return {
        turn: 'comp'
      };
    case 'comp':
      return {
        turn: 'player'
      };
  }
}
