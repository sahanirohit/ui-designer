import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "/public/images/ui-design.jpg";
import img2 from "/public/images/web-development.jpg";
import img3 from "/public/images/app-development.png";
import Image from "next/image";

const expertiseData = [
  {
    img: img1,
    title: "UI/UX Design",
    desc: "I design minimal & delightful user experience.",
  },
  {
    img: img2,
    title: "Web Development",
    desc: "I design minimal & lightspeed web application for rich user experience.",
  },
  {
    img: img3,
    title: "App Development",
    desc: "I design awesome modern UI Design for application.",
  },
];

const Expertise = () => {
  return (
    <div className="px-6 lg:px-0 py-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold pb-16">Expertise</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {expertiseData.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[32rem] border rounded-3xl">
              <div className="absolute h-full w-full bg-gradient-to-l from-green-200 to-pink-200 rounded-3xl"></div>
              <div className="absolute h-full w-full bg-gradient-to-b from-white via-white to-transparent rounded-3xl"></div>
              <div className="absolute px-6 py-6">
                <div className="flex flex-col space-y-2">
                  <strong className="text-xl text-gray-500">
                    {item.title}
                  </strong>
                  <h2 className="text-xl font-bold">{item.desc}</h2>
                  <Link
                    className=" inline-flex items-center space-x-3"
                    href={"/"}>
                    {" "}
                    <span className="">See my work</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-7">
                <div className="relative">
                  <Image
                    src={item.img}
                    alt={"project" + index}
                    objectFit="fill"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;
