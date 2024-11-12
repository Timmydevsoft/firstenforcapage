import data from "../data/data";
import { motion } from "framer-motion";
const Build = () => {
  return (
    <div className="w-full px-[5%] bg-white py-24 sm:px-2 sm:py-32 lg:px-[11%]">
      <motion.div
        initial={{
          x: 50,
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
      >
        <h3 className="text-4xl font-bold text-center lg:text-left tracking-tight text-gray-900">
          We built our business on customer service
        </h3>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-x-8 gap-y-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center lg:items-start flex-col"
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
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <img className="w-16 h-16" src={item.icon} />
            <div className="mt-6">
              <h4 className="text-center lg:text-left font-medium text-gray-900">{item.title}</h4>
              <p className="mt-2 text-center lg:text-left text-gray-500">{item.body}</p>
            </div>
          </motion.div>
          
        ))}
      </div>
    </div>
  );
};

export default Build;
