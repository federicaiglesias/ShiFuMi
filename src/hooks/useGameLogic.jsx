import { useState } from "react";
import { Howl } from "howler";
import winSound from "../assets/good.wav";
import loseSound from "../assets/lose.wav";
import drawSound from "../assets/draw.wav";

const choices = ["rock", "paper", "scissors"];

export function useGameLogic(setScore) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const sounds = {
    win: new Howl({ src: [winSound] }),
    lose: new Howl({ src: [loseSound] }),
    draw: new Howl({ src: [drawSound] }),
  };

  const play = (choice) => {
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
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
      sounds.win.play();
    } else {
      setResult("You lose!");
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      sounds.lose.play();
    }
  };

  return { playerChoice, computerChoice, result, play };
}
