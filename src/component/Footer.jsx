import { socialIcons } from "../data/data";
import EnforcaImage from "../assets/robot3-removebg-preview.DdrLEDGu.png";
import EnforcaLogo from "../assets/transparent2.C2Cshd8-.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const Footer = () => {
  const container = useRef()
  const {scrollYProgress} = useScroll(
    {
      target: container,
      offset: ["start start", "end end"]
    } 
    
  )
  const scale =  useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <footer className="flex flex-col lg:flex-row items-stretch gap-6  px-[5%] py-10 lg:py-0">
      {/* <div > */}
        
           
        
          <motion.div
            ref={container}
            style={{scale}}
            className="w-full lg:w-[40%] relative"
          >
          <img
          className=" lg:relative object-cover inset-0"
          src={EnforcaImage}
          alt="Enforca robot image"
        />
          </motion.div>
        
        
      
        
      {/* </div> */}
      <div className="lg:flex-row flex-col lg:w-[50%] justify-between z-20 bg-white">
        <div className="flex-col lg:flex-row w-full lg:space-x-8 items-start">
          {/* left */}
          <div className="">
            <p className="block text-lg font-medium text-gray-900 hover:opacity-75">
              <a href="#">
                We are an Artificial intelligence platform that helps talents
                get decent jobs.
              </a>
            </p>
            <ul className="flex mt-8 gap-6">
              {socialIcons.map((items, index) => (
                <li key={index} className="text-gray-900">
                  <a href="#">{items.icon}</a>
                </li>
              ))}
            </ul>
            <img className="w-60 h-40" src={EnforcaLogo} alt="Enfoca logo" />
          </div>
          {/* right */}
          <div className="">
            <h4 className="font-medium text-gray-900 lg:w-[50%]">
              Get in touch
            </h4>
            <ul className="mt-6 text-sm flex flex-col gap-4">
              {[
                "Nigeria: Ajao estate Lagos",
                "United kingdom: 2nd Floor College House 17 King Edwards Road Ruislip London",
                "United states: Delaware, United states",
                "Whatsapp: +2348127575385, +974 7064 0796",
                "Copyright © 2024 Mentor Techies. Powered by Mentor Techies",
              ].map((item, index) => (
                <li key={index} className="lg:w-2/3">
                  <a className="text-gray-700 transition hover:opacity-75">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-col lg:flex-row items-center justify-between mt-12 pt-12 border-t scroll-px-2">
          <ul className="flex gap-8  text-xs">
            {["Terms & Conditions", "Privacy Policy", "Cookies"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    className="text-gray-500 transition hover:opacity-75"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <p className="mt-6 lg:mt-0">
            <a
              className="text-gray-500 text-xs transition hover:opacity-75"
              href="#"
            >
              &copy; 2024.Enforca technologies All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
