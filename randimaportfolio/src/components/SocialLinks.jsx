import React from 'react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import {  BsGithub,BsLinkedin ,BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const linking = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <BsLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/hataluli-randima-496824226/",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <BsGithub size={30} />
            </>
          ),
          href: "https://github.com/HataluliRandima",
        },
        // {
        //     id: 3,
        //     child: (
        //       <>
        //         YouTube <BsYoutube size={30} />
        //       </>
        //     ),
        //     href: "https://www.youtube.com/channel/UCmEdkJRZxJmWUeeozMIPIsg",
        //   },
        // {
        //   id: 4,
        //   child: (
        //     <>
        //       Mail <AiOutlineMail size={30} />
        //     </>
        //   ),
        //   href: "mailto:hatalulirandima123@gmail.com",
        //   style: "rounded-br-md",
        // },
        // {
        //   id: 4,
        //   child: (
        //     <>
        //       Resume <BsFillPersonLinesFill size={30} />
        //     </>
        //   ),
        //   href: "/resume.pdf",
        //   style: "rounded-br-md",
        //   download: true,
        // },
      ];

  return (

    <div className="hidden lg:flex   top-[35%] backdrop-blur-2xl fixed">
    <ul>
      {linking.map(({ id, child, href, style, download }) => (
        <li
          key={id}
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500   " +
            " " +
            style
          }
        >
          <a
            href={href}
            className="flex justify-between items-center w-full text-white"
            // download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
      {/* <li>s </li>*/}
      <li className= "flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  pt-4     " > <a
            href=""
            className="flex justify-between items-center w-full text-gray-500"
            
            target="_blank"
            rel="noreferrer"
          >
               Mail <AiOutlineMail size={30} />
          </a></li> 
    </ul>
  </div>
   


  )
}

export default SocialLinks