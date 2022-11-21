import React from "react";

const Newsletter = () => {
  return (
    <div className="px-6 lg:px-28 bg-gray-100 py-16 flex items-center justify-center">
      <div className="w-[80%] h-80 bg-white rounded-3xl shadow-sm px-20 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl text-center font-semibold">
          Sharing my learnings on ux design, self-development & solopreneurship.
        </h1>
        <p className="text-xl text-center max-w-2xl">
          Join 2,000+ people who receives 1 issue per month. I also share my
          failures and successes along the way.
        </p>
        <div className="flex space-x-4">
          <input
            type="text"
            className="border focus:outline-none focus:border-blue-500 px-6 rounded-full py-3"
            placeholder="What's your email?"
          />
          <button className="bg-gradient-to-l from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-400 rounded-full text-white px-6 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
