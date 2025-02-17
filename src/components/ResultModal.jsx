import { motion } from "framer-motion";

function ResultModal({ playerChoice, computerChoice, result }) {
  if (!playerChoice) return null;

  return (
    <motion.div
      className="p-4 mt-4text-center text-white bg-gray-800 rounded-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <div className="d-flex justify-content-center">
        <p className="me-5">You chose: {playerChoice}</p>
        <p>Computer chose: {computerChoice}</p>
      </div>
      <motion.h3
        className="mt-2 text-2xl font-bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: 2 }}
      >
        {result}
      </motion.h3>
    </motion.div>
  );
}

export default ResultModal;
