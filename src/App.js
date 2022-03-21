import React, { useState, useEffect } from "react";
import "./App.css";
import SquareComponent from "./components/SquareComponent";
import { AppMain, Row, Button } from "./style/AppCss";
const initial = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(initial);
  const [isXChance, updateIsXChance] = useState(false);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "O";
    updateGameState(strings);
    updateIsXChance(!isXChance);
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(`${winner} has win the game`);
      updateGameState(initial);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="App">
      <AppMain>
        <Row>
          <SquareComponent
            state={gameState[0]}
            onClick={() => onSquareClicked(0)}
          />
          <SquareComponent
            state={gameState[1]}
            onClick={() => onSquareClicked(1)}
          />
          <SquareComponent
            state={gameState[2]}
            onClick={() => onSquareClicked(2)}
          />
        </Row>
        <Row>
          <SquareComponent
            state={gameState[3]}
            onClick={() => onSquareClicked(3)}
          />
          <SquareComponent
            state={gameState[4]}
            onClick={() => onSquareClicked(4)}
          />
          <SquareComponent
            state={gameState[5]}
            onClick={() => onSquareClicked(5)}
          />
        </Row>
        <Row>
          <SquareComponent
            state={gameState[6]}
            onClick={() => onSquareClicked(6)}
          />
          <SquareComponent
            state={gameState[7]}
            onClick={() => onSquareClicked(7)}
          />
          <SquareComponent
            state={gameState[8]}
            onClick={() => onSquareClicked(8)}
          />
        </Row>
        <Button onClick={() => updateGameState(initial)}>Clear Game</Button>
      </AppMain>
    </div>
  );
}

export default App;
