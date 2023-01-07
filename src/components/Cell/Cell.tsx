import * as React from "react";
import { useState } from "react";
import "./Cell.css";

interface CellProps {
  index: number;
  onCellClick: (
    index: number,
    setPlayerSign: (value: ((prevState: string) => string) | string) => void
  ) => void;
}

export const Cell = ({ index, onCellClick }: CellProps) => {
  const [playerSign, setPlayerSign] = useState("");

  const generateClassName = () => {
    switch (index) {
      case 1:
        return "cell__top";
      case 3:
        return "cell__left";
      case 4:
        return "cell__center";
      case 5:
        return "cell__right";
      case 7:
        return "cell__bottom";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={() => onCellClick(index, setPlayerSign)}
      className={generateClassName()}
    >
      {playerSign}
    </button>
  );
};
