import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const projectData = [
  {
    img: "/images/Clean UI.jpg",
    title: "Clean UI - Portfolio Website",
  },
  {
    img: "/images/Pacifico Clone.jpg",
    title: "Pacifico - Startup Website",
  },
  {
    img: "/images/Portfolio-Website.jpg",
    title: "UI/UX - Portfolio Website",
  },
];

const Projects = () => {
  return (
    <div className="px-6 lg:px-0 py-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold pb-16">Passion Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((item, index) => {
          return (
            <div key={index} className="w-full border">
              <div className="relative h-full flex flex-col">
                <div className="flex px-4 py-4 flex-col space-y-2">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <Link
                    className=" inline-flex items-center space-x-3"
                    href={"/"}>
                    {" "}
                    <span className="">See my work</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
                <div className="w-full flex-1 px-0">
                  <img
                    src={item.img}
                    alt="project"
                    className="object-cover w-full h-full p-2"
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
