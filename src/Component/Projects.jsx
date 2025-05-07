import React from "react";

import DemoCard from "./DemoCard.jsx";
import "./Global.css"
import "./Projects.css";



const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
        <div   className="md:text-center sm:text-start"><h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1></div>
      
      <div id="outerDiv" className="py-12  px-0 pl-0 flex flex-wrap gap-4">
        {/* <ProjectCard
          title="Blogging Website"
          main="this is a bloggin website created in next js and used some component library used some component library"
          Demo="https://youtubeclone-apurva.netlify.app/"
        />
        <ProjectCard
          title="Youtue Clone"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />
         <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        /> */}
        <DemoCard
        title="Youtube clone"
        main="Built a YouTube Clone using React, Node.js, and RapidAPI to fetch and display video content with search and playback functionality"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
        <DemoCard
        title="portfolio"
        main="this is a bloggin website created in next js and used some component library used some component library"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
         <DemoCard
        title="ecommerce"
        main="An e-commerce web app built with React.js and Context API for state management, featuring product listings, a shopping cart, and responsive design"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
         <DemoCard
        title="chrome extension"
        main="A Chrome Pomodoro Extension with start, stop, and reset timer features to help manage focus sessions efficiently"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
          <DemoCard
        title="todo list"
        main="A simple To-Do List app built with React.js, allowing users to add, edit, and delete tasks with a clean and responsive interface"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
      </div>
      
    </div>
  );
};

export default Projects;