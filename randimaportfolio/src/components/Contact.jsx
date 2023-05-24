import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp }  from "react-icons/bs";

const Contact = () => {
  
    const contact_info = [
        { child: (
            <>
              LinkedIn <HiOutlineMail size={30} />
            </>
          ), text: "codeaprogram@gmail.com" },
        { logo: "logo-whatsapp", text: "123 456 780" },

        
        {
          logo: "location",
          text: "demo location",
        },
      ];
      return (
        <div id="contact" className=" py-10 px-3 text-white bg-gray-900">
          <div className="text-center mt-8">
            <h3 className="text-4xl font-semibold">
              Contact <span className="text-gray-600">Me</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
    
            <div
              className="mt-16 flex md:flex-row flex-col
             gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
            >
              <form action="https://getform.io/f/e18370be-f1c2-424e-83cc-543c755ae18a" className="flex flex-col flex-1 gap-5" method="POST">
                <input type="text" name="name" placeholder="Your Name" />
                <input type="Email" name="email" placeholder="Your Email Address" />
                <textarea placeholder="Your Message" name="message" rows={10}></textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center 
                rounded-md hover:scale-110 duration-300">Send Message</button>
              </form>
              <div className="flex flex-col  gap-7 ">
                 
                  <div
                    
                    className="flex flex-row  
                      text-left gap-4 flex-wrap items-center"
                  >
                    <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-gray-600 rounded-full">
                      <ion-icon  ><HiOutlineMail size={30}  /></ion-icon>
                    </div>
                    <p className="md:text-base text-sm  break-words">
                      hatalulirandima123@gmail.com
                    </p>
                  </div>
               

                  <div
                   
                    className="flex flex-row  
                      text-left gap-4 flex-wrap items-center"
                  >
                    <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-gray-600 rounded-full">
                      <ion-icon ><BsWhatsapp size={30} /></ion-icon>
                    </div>
                    <p className="md:text-base text-sm  break-words">
                    072 794 1660
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Contact