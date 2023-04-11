import React from 'react'
import Card from './Card'
import { hata} from "../assets/use";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi"

const Projects = () => {
  return (
    <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black bg-gradient-to-b from-white via-black to-gray-800"
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14  ">
      <Card
        title="SOCIAL MEDIA CLONE"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!ytfuyfguyfduyfytufuiyfytfduy  8  g8g9 g8"
        src={hata}
        icon={
            <BsGithub/>
             

        }
        icon1={
             
            <FaGlobe/>

        }
        icon2={
           
            <FiYoutube/>

        }
      />
      <Card
        title="E-commerce Website"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={hata}
      />
      <Card
        title="Chatting App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={hata}
      />
       {/*<Card
        title="SOCIAL MEDIA CLONE"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={hata}
      />
      <Card
        title="E-commerce Website"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={hata}
      />
      <Card
        title="Chatting App"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={hata}
      /> */}
    </div>
  </section>
  )
}

export default Projects