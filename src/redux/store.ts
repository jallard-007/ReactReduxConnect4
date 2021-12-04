import { combineReducers, createStore, applyMiddleware } from 'redux';
import boardReducer from './reducers/boardReducer';
import turnReducer from './reducers/turnReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import currColumnNumReducer from './reducers/columnNumReducer';
import scoreReducer from './reducers/scoreReducer';

const reducers = combineReducers({
  board: boardReducer,
  whosTurn: turnReducer,
  currColumnNum: currColumnNumReducer,
  score: scoreReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
