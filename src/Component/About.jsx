import React from "react";
import heroImg from "../images/heroImg.png";
import './About.css'
import { IoArrowForward } from "react-icons/io5";
import Experince from "./Experince";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className=" ">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          About
        </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-20">
          <img className="md:h-80" src={heroImg} alt="About img" />
       

          <ul  >
            <div className="flex gap-3 py-4 ">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-lg leading-tight">
                  I've worked on a variety of projects using HTML, CSS, and
                  React.js — from responsive landing pages to dynamic web apps.
                  Each project focuses on clean UI, smooth user interactions,
                  and performance. React helps me build reusable components and
                  manage complex states efficiently, while CSS brings the design
                  to life with animations and responsiveness
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-lg leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-lg leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
