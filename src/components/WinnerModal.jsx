import React from "react";

export function WinnerModal({ playerName, score, resetGame }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Congratulations, {playerName}!</h2>
        <p>You won!</p>
        <p>Final Score: {playerName}: {score.player} | Oponent: {score.computer}</p>
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
}
