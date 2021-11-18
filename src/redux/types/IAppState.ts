import IBoard from './IBoard';

export default interface IAppState {
  board: IBoard;
  turn: 'player' | 'comp';
  difficulty: 'easy' | 'medium';
}
