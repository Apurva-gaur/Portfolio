import React from 'react'
import "./Global.css"

function Experince() {
  return (
//     <div class=" py-20 px-4 sm:px-6 lg:px-20 w-2/5 ">
//     <div class="max-w-4xl mx-auto text-white">
//       <h2 class="text-4xl font-bold text-center mb-12">Experience</h2>
  
//       <div class="bg-[#111322] border border-white/10 rounded-2xl p-8 shadow-xl">
//         <div class="relative pl-6 border-l-2 border-gray-700 space-y-10">
  
//           {/* <!-- Experience 1 --> */}
//           <div class="relative">
//             <span class="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-1">
//               <img src="https://logo.clearbit.com/w3villa.com" class="rounded-full bg-white w-full h-full object-cover" alt="W3villa" />
//             </span>
//             <div class="ml-4">
//               <h3 class="text-xl font-semibold">Web Developer Intern</h3>
//               <p class="text-sm text-gray-400">W3villa Technologies • Jan 2024 – Mar 2024</p>
//               <ul class="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
//                 <li>Built responsive UI with React & Tailwind CSS.</li>
//                 <li>Optimized SEO and performance.</li>
//                 <li>Integrated REST APIs and improved UX.</li>
//               </ul>
//             </div>
//           </div>
  
  
  
//         </div>
//       </div>
//     </div>
//   </div>
// {/* <div class="bg-[#0c0e19] py-20 px-4 md:mx-20 mt-16"> */}
<div id="experinceDiv" class="bg-[#0c0e19] py-12 px-4 sm:px-6 lg:px-8 sm:mx-0 md:mx-20 lg:mx-20 mt-16 text-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-20">

      {/* Experience Card */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Experience</h2>
        <div className="bg-[#1a1c2b] rounded-2xl p-8 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-6 min-h-[250px]">
          <img
            src="https://logo.clearbit.com/w3villa.com"
            alt="W3villa"
            className="w-[5rem] h-[5rem] rounded-full border-2 border-white object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold">Web Developer Intern</h3>
            <p className="text-base text-gray-400 mb-2">W3villa Technologies • Jan 2024 – Mar 2024</p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2">
              <li>Developed responsive UI with React and Tailwind.</li>
              <li>Boosted performance and accessibility scores.</li>
              <li>Used Git for version control and Agile methodology.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Card */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Education</h2>
        <div className="bg-[#1a1c2b] rounded-2xl p-8 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-6 min-h-[250px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/AKTU_Logo.png"
            alt="AKTU"
            className="w-[5rem] h-[5rem] rounded-full border-2 border-white object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold">Masters in Computer Application</h3>
            <p className="text-base text-gray-400 mb-2">AKTU • 2020 – 2024</p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2">
              <li>Focused on web and full-stack development.</li>
              <li>Projects in React, Node.js, and MongoDB.</li>
              <li>CGPA: 8.4 / 10</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>







  
  )
}

export default Experince