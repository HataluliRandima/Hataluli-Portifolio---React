import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import {
 
  FaFacebook,
  FaTwitch,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const [sticky, setSticky] = useState(false);

  //creating an array of links
  const linkss = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "education",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "projects",
    },
    // {
    //   id: 6,
    //   link: "experience",
    // },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20
      px-4 text-white bg-gray-900 fixed"
    >
      <div>
        <h1 className="text-4xl font-signature ml-2">Hataluli</h1>
      </div>

      <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
        {/* using my array to give li instead of naming it down */}
      <ul className="hidden md:flex">

       

        {linkss.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
          >
            <Link activeClass="active" to={link} smooth duration={500}> 
            
            {link}
            
            </Link>
            
          </li>
        ))}
         
      </ul>
         </div>


         


          {/* Making it being responsiveness to cater mobile devices */}
      
      
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        
      </div>

      {nav && (
        <ul
          className="md:hidden flex flex-col justify-center items-center
absolute top-0 left-0 w-full h-screen   bg-gray-800 text-gray-500
"
        >
          {linkss.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl "
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}> 
            
            {link}
            
            </Link>
           
            </li>
          ))}
           <div className="grid grid-cols-2 mx-auto w-4/5 gap-10  ">
            <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer hover:rounded-md bg-gray-950">
              <FaFacebook size={25} />
            </div>
            <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer  hover:rounded-md bg-gray-950">
              <FaTwitter size={25} />
            </div>
            <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer hover:rounded-md bg-gray-950">
              <FaLinkedinIn size={25} />
            </div>
            <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer  hover:rounded-md bg-gray-950">
              <FaTwitch size={25} />
            </div>
          </div>
        </ul>
        
           )}

           {/* <div className="md:hidden">
            <h1>Hello</h1>
           </div> */}
    </div>
    
  );
};

export default NavBar;
