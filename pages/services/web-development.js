import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Contact from "../../components/Contact";

const projectShowcase = [
  { img: "/images/teacher-portfolio.jpg" },
  { img: "/images/Plant Shop.jpg" },
];

const webDevelopment = () => {
  return (
    <div className="px-6 lg:px-28">
      <div className="w-full items-center justify-center flex text-center flex-col space-y-2 h-[70vh]">
        <h1 className="text-8xl font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
          Online Business
        </h1>
        <h1 className="text-8xl font-[roboto-serif] font-black bg-clip-text bg-gradient-to-bl from-green-400 text-transparent to-blue-500">
          is the future.
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-4xl max-w-2xl font-bold font-[roboto-serif]">
          I build sites that turn visitors into your customers.
        </h1>
        <p className="font-[poppins] max-w-2xl">
          As a designer who doubles as a Webflow expert, I build (or adapt) your
          designs into high performing, pixel-perfect landing pages to save you
          time and cost. I understand what it takes to reach your business
          goal—from designs to the technical bits.
        </p>
      </div>

      {/* Showcase */}
      <div className="py-16">
        <h1 className="text-4xl font-bold font-[poppins] pb-8">Showcase</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          {projectShowcase.map((item, index) => {
            return (
              <div className="h-96 border" key={index}>
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Let's discuss */}
      <Contact />
      <div className="py-8"></div>
    </div>
  );
};

export default webDevelopment;
