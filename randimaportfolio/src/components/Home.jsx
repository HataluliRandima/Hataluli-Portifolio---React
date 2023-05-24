import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-white"
  >
    {/* bg-gradient-to-b from-white via-black to-gray-800 */}
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-lg   tracking-wide text-black">Hi, my name is</h2>
        <h2 className="text-4xl sm:text-7xl font-bold nline border-b-4 border-gray-500 text-black">
          Hataluli Randima
        </h2>
        <p className="text-gray-500 py-4 max-w-md font-medium">
          I have 8 years of experience building and desgining software.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next JS and GraphQL.
        </p>
        <h1 className="text-white py-4 max-w-md font-medium">def</h1>
        <div>
          <h1>def</h1>
        </div>
      </div>

      <div>
        
      </div>
      
   
    </div>

  </div>
  )
}

export default Home