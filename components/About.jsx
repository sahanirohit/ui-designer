import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-6 bg-gray-100 pb-16 lg:px-28 flex justify-center">
      <div className="flex justify-center w-[80%] gap-16">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Hi! It's Rachel 👋</h1>
          <p className="max-w-md">
            Welcome to my little slice of the internet. I hope you find
            something useful here.
          </p>
          <p className="">
            I design interfaces, build Webflow sites, and create YouTube videos
            to share my knowledge.
          </p>
          <p className="">Read more about me or ask me anything.</p>
          <p className="">Thanks for dropping by,</p>
          <p className="font-[Smooch] text-2xl">Rachel...</p>
        </div>
        <div className=" justify-end flex">
          <Image
            src="/images/me.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
