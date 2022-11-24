import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-gray-100 z-[-1]  h-[92vh] font-[poppins] relative font-semibold flex flex-col items-center justify-center">
      <h1 className="text-9xl font-[roboto-serif] font-black bg-clip-text italic bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
        Think Less,
      </h1>
      <h1 className="text-9xl font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
        create more
      </h1>
    </div>
  );
};

export default Hero;
