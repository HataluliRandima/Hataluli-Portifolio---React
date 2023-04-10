 import React from 'react';
 import {FaBars, FaTimes} from 'react-icons/fa';

 
 
 const NavBar = () => {

  //creating an array of links
  const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'skills'
    },
    {
        id: 4,
        link: 'projects'
    },
    {
        id: 5,
        link: 'experience'
    },
    {
        id: 6,
        link: 'contact'
    },
 
  ]


   return (
     <div className="flex justify-between items-center w-full h-20
      px-4 text-white bg-black fixed"> 
        
        <div>
            <h1 className="text-5xl font-signature ml-2">Hataluli</h1>
        </div>

         <ul className="flex">
            <li>Home</li>
         </ul>
        
     </div>
   )
 }
 
 export default NavBar