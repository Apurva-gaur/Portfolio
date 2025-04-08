import { useState } from 'react'
import Navbar from './Component/Navbar'
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
import Projects from './Component/Projects'
import ContactMe from './Component/ContactMe'
import Skills from './Component/Skills'
import Experince from './Component/Experince'
import TestimonialSlider from './Component/TestimonialSlider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
        <Navbar></Navbar>
        <Home/>
        <About/>
        <Skills/>
        <Experince/>
        <Projects />
        <TestimonialSlider/>
        <ContactMe/>
         </div>
    </>
  )
}

export default App
