import Head from "next/head";
import React from "react";

const appDevelopment = () => {
  return (
    <div className="px-6 lg:px-28">
      <Head>
        <title>Rohit Sahani | App Development</title>
      </Head>
      <div className="w-full items-center justify-center flex text-center flex-col space-y-2 h-[92vh]">
        <h1 className="text-8xl font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
          Increase Customer
        </h1>
        <h1 className="text-8xl font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
          Grow Business.
        </h1>
      </div>
    </div>
  );
};

export default appDevelopment;
