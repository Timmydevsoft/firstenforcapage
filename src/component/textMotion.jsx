import { motion } from "framer-motion";
const MotionText = ({ text, initX, viewX, className }) => {
  return (
    <motion.div
      initial={{
        x: initX,
        opacity: 0,
      }}
      whileInView={{
        x: viewX,
        opacity: 1,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default MotionText
