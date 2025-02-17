import React from "react";

export function LoserModal({ playerName, score, resetGame }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sorry, {playerName}!</h2>
        <p>You lost!</p>
        <p>
          Final Score: {playerName}: {score.player} | Oponent: {score.computer}
        </p>
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
}
