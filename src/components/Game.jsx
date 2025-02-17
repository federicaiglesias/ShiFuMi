import ChoiceButton from "./ChoiceButton";
import ResultModal from "./ResultModal";
import { useGameLogic } from "../hooks/useGameLogic";
import "./game.css";

function Game({ score, setScore }) {
  const { playerChoice, computerChoice, result, play } = useGameLogic(setScore);

  return (
    <div className="game font">
      <div className="">
        <h2 className="">Choose your move:</h2>
        
      </div>
      <div className="choices">
        <ChoiceButton choice="rock" play={play} />
        <ChoiceButton choice="paper" play={play} />
        <ChoiceButton choice="scissors" play={play} />
      </div>

      <ResultModal
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
      />
    </div>
  );
}

export default Game;
