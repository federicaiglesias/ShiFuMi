import { motion } from "framer-motion";
import "./choiceButton.css";

function ChoiceButton({ choice, play }) {
  return (
    <motion.button
      className={`choice-button ${choice}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => play(choice)}
    >
      {choice.charAt(0).toUpperCase() + choice.slice(1)}
    </motion.button>
  );
}

export default ChoiceButton;
