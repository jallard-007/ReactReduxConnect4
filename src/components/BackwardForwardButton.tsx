import React from 'react';
import { useDispatch } from 'react-redux';
import { _boardAddTokenActionCreator, _boardRemoveTokenActionCreator } from '../redux/actions/boardActions';
import {
  GetGameHistory,
  GetGameHistoryLength,
  GetRemovedHistory,
  GetRemovedHistoryLength
} from '../boardLogic/gameHistory';

function BackForButton() {
  const dispatch = useDispatch();

  function goBack() {
    if (GetGameHistoryLength() > 0) {
      let previousMove = GetGameHistory();
      dispatch(_boardRemoveTokenActionCreator({ columnNum: previousMove.columnNum }));
    }
  }

  function goForward() {
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
    <div className='text-center'>
      <button type='button' className='btn btn-info button' onClick={() => goBack()}>
        GoBack
      </button>
      <button type='button' className='btn btn-info button' onClick={() => goForward()}>
        GoForward
      </button>
    </div>
  );
}

export default BackForButton;
