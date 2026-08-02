import { motion } from "framer-motion";

function AIOrb() {
  return (
    <div className="ai-orb-wrapper">
      <motion.div
        className="ai-orb"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="orb-core"></div>
      </motion.div>

      <div className="orb-status">NEURAL CORE ACTIVE</div>
    </div>
  );
}

export default AIOrb;
