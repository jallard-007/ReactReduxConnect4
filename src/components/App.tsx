import React from "react";
import "../sldkf.css";
import Board from "./Board";
import { useSelector } from "react-redux";
import IAppState from "../redux/types/IAppState";
import ResetButton from "./ResetButton";
import BackForButton from "./BackwardForwardButton";

function App() {
  let board = useSelector((state: IAppState) => state.board);

  return (
    <div className='container'>
      <div className='App'>
        <header>
          <h1 className='text-center'>ConnectFour</h1>
        </header>
        <ResetButton />
        <BackForButton />
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
