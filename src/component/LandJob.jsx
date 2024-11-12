import { motion } from "framer-motion"
const LandJob = ()=>{
    return(
        <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
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
                 className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
                >
                <span className="text-[#1C30A3] text-opacity-25">Land your dream job faster</span> with <br/> personalized support every step of the way.
                </motion.div>

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
                    duration: 1,
                    ease: "easeInOut",
                  }}
                 className="mt-6"
                >
                    <p className=" text-lg leading-8 text-gray-300"> Never face the job search alone. Our app connects you with a dedicated mentor, personalizes your CV for success, and equips you with interview skills through realistic simulations and expert feedback. Land your dream job faster with all-in-one support.</p>
                </motion.div>
                
            
                
            </div>
        </div>
    )
}
export default LandJob