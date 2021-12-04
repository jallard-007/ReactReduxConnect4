import React from 'react';
import { useSelector } from 'react-redux';
import IAppState from '../redux/types/IAppState';

export default function ScoreBoard() {
  let score = useSelector((state: IAppState) => state.score);
  return (
    <div id='scoreboard'>
      <p>
        Player1Score: {score.player1Score} Player2Score: {score.player2Score}{' '}
      </p>
    </div>
  );
}
