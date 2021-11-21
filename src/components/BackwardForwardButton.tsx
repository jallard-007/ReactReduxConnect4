import React from 'react';
import { useDispatch } from 'react-redux';
import { _boardAddTokenActionCreator, _boardRemoveTokenActionCreator } from '../redux/actions/boardActions';
import { GetGameHistory, GetGameHistoryLength, GetRemovedHistory, GetRemovedHistoryLength } from '../StoreGameMoves';

function BackForButton() {
  const dispatch = useDispatch();

  function GoBack() {
    if (GetGameHistoryLength() > 0) {
      let previousMove = GetGameHistory();
      dispatch(_boardRemoveTokenActionCreator({ columnNum: previousMove.columnNum }));
    }
  }

  function GoForward() {
    if (GetRemovedHistoryLength() > 0) {
      let removedMove = GetRemovedHistory();
      dispatch(
        _boardAddTokenActionCreator({
          columnNum: removedMove.columnNum,
          playerID: removedMove.playerID
        })
      );
    }
  }
  return (
    <div>
      <button className='btn btn-info' onClick={() => GoBack()}>
        GoBack
      </button>
      <button className='btn btn-info' onClick={() => GoForward()}>
        GoForward
      </button>
    </div>
  );
}

export default BackForButton;
