import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const Scale = ({children, className})=>{
    const container = useRef
    const scrolWhileProgress = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });
    const scale = useTransform(scrolWhileProgress, [0,1], [1, 0.8])
    return(
        <motion.div
          style={{scale}}
          ref={container}
          className={classNames}
        >
            {children}
        </motion.div>
    )
}
export default Scale