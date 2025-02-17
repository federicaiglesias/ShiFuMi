import { useState } from "react";
import { Howl } from "howler";
import winSound from "../assets/good.wav";
import loseSound from "../assets/lose.wav";
import drawSound from "../assets/draw.wav";
import WinnerModal from "../components/WinnerModal"; // Importa el modal de ganador
import LoserModal from "../components/LoserModal"; // Importa el modal de perdedor

const choices = ["rock", "paper", "scissors"];

export function useGameLogic(setScore) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showLoserModal, setShowLoserModal] = useState(false);

  const sounds = {
    win: new Howl({ src: [winSound] }),
    lose: new Howl({ src: [loseSound] }),
    draw: new Howl({ src: [drawSound] }),
  };

  const play = (choice) => {
    if (gameOver) return;

    const randomIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomIndex];

    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult("It's a tie!");
      sounds.draw.play();
    } else if (
      (choice === "rock" && compChoice === "scissors") ||
      (choice === "paper" && compChoice === "rock") ||
      (choice === "scissors" && compChoice === "paper")
    ) {
      setResult("You win!");
      setScore((prev) => {
        const newScore = { ...prev, player: prev.player + 1 };
        return newScore;
      });
      sounds.win.play();
    } else {
      setResult("You lose!");
      setScore((prev) => {
        const newScore = { ...prev, computer: prev.computer + 1 };
        return newScore;
      });
      sounds.lose.play();
    }
  };


  return {
    playerChoice,
    computerChoice,
    result,
    play,
    gameOver,
    showWinnerModal,
    showLoserModal,
  };
}
