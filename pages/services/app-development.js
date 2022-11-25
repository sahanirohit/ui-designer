import Head from "next/head";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const appDevelopment = () => {
  const { scrollYProgress } = useScroll();
  const left = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const right = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  return (
    <div className="px-6 lg:px-28">
      <Head>
        <title>Rohit Sahani | App Development</title>
      </Head>
      <div className="w-full items-center justify-center flex text-center flex-col overflow-hidden space-y-2 h-[92vh]">
        <motion.h1
          style={{ x: left }}
          className="md:text-7xl text-4xl duration-500 font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
          Increase Customer
        </motion.h1>
        <motion.h1
          style={{ x: right }}
          className="md:text-7xl text-4xl duration-500 font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
          Grow Business.
        </motion.h1>
      </div>
    </div>
  );
};

export default appDevelopment;
