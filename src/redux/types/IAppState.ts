import IBoard from './IBoard';

export default interface IAppState {
  board: IBoard;
  currColumnNum: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  whosTurn: 'player1' | 'player2' | 'neither';
  difficulty: 'easy' | 'medium';
}
