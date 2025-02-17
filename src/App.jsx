import { useState } from "react";
import Game from "./components/Game";
import Scoreboard from "./components/ScoreBoard";
import { WinnerModal } from "./components/WinnerModal";
import { LoserModal } from "./components/LoserModal";
import "./App.css";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [playerName, setPlayerName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    if (playerName) {
      setIsPlaying(true);
      setScore({ player: 0, computer: 0 });
      setGameOver(false);
    } else {
      alert("Por favor ingresa tu nombre.");
    }
  };

  const resetGame = () => {
    setIsPlaying(false);
    setPlayerName("");
    setScore({ player: 0, computer: 0 });
    setGameOver(false);
  };

  const { playerChoice, computerChoice, result, play } = useGameLogic(
    setScore,
    setGameOver
  );

  return (
    <div className="app">
      <h1 className="mb-5 font">ROCK PAPER SCISSORS</h1>

      {!isPlaying ? (
        <div>
          <div>
            <iframe
              className="mb-4"
              src="https://lottie.host/embed/63107609-ae86-4730-9b77-8ca67cbbb761/md5ce33QtS.lottie"
            ></iframe>
          </div>
          <input
            type="text"
            placeholder="Your nickname..."
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="mb-4 p-2 me-2 rounded font"
          />
          <button className="p-2 rounded play-button font" onClick={startGame}>
            Play
          </button>
        </div>
      ) : (
        <>
          <Scoreboard score={score} playerName={playerName} />
          <div className="mb-4">
            <Game score={score} setScore={setScore} play={play} />
          </div>
          <button
            className="btn reset-button rounded p-2 fs-6 font-2"
            onClick={resetGame}
          >
            Restart
          </button>
        </>
      )}

      {gameOver && score.player >= 5 && (
        <WinnerModal
          playerName={playerName}
          score={score}
          resetGame={resetGame}
        />
      )}

      {gameOver && score.computer >= 5 && (
        <LoserModal
          playerName={playerName}
          score={score}
          resetGame={resetGame}
        />
      )}
    </div>
  );
}

export default App;
