import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-gray-100 z-[-1]  h-[92vh] font-[poppins] relative font-semibold flex flex-col items-center justify-center">
      <div className="h-96 w-96 rounded-full bg-orange-400 absolute blur-[80px] left-[26%] z-10"></div>
      <div className="h-96 w-96 rounded-full bg-pink-600 absolute blur-[80px] right-[26%] z-10"></div>

      <h1 className="text-8xl uppercase italic z-20 text-white">Think Less,</h1>
      <h1 className="text-8xl uppercase z-20 text-white">create more</h1>
    </div>
  );
};

export default Hero;
