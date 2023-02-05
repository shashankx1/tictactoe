import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import "./styles/root.scss";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNextx, setNextx] = useState(false);
  const winner = calculateWinner(board);
  const MESSAGE = winner
    ? `Winner is ${winner}`
    : `Next player is ${isNextx ? "X" : "O"}`;

  console.log(board);
  const handleSquareClick = (position) => {
    if (board[position] || winner) {  
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isNextx ? "x" : "o";
        }
        return square;
      });
    });
    setNextx((prev) => !prev);
  };
  return (
    <div className="App">
      <h1>TIC TAC TOE</h1>
      <h2>{MESSAGE}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
      <h6> DEVELOPED BY SHASHANK </h6>
    </div>
  );
};

export default App;
