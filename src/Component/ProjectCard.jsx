import React from "react";
import heroImg from "../images/heroImg.png"; 
import "./Projects.css"
import "./Global.css"

import youtube from "../images/youtube2.png"

const ProjectCard = ({ title, main,Demo }) => {
  return (
    <div  id="cardDiv" className="p-3 md:p-6 flex flex-col w-96 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-300 hover:scale-105">
      <img className="p-4" src={heroImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href={Demo}>Demo</a>
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        <a href="https://youtubeclone-apurva.netlify.app/">source code</a>

        </button>
      </div>
    </div>
  );
};

export default ProjectCard;