import { IUpdateBoardAction, UPDATE_BOARD } from '../actions/boardActions';
import Occupant from '../types/EOccupant';
import IBoard from '../types/IBoard';
import IColumn from '../types/IColumn';
import ISlot from '../types/ISlot';

const emptySlot: ISlot = {
  occupant: Occupant.Empty
};
const emptyColumn: IColumn = {
  slots: [emptySlot, emptySlot, emptySlot, emptySlot, emptySlot, emptySlot],
  slotsAvailable: 6
};
const initialState: IBoard = {
  columns: [emptyColumn, emptyColumn, emptyColumn, emptyColumn, emptyColumn, emptyColumn, emptyColumn]
};

export default function boardReducer(state = initialState, action: IUpdateBoardAction) {
  if (action.type === UPDATE_BOARD) {
    return action.payload.newBoard;
  }
  return state;
}
