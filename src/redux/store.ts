import { combineReducers, createStore, applyMiddleware } from 'redux';
import boardReducer from './reducers/boardReducer';
import turnReducer from './reducers/turnReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  board: boardReducer,
  turn: turnReducer
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));