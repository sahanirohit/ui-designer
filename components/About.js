import Image from "next/image";
import React from "react";
import aboutMe from "/public/images/about.png";

const About = () => {
  return (
    <div className="px-6 bg-gray-100 pb-16 lg:px-28 flex justify-center">
      <div className="flex flex-col md:flex-row justify-center max-w-7xl mx-auto w-full gap-16">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Hi! It's Rohit 👋</h1>
          <p className="max-w-md">
            Welcome to my little slice of the internet. I hope you find
            something useful here.
          </p>
          <p className="max-w-md">
            User experience and user interface design are all about listening to
            your target audience and translating their desires into features
            that satisfy a need.
          </p>
          <p className="max-w-md">
            Brand website design is not just about pleasing aesthetics, but also
            about creating an ideal user experience. We believe that the
            priorities should be focused on people, not the product.⁣⁣
          </p>
          <p className="max-w-md">
            A great user experience never goes without a great web design, so
            discover how #brandname can help
          </p>
          <p className="">Thanks for dropping by,</p>
          <p className="font-[Smooch] text-2xl">Rohit...</p>
        </div>
        <div className=" justify-end flex">
          <div className="relative w-60">
            <Image src={aboutMe} alt="me" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
