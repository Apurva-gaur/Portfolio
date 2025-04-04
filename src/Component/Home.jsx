import React from "react";
import heroImg from "../images/heroImg.png"; // Adjust the path accordingly
import profile from "../images/profile.jpeg"; // Adjust the path accordingly
import './home.css'




// const resumeUrl = "http://localhost:5175/profile.jpeg.jpeg";

const Home = () => {
 
  return (
    <div className="text-white flex w-full items-center p-10 md:p-15  gap-4 md:flex-col flex-col">
       <div id="imgDiv"className="w-2/4 flex flex-wrap justify-center items-center shadow-inner  ">
        <img src={profile} alt=""  className="rounded-full shadow-xl" id="image"/>
      </div>
      <div className=" w-full md:w-2/4 md:pt-0  flex-col justify-items-center">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter shadow-xl text-center ">
          Hello! I am Apurva Singh
        </h1>
        <p className=" mt-1 text-xl md:text-2xl tracking-tight text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          doloremque?
        </p>
         <div className="border-2 border-orange-600 flex justify-center items-center md:flex-row flex-col">  
          <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        <button
          className=" ml-5 mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]" 
        >
         <a href={heroImg} download>Download Resume</a>

        </button></div>
      
      </div>
     
      <div className=" w- full md:w-2/4  flex flex-wrap gap-10 text-4xl  justify-center items-center" >
     
      <a href="#" className=" hover:text-blue-800 transition-transform duration-300 hover:scale-110">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="#" className="hover:text-black transition-transform duration-300 hover:scale-110">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="#" className=" hover:text-red-700 transition-transform duration-300 hover:scale-110">
        <i className="fa-regular fa-envelope"></i>
      </a>

      </div>
     
    </div>
  );
};

export default Home;
