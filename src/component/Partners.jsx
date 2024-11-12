import { Trustee } from "../data/data";
import { motion } from "framer-motion";
const Partners = () => {
  return (
    <section className="flex bg-white itms-center justify-center px-[5%] lg:px-[10%] w-full py-24 sm:py-32 bg-current ">
      <div className="mx-auto w-full px-6 lg:px-8">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
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
        >
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            We are trusted by professionals from
          </h2>
        </motion.div>
        <div className="flex flex-col items-center lg:justify-between lg:flex-row w-full py-8">
          {Trustee.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="h-32 w-32 bg-black"
            >
              <img className="h-full w-full" src={item.img} alt={item.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
