import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { hata} from "../assets/use";
import {TbBrandAngular} from "react-icons/tb"

const Myprojects = () => {


    const projects = [
        {
            id:1,
            image:hata,
            title: "Service Plug",
            github:"github",
            demo:"demo",
        },
        {
            id:2,
            image:hata,
            title: "Service Plug",
            github:"github",
            demo:"demo",
        },
        {
            id:3,
            image:hata,
            title: "Service Plug",
            github:"github",
            demo:"demo",
        },
        {
            id:4,
            image:hata,
            title: "Service Plug",
            github:"github",
            demo:"demo",
        },
        {
            id:5,
            image:hata,
            title: "Service Plug",
            github:"github",
            demo:"demo",
        },
        {
            id:6,
            image:hata,
            title: "Service Plug",
            github:"github",
            demo:"demo",
        },
    ];


  return (
    <div  name="projectsss"
    className="   
     border-b-black bg-slate-500  md:h-screen ">
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
            
            <div className="grid gap-8 lg:gap-14 lg:grid-cols-3
            bg-gradient-to-r from-bodyColor to-[#202327]   hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900  ">
           
                   {projects.map (({ id, image,title,github,demo }) => (

                        <div key={id} className="max-w-lg flex flex-col   shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
                          
                          <div className="w-full h-[80%] overflow-hidden rounded-lg">
      <img
        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={image}
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
            rel="noreferrer"><FiYoutube/></a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              {/* <FaGlobe /> */}
              <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer"><FiYoutube/></a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              {/* <FiYoutube /> */}
              <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer"><FiYoutube/></a>
              
            </span>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          hreherh tu6ruyhjtru tdyuyjduyu
        </p>
         <br></br>
         <div className="flex items-center justify-between">
        <h2 className="text-base uppercase text-designColor font-normal">
            Tech Used : 
          </h2>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href="https://github.com/HataluliRandima"  target="_blank"
            rel="noreferrer"><FiYoutube/></a>
            </span>
             
            </div>
             
          </div>

      </div>
    </div>

                          </div>
                   ) )}

            </div>
            </div> 
  )
}

export default Myprojects