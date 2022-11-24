import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBezierCurve,
  FaDesktop,
  FaMobileAlt,
} from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { HiCurrencyDollar, HiSpeakerphone } from "react-icons/hi";
import Contact from "../components/Contact";

const digitalServices = [
  {
    icon: <FaBezierCurve className="text-4xl text-white" />,
    title: "UI/UX Design",
    desc: "We create beautiful ui/ux designs for startups and small businesses. We offer a wide range of services from web design to product design.",
  },
  {
    icon: <FaDesktop className="text-4xl text-white" />,
    title: "Web Development",
    desc: "We are a web development company that caters to small businesses and startups. We are specializes in creating high-quality and modern websites.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-white" />,
    title: "Application Development",
    desc: "We have experience in developing apps for iOS, Android, and Windows. We have a strong track record of success with our clients.",
  },
  {
    icon: <HiSpeakerphone className="text-4xl text-white" />,
    title: "Social Media Marketing",
    desc: "Social media marketing is the great way to promote your business, drive traffic to your website, and increase awareness of your brand.",
  },
  {
    icon: <HiCurrencyDollar className="text-4xl text-white" />,
    title: "Paid Advertising",
    desc: "We're a company that specializes in PPC advertising, and we'll work with you to find the best strategies for your budget. Let's work together",
  },
];

const About = () => {
  const [slide, setSlide] = useState();
  const [container, setContainer] = useState();
  const nextSlide = () => {
    let width = slide.clientWidth;
    container.scrollLeft = container.scrollLeft + (width + 16);
  };
  const prevSlide = () => {
    let width = slide.clientWidth;
    container.scrollLeft = container.scrollLeft - (width + 16);
  };
  useEffect(() => {
    const slide = document.querySelector(".slide");
    setSlide(slide);
    const container = document.querySelector(".slides");
    setContainer(container);
  }, []);

  return (
    <div className="px-6 py-16 bg-orange-50 lg:px-28">
      <Head>
        <title>Rohit Sahani - About me</title>
      </Head>
      <div className="flex items-center w-full justify-center">
        <div className="flex flex-col md:flex-row justify-center w-[80%] gap-16">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">Hi! It's Rachel 👋</h1>
            <p className="max-w-md">
              Welcome to my little slice of the internet. I hope you find
              something useful here.
            </p>
            <p className="">
              I design interfaces, build Webflow sites, and create YouTube
              videos to share my knowledge.
            </p>
            <p className="">Read more about me or ask me anything.</p>
            <p className="">Thanks for dropping by,</p>
            <p className="font-[Smooch] text-2xl">Rachel...</p>
          </div>
          <div className=" justify-end flex">
            <img
              src="/images/me.jpg"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Skills */}

      <div className="pt-16 flex lg:flex-row flex-col gap-4 overflow-hidden">
        <div className="basis-1/4 text-center items-center justify-center flex flex-col space-y-2 lg:text-left lg:items-start lg:justify-start">
          <h2 className="text-pink-500">SERVICES</h2>
          <h1 className="text-4xl font-bold max-w-xs">
            I Provide Wide Range Of Digital Services
          </h1>
          <div className="flex space-x-4 pt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-pink-400">
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-pink-400">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="basis-3/4 overflow-hidden scroll-smooth slides gap-4 flex w-full h-80">
          {digitalServices.map((item, index) => {
            return (
              <div
                key={index}
                className="sm:min-w-[370px] min-w-[290px] slide scroll-smooth h-full bg-white">
                <div className="py-12 flex flex-col space-y-5 items-center justify-center text-center px-4">
                  <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h1 className="text-2xl font-bold">{item.title}</h1>
                  <p className="text-gray-400 text-sm sm:text-[16px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
