import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  //creating an array of links
  const links = [
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
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20
      px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="text-4xl font-signature ml-2">Hataluli</h1>
      </div>


        {/* using my array to give li instead of naming it down */}
      <ul className="hidden md:flex">

       

        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 nav-link"
          >
            {link}
          </li>
        ))}
      </ul>

          {/* Making it being responsiveness to cater mobile devices */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center
absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
from-black to-gray-800 text-gray-500
"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl "
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
