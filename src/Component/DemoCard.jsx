import React from 'react'
import  './DemoCard.css'
import "./Global.css"
import "./Projects.css"

import hero from "../images/code.jpg"; 



function DemoCard({title,Demo,main,gitlink}) {
  return (
   <>
   {/* p-3 md:p-6 */}
   {/* className="p-4" */}
    <div  id="image-container" className=" flex flex-col w-96 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-300 hover:scale-105">
         <img  src={hero} alt="" />
         <div className="projectTitle">
         <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
           {title}
         </h3>
         </div>
         <div className="info">
         
         <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
         {/* updated code */}
         <div className="mt-8 p-2 md:p-4 flex gap-4  items-center justify-center">
  {/* Demo Link */}
  <a
    href={Demo}
    target="_blank"
    rel="noopener noreferrer"
    className="md:mt-10 text-white p-3 rounded-full  hover:opacity-85 hover:scale-110 transition-transform "
  >
  <i className="fas fa-link text-3xl md:text-3xl"></i>
  </a>

  {/* GitHub Link */}
  <a
    href={gitlink}
    rel="noopener noreferrer"
    className="md:mt-10 text-white p-3 rounded-full  hover:opacity-85 hover:scale-110 transition-transform "
  >
    <i className="fab fa-github text-lg md:text-3xl"></i>
  </a>
</div>


        

         </div>

         {/* previous button */}
         <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
           <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
             <a href={Demo}>Demo</a>
           </button>
           <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
           <a href="https://youtubeclone-apurva.netlify.app/">source code</a>
   
           </button>
         </div>
        
       </div>
   </>
  )
}

export default DemoCard