import React from "react";

import DemoCard from "./DemoCard.jsx";



const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
        <div   className="md:text-center sm:text-start"><h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1></div>
      
      <div className="py-12  px-0 pl-0 flex flex-wrap gap-4 ">
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
        title="Blogging Website"
        main="this is a bloggin website created in next js and used some component library used some component library"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
        <DemoCard
        title="Blogging Website"
        main="this is a bloggin website created in next js and used some component library used some component library"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
         <DemoCard
        title="Blogging Website"
        main="this is a bloggin website created in next js and used some component library used some component library"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
         <DemoCard
        title="Blogging Website"
        main="this is a bloggin website created in next js and used some component library used some component library"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
          <DemoCard
        title="Blogging Website"
        main="this is a bloggin website created in next js and used some component library used some component library"
        Demo="https://youtubeclone-apurva.netlify.app/"></DemoCard>
      </div>
      
    </div>
  );
};

export default Projects;