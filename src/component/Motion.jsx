import { motion } from "framer-motion";
const AnimatedSection = ({children})=>{
    return(
        <motion.div
        initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
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
        >
            {children}
        </motion.div>
    )
}
export default AnimatedSection