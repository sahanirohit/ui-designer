import Head from "next/head";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Contact from "../../components/Contact";

const projectShowcase = [
  { img: "/images/Frame 1.jpg" },
  { img: "/images/Frame 2.jpg" },
];

const AppDevelopment = () => {
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
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-4xl max-w-2xl font-bold font-[roboto-serif]">
          I build sites that turn visitors into your customers.
        </h1>
        <p className="font-[poppins] max-w-2xl">
          As a designer who doubles as a Webflow expert, I build (or adapt) your
          designs into high performing, pixel-perfect landing pages to save you
          time and cost. I understand what it takes to reach your business
          goal—from designs to the technical bits.
        </p>
      </div>

      {/* Showcase */}
      <div className="py-16">
        <h1 className="text-4xl font-bold font-[poppins] pb-8">Showcase</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          {projectShowcase.map((item, index) => {
            return (
              <div className="h-full w-full border cursor-pointer" key={index}>
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <Contact />
      <div className="pb-16"></div>
    </div>
  );
};

export default AppDevelopment;
