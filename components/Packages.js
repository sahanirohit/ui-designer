import React from "react";
import { useState } from "react";
import {
  FaAngleDown,
  FaCheck,
  FaCheckCircle,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const tabsData = [
  { id: 1, title: "BASIC" },
  { id: 2, title: "STANDARD" },
  { id: 3, title: "PREMIUM" },
];

const packageDetails = [
  {
    id: 1,
    title: "Static web development",
    price: "3,999",
    para: "Single page website development with latest technologies.",
    delivery: 2,
    page: 1,
    checkGreen: "text-green-500",
    checkGray: "text-gray-400",
    startWith: "Start with Basic Package.",
  },
  {
    id: 2,
    title: "Dynamic website development",
    price: "13,999",
    para: "6-7 Pages Website development with latest technologies.",
    delivery: 7,
    page: 7,
    checkGreen: "text-green-500",
    checkGray: "text-gray-400",
    startWith: "Start with Standard Package.",
  },
  {
    id: 3,
    title: "Premium Website Development",
    price: "60,999",
    para: "10-12 Pages Website development with latest technologies.",
    delivery: 21,
    page: 10,
    checkGreen: "text-green-500",
    checkGray: "text-gray-400",
    startWith: "Start with Premium Package.",
  },
];

const Packages = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="pb-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className=""></div>
        <div className="max-w-lg ">
          <div className="grid grid-cols-3 place-content-center border-t-2 border-b-0 text-center">
            {tabsData.map((tab, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-2 bg-gray-100 cursor-pointer border-t-0`}>
                  <h1 className="">{tab.title}</h1>
                </div>
              );
            })}
          </div>
          <div className="h-full">
            {packageDetails.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`py-4 border-2 flex flex-col space-y-8 px-6 border-t-0 inset-0 ${
                    activeTab === item.id ? "" : "hidden"
                  }`}>
                  {/* Package Price */}
                  <div className="sm:text-2xl text-lg font-[poppins] font-semibold w-full flex justify-between">
                    <h1 className="">{item.title}</h1>
                    <h1 className="">₹ {item.price}</h1>
                  </div>
                  {/* Package Short Details */}
                  <div className="">
                    <p className="sm:text-lg text-gray-500">{item.para}</p>
                  </div>
                  {/* Package All Details */}
                  <div className="flex flex-col space-y-4">
                    <div className="flex sm:space-x-6 items-center sm:text-xl">
                      <h2 className="flex items-center space-x-3">
                        <FaClock />
                        <span>{item.delivery} Days Delivery</span>
                      </h2>
                      <h2 className="flex items-center space-x-3">
                        <FaCheckCircle />
                        <span>Unlimited Revision</span>
                      </h2>
                    </div>
                    <div className="flex text-lg sm:text-xl font-semibold items-center w-full justify-between">
                      <h2 className="">What's Included</h2>
                      <FaAngleDown />
                    </div>
                    <div className="sm:text-lg text-base">
                      <h2 className="flex items-center space-x-3 ">
                        <FaCheck className={item.checkGreen} />
                        <span className={item.checkGray}>
                          Functional Website
                        </span>
                      </h2>
                      <h2 className="flex items-center space-x-3 ">
                        <FaCheck className={item.checkGreen} />
                        <span className={item.checkGray}>{item.page} page</span>
                      </h2>
                      <h2 className="flex items-center space-x-3 ">
                        <FaCheck className={item.checkGreen} />
                        <span className={item.checkGray}>Content Upload</span>
                      </h2>
                      <h2 className="flex items-center space-x-3 ">
                        <FaCheck
                          className={
                            activeTab === 3 ? item.checkGreen : item.checkGray
                          }
                        />
                        <span className={item.checkGray}>10 products</span>
                      </h2>
                      <h2 className="flex items-center space-x-3 ">
                        <FaCheck
                          className={
                            activeTab > 1 ? item.checkGreen : item.checkGray
                          }
                        />
                        <span className={item.checkGray}>
                          Speed optimization
                        </span>
                      </h2>
                      <h2 className="flex items-center space-x-3 ">
                        <FaCheck
                          className={
                            activeTab === 3 ? item.checkGreen : item.checkGray
                          }
                        />
                        <span className={item.checkGray}>
                          Payment processing
                        </span>
                      </h2>
                      <h2 className="flex items-center space-x-3 ">
                        <FaCheck className={item.checkGreen} />
                        <span className={item.checkGray}>Hosting Setup</span>
                      </h2>
                      <h2 className="flex items-center space-x-3 ">
                        <FaCheck className={item.checkGreen} />
                        <span className={item.checkGray}>
                          Social Media Icons
                        </span>
                      </h2>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-center">
                    <a
                      href={`http://wa.me/918957912038?text=${
                        activeTab === item.id ? item.startWith : ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <button className="flex items-center justify-center space-x-2 bg-gradient-to-bl hover:from-yellow-400 hover:to-red-600 from-green-400 to-blue-500 font-semibold text-white px-6 py-2">
                        <span>Get in touch</span>
                        <FaWhatsapp />
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
