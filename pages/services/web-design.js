import Head from "next/head";
import React from "react";
import Contact from "../../components/Contact";
import { motion, useScroll, useTransform } from "framer-motion";

const WebDesign = () => {
  const { scrollYProgress } = useScroll();
  const left = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const right = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  return (
    <div className="px-6 lg:px-28">
      <Head>
        <title>Rohit Sahani | Web Design</title>
      </Head>
      <div className="w-full items-center justify-center flex text-center flex-col overflow-hidden space-y-2 h-[92vh]">
        <motion.h1
          style={{ x: left }}
          className="md:text-9xl text-6xl duration-500 font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
          Good design
        </motion.h1>
        <motion.h1
          style={{ x: right }}
          className="md:text-9xl text-6xl duration-500 font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
          is invisible.
        </motion.h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-4xl max-w-2xl font-bold font-[roboto-serif]">
          I design delightful, minimal experiences your users will love.
        </h1>
        <p className="font-[poppins] max-w-2xl">
          I love designing products that makes people's lives easier. The
          products I've designed are used by millions of people across the
          globe.
        </p>
      </div>

      <div className="py-16">
        <h1 className="text-4xl font-[roboto-serif] font-bold">
          My design principles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="">
            <img
              src="/images/great-design.jpg"
              alt=""
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold font-[roboto-serif]">
              Great design solves a real problem.
            </h1>
            <p className="text-gray-500">
              I have a strong understanding in tech, business and marketing. I
              start every project by understanding your business and customers
              before diving into design.
            </p>
          </div>
          <div className="flex order-2 md:order-1 flex-col justify-center">
            <h1 className="text-2xl font-bold font-[roboto-serif]">
              Design for people, not users
            </h1>
            <p className="text-gray-500">
              Strike a balance between aesthetics and functionality. Good
              micro-copy brings massive results. Let's build products with
              meaningful experiences that pay attention to design details.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/design-for-people.jpg"
              alt=""
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* Let's discuss */}
      <Contact />
      <div className="py-8"></div>
    </div>
  );
};

export default WebDesign;
