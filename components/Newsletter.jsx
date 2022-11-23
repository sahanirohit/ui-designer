import React from "react";
import { FaBolt } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="px-6 lg:px-28 bg-gray-100 py-16 flex items-center justify-center">
      <div className="sm:w-[80%] min-h-[20rem] py-6 bg-white rounded-3xl shadow-sm px-6 md:px-20 flex flex-col items-center justify-center space-y-4">
        <h1 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold">
          Sharing my learnings on ux design, self-development & solopreneurship.
        </h1>
        <p className="sm:text-xl text-center max-w-2xl">
          Join 2,000+ people who receives 1 issue per month. I also share my
          failures and successes along the way.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            className="border focus:outline-none focus:border-blue-500 px-6 rounded-full py-2"
            placeholder="What's your email?"
          />
          <button className="flex items-center justify-center space-x-2 bg-gradient-to-bl hover:from-yellow-400 hover:to-red-600 from-green-400 to-blue-500 rounded-full text-white px-6 py-2">
            <span>Subscribe</span>
            <FaBolt className="rotate-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
