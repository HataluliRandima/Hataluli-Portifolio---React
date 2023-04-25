import React from 'react'

const pro = () => {
  return (
    <div
    // id="projects"
    name="projects"
    className="w-full py-20 border-b-[1px] border-b-black bg-slate-500  md:h-screen"
  >
{/* bg-gradient-to-b from-white via-black to-gray-800 */}

    <div className="flex justify-center items-center text-center">
      {/* <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      /> */}
        <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
      VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </h3>
      <h1 className="text-4xl md:text-5xl text-black-300 font-bold capitalize">My Projects</h1>
    </div>
    </div>
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
    <div className="grid gap-8 lg:gap-14 lg:grid-cols-3">

    <div className="w-full h-[80%] overflow-hidden rounded-lg">
      <img
        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src="{src}"
        alt="src"
      />
    </div>
    <div className="w-full mt-5 flex flex-col  gap-6 text-white">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
           juyju
          </h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer">uu</a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              {/* <FaGlobe /> */}
              <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer">yy</a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              {/* <FiYoutube /> */}
              <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer">yy</a>
              
            </span>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
        thgthrt
        </p>
         <br></br>
         <div className="flex items-center justify-between">
        <h2 className="text-base uppercase text-designColor font-normal">
            Tech Used : 
          </h2>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer">hh</a>
            </span>
             
            </div>
             
          </div>

      </div>
    </div>
    </div>
    </div>

  </div>
  )
}

export default pro