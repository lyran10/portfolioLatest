import React, { useEffect,useState } from 'react'
import {FaLinkedinIn,FaInstagram,FaFacebookF,FaGithub} from "react-icons/fa"
import image from "./liran3.png"

type Props = {
  intersection :number,
  opacity : number
}

export const Image = ({intersection,opacity} : Props) => {
  let count = 0
      const handleScroll = () => {
      if(intersection > 40){
        document.documentElement.style.setProperty('--left', `${intersection}`);
        // document.documentElement.style.setProperty('--opacity', `${opacity}`);
      }
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[intersection,opacity])
  // before:absolute before:duration-300 after:duration-300 before:content-"" before:w-[10%] before:h-[1px] before:bg-[#526D82] before:left-[70%] md:before:left-[50%] lg:before:left-[50%] after:absolute after:content-"" after:right-[70%] md:after:right-[50%] lg:after:right-[50%] after:w-[10%] after:h-[1px] after:bg-[#526D82]
  return (
    // bg-[rgba(6,182,212,.18)]
    <div className={`imageContainer mt-[50px] flex flex-col overflow-hidden relative justify-center gap-1 items-center p-3 `} >
      <div className='flex gap-2 justify-center items-center'>
      {/* <div className='triangle'></div> */}
      <a href='https://www.linkedin.com/in/liran-ramekar-398163217/' className={`icon ${intersection > 90 ? "opacity-1 -translate-y-0" : "opacity-0 -translate-y-5"} w-[30px] h-[0px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px]  rounded-full duration-500 text-cyan-500 scale-75 flex gap-2 cursor-pointer justify-center items-center  hover:-translate-y-2 hover:scale-100`}><FaLinkedinIn size={20}/></a>
      <a href='https://www.instagram.com/liranimmanuel/' className={`icon ${intersection > 90 ? "opacity-1 translate-y-0" : "opacity-0 -translate-y-5"} w-[30px] h-[0px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px]  rounded-full duration-500 text-cyan-500 scale-90 flex gap-2 cursor-pointer justify-center items-center  hover:-translate-y-2 hover:scale-100`}><FaInstagram size={30}/></a>
      <div className='image w-[150px] h-[150px] rounded-full duration-500 bg-cyan-500 flex gap-2 justify-center items-center'>
        <img className='w-[147px] h-[147px] rounded-full' src={image} alt="" />
      </div>
      <a href='https://www.facebook.com/liran.immanuel' className={`icon ${intersection > 90 ? "opacity-1 translate-y-0" : "opacity-0 -translate-y-5"} w-[30px] h-[0px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px]  rounded-full duration-500 text-cyan-500 scale-90 flex gap-2 cursor-pointer justify-center items-center  hover:-translate-y-2 hover:scale-100`}><FaFacebookF size={30}/></a>
      <a href='https://github.com/lyran10' className={`icon ${intersection > 90 ? "opacity-1 -translate-y-0" : "opacity-0 -translate-y-5"} w-[30px] h-[0px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] rounded-full duration-500 text-cyan-500 scale-75 flex gap-2 cursor-pointer justify-center items-center  hover:-translate-y-2 hover:scale-100`}><FaGithub size={20}/></a>
      </div>
      {/* <div className='symbolLeft w-[100%] relative h-[5px] duration-500 bg-cyan-500 before:content-"" before:absolute before:w-[10px] before:h-[20px] before:-top-2 before:rotate-45 before:bg-cyan-950'></div>
      <div className='symbolRight w-[100%] h-[5px] duration-500 bg-cyan-500 before:content-"" before:absolute before:w-[10px] before:h-[20px] before:-top-2 before:rotate-45 before:bg-cyan-950 before:right-0'></div> */}
    </div>
  )
}
