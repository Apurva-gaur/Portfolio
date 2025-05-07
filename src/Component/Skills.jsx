export default function Skills() {
    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
    ];
  
    return (
      // <section className="bg-[#0c0e19] py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-white mt-16 md:mx-20 rounded-lg">
      //   <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
      //     My Skills
      //   </h2>
      //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
      //     {skills.map((skill, index) => (
      //       <div
      //         key={index}
      //         className="bg-[#1a1d2d] text-white px-6 py-3 rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:bg-[#2a2d40] cursor-pointer text-center w-full max-w-[150px]"
      //       >
      //         {skill}
      //       </div>
      //     ))}
      //   </div>
      // </section>
      <div class="bg-[#0c0e19] py-12 px-4 sm:px-6 lg:px-8 mx-20 mt-16">
  <div class="max-w-7xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-white mb-10">My Skills</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

      <div class="bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out p-6 rounded-2xl text-white text-center shadow-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" class="w-12 h-12 mx-auto mb-4"/>
        <p class="text-sm font-medium">HTML</p>
      </div>
      <div class="bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out p-6 rounded-2xl text-white text-center shadow-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" class="w-12 h-12 mx-auto mb-4"/>
        <p class="text-sm font-medium">CSS</p>
      </div>
      <div class="bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out p-6 rounded-2xl text-white text-center shadow-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-12 h-12 mx-auto mb-4"/>
        <p class="text-sm font-medium">JavaScript</p>
      </div>
      <div class="bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out p-6 rounded-2xl text-white text-center shadow-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-12 h-12 mx-auto mb-4"/>
        <p class="text-sm font-medium">React</p>
      </div>
{/* 
      <!-- New Skills --> */}
      <div class="bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out p-6 rounded-2xl text-white text-center shadow-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" class="w-12 h-12 mx-auto mb-4"/>
        <p class="text-sm font-medium">Java</p>
      </div>
      <div class="bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out p-6 rounded-2xl text-white text-center shadow-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" class="w-12 h-12 mx-auto mb-4"/>
        <p class="text-sm font-medium">SQL</p>
      </div>
      <div class="bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out p-6 rounded-2xl text-white text-center shadow-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" class="w-12 h-12 mx-auto mb-4"/>
        <p class="text-sm font-medium">Bootstrap</p>
      </div>
      <div class="bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out p-6 rounded-2xl text-white text-center shadow-lg">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-12 h-12 mx-auto mb-4"/>
        <p class="text-sm font-medium">Tailwind CSS</p>
      </div>

    </div>
  </div>
</div>


    );
  }
  