import { COLUMN_CHANGE_NUM, IColumnChangeNumAction } from '../actions/columnNumActions';

export default function currColumnNumReducer(state = null, action: IColumnChangeNumAction) {
  if (action.type === COLUMN_CHANGE_NUM) {
    if (action.payload.currColumnNum === 'current') {
      return state;
    }
    return action.payload.currColumnNum;
  }
  return state;
}
