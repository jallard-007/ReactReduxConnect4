import { SetRemovedHistory } from '../../boardLogic/gameHistory';
import BoardActions, {
  BOARD_ADD_TOKEN,
  BOARD_ADD_TOKEN_WIN,
  BOARD_CLEAR,
  BOARD_REMOVE_TOKEN
} from '../actions/boardActions';
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

let columnNum: number;
let slotsAvailable: number;

export default function boardReducer(state = initialState, action: BoardActions) {
  const newBoard = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case BOARD_ADD_TOKEN:
      columnNum = action.payload.columnNum;
      slotsAvailable = newBoard.columns[columnNum].slotsAvailable;
      if (slotsAvailable < 1) return state;
      newBoard.columns[columnNum].slots[slotsAvailable - 1].occupant = action.payload.playerID;
      newBoard.columns[columnNum].slotsAvailable = slotsAvailable - 1;
      return newBoard;

    case BOARD_ADD_TOKEN_WIN:
      let whoWon = action.payload.whoWon;
      if (whoWon === Occupant.Player1) whoWon = Occupant.Player1Win;
      else whoWon = Occupant.Player2Win;
      newBoard.columns[action.payload.columnNum].slots[action.payload.slotNum].occupant = whoWon;
      return newBoard;

    case BOARD_REMOVE_TOKEN:
      columnNum = action.payload.columnNum;
      slotsAvailable = newBoard.columns[columnNum].slotsAvailable;
      if (slotsAvailable > 5) return state;
      SetRemovedHistory({ columnNum: columnNum, playerID: newBoard.columns[columnNum].slots[slotsAvailable].occupant });
      newBoard.columns[columnNum].slots[slotsAvailable].occupant = Occupant.Empty;
      newBoard.columns[columnNum].slotsAvailable = slotsAvailable + 1;
      return newBoard;

    case BOARD_CLEAR:
      const clearBoard = initialState;
      return clearBoard;
    default:
      return state;
  }
}
