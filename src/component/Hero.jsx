import React from "react";
import "../index.css";
import Header from "./Header";
import IntroSection from "./Introsection";
const Hero = () => {
  return (
    <section className="w-full min-h-screen bgimage  px-[5%]">
      <Header />
      <IntroSection />
    </section>
  );
};
export default Hero;
