import Robot from "../assets/robot4.C8HOZV2G.png";
import AnimatedSection from "./Motion";
import { motion } from "framer-motion";
const IntroSection = () => {
  // const className = " mt-12 py-8";
  return (
    <div className="component  mt-12 py-8">
      <div className="flex flex-col lg:flex-row sm:flex-row items-center gap-8">
        <AnimatedSection className=" w-full lg:w-[50%] lg:h-[70vh]">
          <h2 className="text-3xl w-full lg:w-[80%] lg:text-5xl text-white font-black">
            First <span className="text-blue-800">AI</span> job application and
            support platform.
          </h2>

          <p className="text-lg mt-4 w-full lg:w-[80%] leading-loose text-white font-light">
            Learn your dream job with personalized preparation and expert
            guidance aided with our AI-powered job processing platform
          </p>
          <div className="flex justify-center lg:block mt-[3rem] w-full">
            <button className="py-3 px-12 text-white bg-[#1C30A3] shadow-lg rounded-full">
              <a href="mentor-techies.com">Start Here</a>
            </button>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{
            x: 100,
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
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="mt-4 lg:mt-0 sm:mt-0"
        >
          <img src={Robot} alt="iRobot image" />
        </motion.div>
      </div>
    </div>
  );
};
export default IntroSection;
