import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const projectData = [
  {
    img: "/images/Clean UI.jpg",
    title: "Clean UI - Portfolio Website",
    tags: ["React JS", "Express JS", "MongoDB", "Tailwind CSS"],
  },
  {
    img: "/images/Pacifico Clone.jpg",
    title: "Pacifico - Startup Website",
    tags: ["React JS", "Express JS", "MongoDB", "Tailwind CSS"],
  },
  {
    img: "/images/Portfolio-Website.jpg",
    title: "UI/UX Designer - Portfolio Website",
    tags: ["React JS", "Express JS", "MongoDB", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <div className="px-6 lg:px-28 py-16">
      <h1 className="text-3xl font-bold pb-16">Passion Projects</h1>
      <div className="grid grid-cols-3 gap-4">
        {projectData.map((item, index) => {
          return (
            <div key={index} className="w-full h-[32rem] border rounded-t-3xl">
              <div className="relative h-full">
                <div className="flex h-1/4 px-4 py-4 flex-col space-y-2">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <div className="flex w-full items-start space-x-2 flex-wrap text-sm">
                    {item.tags.map((item, index) => {
                      return (
                        <div key={index} className="px-3 bg-gray-400 py-1">
                          {item}
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    className=" inline-flex items-center space-x-3"
                    href={"/"}>
                    {" "}
                    <span className="">See my work</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
                <div className="h-3/4 w-full px-0 flex">
                  <Image
                    width={380}
                    src={item.img}
                    height={500}
                    className="h-full w-full object-cover object-top"
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

export default Projects;
