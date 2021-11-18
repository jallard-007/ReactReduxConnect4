import BoardActions, { BOARD_ADD_TOKEN, BOARD_REMOVE_TOKEN } from '../actions/boardActions';
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

export default function boardReducer(state = initialState, action: BoardActions): IBoard {
  const newBoard = JSON.parse(JSON.stringify(state));

  const columnNum = 0;
  const slotsAvailable = newBoard.columns[columnNum].slotsAvailable;
  console.log(slotsAvailable);
  if (slotsAvailable < 1) {
    return state;
  }
  switch (action.type) {
    case BOARD_ADD_TOKEN:
      newBoard.columns[columnNum].slots[slotsAvailable - 1].occupant = action.payload.playerID;
      newBoard.columns[columnNum].slotsAvailable = slotsAvailable - 1;
      return newBoard;
    case BOARD_REMOVE_TOKEN:
      newBoard.columns[columnNum].slots[slotsAvailable - 1].occupant = Occupant.Empty;
      return newBoard;
    default:
      return state;
  }
}
