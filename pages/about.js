import React from "react";
import { FaArrowLeft, FaArrowRight, FaBezierCurve } from "react-icons/fa";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const About = () => {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
  });
  return (
    <div className="px-6 py-16 bg-orange-50 lg:px-28">
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
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          easing: "ease",
          gap: "1rem",
          autoWidth: true,
        }}
        hasTrack={false}
        aria-label="Placeholder Example">
        <div className="py-16 grid grid-cols-4">
          <div className="">
            <h2 className="text-pink-500">SERVICES</h2>
            <h1 className="text-4xl font-bold">
              I Provide Wide Range Of Digital Services
            </h1>
            <div className="splide__arrows">
              <button className="w-10 splide__arrow splide__arrow--prev h-10 rounded-full flex items-center justify-center text-gray-600 bg-gray-400">
                {/* <FaArrowLeft /> */}Prev
              </button>
              <button className="w-10 h-10 splide__arrow splide__arrow--next rounded-full flex items-center justify-center text-white bg-pink-400">
                {/* <FaArrowRight /> */}Next
              </button>
            </div>
          </div>
          <div className="col-span-3 w-full flex overflow-hidden gap-4">
            <SplideTrack>
              <SplideSlide>
                <div className="min-w-[384] max-w-sm">
                  <div className="bg-white py-12 flex flex-col space-y-5 items-center justify-center text-center px-4">
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
                      <FaBezierCurve className="text-4xl text-white" />
                    </div>
                    <h1 className="text-2xl font-bold">UI/UX Design</h1>
                    <p className="text-gray-400">
                      From the initial design to the final development stage,
                      your dedicated team of specialists.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="min-w-[384] max-w-sm">
                  <div className="bg-white py-12 flex flex-col space-y-5 items-center justify-center text-center px-4">
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
                      <FaBezierCurve className="text-4xl text-white" />
                    </div>
                    <h1 className="text-2xl font-bold">UI/UX Design</h1>
                    <p className="text-gray-400">
                      From the initial design to the final development stage,
                      your dedicated team of specialists.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="min-w-[384] max-w-sm">
                  <div className="bg-white py-12 flex flex-col space-y-5 items-center justify-center text-center px-4">
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
                      <FaBezierCurve className="text-4xl text-white" />
                    </div>
                    <h1 className="text-2xl font-bold">UI/UX Design</h1>
                    <p className="text-gray-400">
                      From the initial design to the final development stage,
                      your dedicated team of specialists.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              {/* {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <div key={index} className="">
                    <SplideSlide>
                      <div className="min-w-[384]">
                        <div className="bg-white py-12 flex flex-col space-y-5 items-center justify-center text-center px-4">
                          <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
                            <FaBezierCurve className="text-4xl text-white" />
                          </div>
                          <h1 className="text-2xl font-bold">UI/UX Design</h1>
                          <p className="text-gray-400">
                            From the initial design to the final development
                            stage, your dedicated team of specialists.
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                  </div>
                );
              })} */}
            </SplideTrack>

            {/* <div className="min-w-[384]">
            <div className="bg-white py-12 flex flex-col space-y-5 items-center justify-center text-center px-4">
              <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
                <FaBezierCurve className="text-4xl text-white" />
              </div>
              <h1 className="text-2xl font-bold">UI/UX Design</h1>
              <p className="text-gray-400">
                From the initial design to the final development stage, your
                dedicated team of specialists.
              </p>
            </div>
          </div> */}
          </div>
        </div>
      </Splide>
    </div>
  );
};

export default About;
