import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi"

const Card = ({ title, des, src , icon,icon1,icon2 }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
    <div className="w-full h-[80%] overflow-hidden rounded-lg">
      <img
        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={src}
        alt="src"
      />
    </div>
    <div className="w-full mt-5 flex flex-col  gap-6 text-white">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer">{icon}</a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              {/* <FaGlobe /> */}
              <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer">{icon1}</a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              {/* <FiYoutube /> */}
              <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer">{icon2}</a>
              
            </span>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Card