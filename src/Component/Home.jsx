import React from "react";
import heroImg from "../images/heroImg.png"; 
import profile from "../images/profile.jpeg";
import './home.css'
import ApurvaResume from '../images/ApurvaResume(RPA..).pdf'
import TextChange from "./TextChange";
import profile2 from "../images/profile2.jpeg";






// const resumeUrl = "http://localhost:5175/profile.jpeg.jpeg";

const Home = () => {
 
  return (
    <div className="text-white flex w-full items-center p-10 md:p-15  gap-4 md:flex-col flex-col">
       <div id="imgDiv"className="w-2/4 flex flex-wrap justify-center items-center shadow-inner  ">
        <img src={profile2} alt=""  className="rounded-full shadow-xl" id="image"/>
      </div>
      <div className=" w-full md:w-2/4 md:pt-0  flex-col justify-items-center">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter shadow-xl text-center ">
         <TextChange></TextChange>
        </h1>
        <p className=" mt-1 text-xl md:text-2xl tracking-tight text-center ">
        I'm a front-end software engineer skilled in HTML, CSS, and React.js, focused on building clean, responsive user interfaces. I enjoy turning ideas into seamless digital experiences with performance and usability in mind. Always exploring new tools and trends to stay sharp and creative in the ever-evolving web world
        </p>
         <div className=" flex justify-center items-center  md:flex-row flex-col pb-2"> 
          <div className="">
          <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            <a href="#Footer">Connect me</a>
        </button>
        </div> 
        <div className="px-2">
        <button
          className=" ml-5 mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]" 
        >
         <a href={ApurvaResume} download>Download Resume</a>

        </button>
        </div>
         
      </div>
      
      </div>
     
      <div className=" w- full md:w-2/4  flex flex-wrap gap-10 text-4xl  justify-center items-center" >
     
      <a href="https://www.linkedin.com/in/apurva-singh-279b44258/" className=" hover:text-blue-800 transition-transform duration-300 hover:scale-110">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/Apurva-gaur" className="hover:text-black transition-transform duration-300 hover:scale-110">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="gaur2apurva@gmail.com" className=" hover:text-red-700 transition-transform duration-300 hover:scale-110">
        <i className="fa-regular fa-envelope"></i>
      </a>

      </div>
     
    </div>
  );
};

export default Home;
