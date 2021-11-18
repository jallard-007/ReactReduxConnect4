import { useDispatch } from "react-redux";
import { _boardClearActionCreator } from "../redux/actions/boardActions";
import { NewGameMoves } from "../StoreGameMoves";

export default function ResetButton() {
  const dispatch = useDispatch();
  function ResetGame() {
    NewGameMoves();
    dispatch(_boardClearActionCreator());
  }

  return (
    <div>
      <button className='btn btn-danger' onClick={() => ResetGame()}>
        ClearBoard
      </button>
    </div>
  );
}
