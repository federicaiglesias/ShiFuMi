function Scoreboard({ score, playerName }) {
  return (
    <div className="scoreboard font-2 fs-2">
      <p>
        {playerName}: {score.player} | Oponent: {score.computer}
      </p>
    </div>
  );
}

export default Scoreboard;
