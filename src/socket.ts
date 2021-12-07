import { io } from 'socket.io-client';
import { _updateBoardActionCreator } from './redux/actions/boardActions';
import { _changePlayerIDActionCreator } from './redux/actions/playerIDActions';
import _changeScoreActionCreator from './redux/actions/scoreActions';
import _changeTurnActionCreator from './redux/actions/turnActions';
import store from './redux/store';

const socket = io('http://localhost:8000');

socket.on('connect', () => {
  console.log('you connected with id:', socket.id);
  socket.emit('join');
});

socket.on('playersID', (currPlayerID) => {
  store.dispatch(_changePlayerIDActionCreator({ playerID: currPlayerID }));
});
socket.on('board-state', (newBoard) => {
  store.dispatch(_updateBoardActionCreator({ newBoard: newBoard }));
});
socket.on('turn-state', (whosTurn) => {
  store.dispatch(_changeTurnActionCreator({ whosTurn: whosTurn }));
});
socket.on('score-state', (score) => {
  console.log(score);
  store.dispatch(_changeScoreActionCreator({ score: score }));
});

export default socket;
