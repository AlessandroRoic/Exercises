import { Cell } from "./components/Cell/Cell";
import "./styles.css";
import { useState } from "react";

const CELLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const STATE = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};

export default function App() {
  const [gameState, setGameState] = useState<{ [name: number]: string }>(STATE);
  const [cells, setCells] = useState(CELLS);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState<string>("");

  const reset = () => {
    setGameState(STATE);
    setCells(CELLS);
    setCurrentPlayer("X");
    setWinner("");
  };

  const onCellClick = (index: number, setCellValue: (arg0: string) => void) => {
    if (gameState[index]) return;
    setCellValue(currentPlayer);
    const newGameState = gameState;
    newGameState[index] = currentPlayer;
    setGameState(newGameState);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    const winner = checkWinner();
    if (winner) {
      setTimeout(() => setWinner(winner), 1000);
      setTimeout(() => reset(), 3000);
    }
  };

  const checkWinner: () => string | undefined = () => {
    for (let i = 0; i < cells.length; i += 3) {
      const row = cells.slice(i, i + 3);
      const resultRow = checkValues(row);
      if (resultRow) return resultRow;
      const offset = i / 3;
      const col = [offset, offset + 3, offset + 6];
      const resultCol = checkValues(col);
      if (resultCol) return resultCol;
    }
    const resultFirstDiagonal = checkValues([0, 4, 8]);
    if (resultFirstDiagonal) return resultFirstDiagonal;
    const resultSecondDiagonal = checkValues([2, 4, 6]);
    if (resultSecondDiagonal) return resultSecondDiagonal;
  };

  const checkValues: (array: number[]) => string | null = (array: number[]) => {
    const mappedArray: string[] = array.map((value) => gameState[value]);
    return new Set(mappedArray).size === 1 ? mappedArray[0] : null;
  };

  return (
    <div>
      {winner ? (
        <h1>{`🎉🎊 The winner is ${winner} 🎉🎊`}</h1>
      ) : (
        <div className="wrapper">
          {cells.map((_, index) => (
            <Cell onCellClick={onCellClick} index={index} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
