import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const left = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const right = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  return (
    <div className="w-full bg-gray-100 z-[-1]  h-[92vh] font-[poppins] overflow-hidden relative font-semibold flex flex-col items-center justify-center">
      <motion.h1
        style={{ x: left }}
        className="md:text-9xl text-6xl duration-500 font-[roboto-serif] font-black bg-clip-text italic bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
        Think Less,
      </motion.h1>
      <motion.h1
        style={{ x: right }}
        className="md:text-9xl text-6xl duration-500 font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
        create more
      </motion.h1>
    </div>
  );
};

export default Hero;
