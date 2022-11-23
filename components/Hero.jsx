import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-gray-100 z-[-1]  h-[92vh] font-[poppins] relative font-semibold flex flex-col items-center justify-center">
      <div className="absolute flex w-full h-full items-center justify-around max-w-md -space-x-24">
        <div className="md:h-80  md:w-80 w-52 h-52 rounded-full bg-green-400  blur-[50px] md:blur-[70px] z-10"></div>
        <div className="md:h-80 md:w-80 w-52 h-52 rounded-full bg-blue-500 blur-[50px] md:blur-[70px] z-10"></div>
      </div>

      <h1 className="md:text-7xl text-3xl uppercase italic z-20 text-white">
        Think Less,
      </h1>
      <h1 className="md:text-7xl text-3xl uppercase z-20 text-white">
        create more
      </h1>
    </div>
  );
};

export default Hero;
