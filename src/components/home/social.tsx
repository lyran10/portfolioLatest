import React,{useState,useEffect} from 'react'
import {FaLinkedinIn,FaInstagram,FaFacebookF,FaGithub} from "react-icons/fa"

type Props = {
    showContent : boolean
}

export const Social = ({showContent} : Props) => {
    const [position,setPosition] = useState<boolean>(false)
    const icons = [
    {
        icon : <FaLinkedinIn className={`shadow-sideBarShadow ${position ? `fixed top-[100%] bottom-0 left-[15%]` : "fixed top-[75%] right-8 bottom-8 left-8"} delay-[0.1s] duration-100 group-hover:scale-75 text-cyan-500`} size={20}/>,
        content : "LinkedIn",
        translate : "translate-x-[400px]"
    },
    {
        icon : <FaInstagram className={`shadow-sideBarShadow ${position ? `fixed top-[100%] bottom-0 left-[15%]` : "fixed top-[80%] right-8 bottom-8 left-8 "} delay-[0.2s] duration-100 group-hover:scale-75 text-cyan-500`} size={20}/>,
        content : "Instagram",
        translate : "translate-x-[300px]"
    },
    {
        icon : <FaFacebookF className={`shadow-sideBarShadow ${position ? `fixed top-[100%] bottom-0 left-[15%]` : "fixed top-[85%] right-8 bottom-8 left-8 "} delay-[0.3s] duration-100 group-hover:scale-75 text-cyan-500`} size={20}/>,
        content : "Facebook",
        translate : "translate-x-[200px]"
    },
    {
        icon : <FaGithub className={`shadow-sideBarShadow ${position ? `fixed top-[100%] bottom-0 left-[15%]` : "fixed top-[90%] right-8 bottom-8 left-8 "} delay-[0.4s] duration-100 group-hover:scale-75 text-cyan-500`} size={20}/>,
        content : "Github",
        translate : "translate-x-[100px]"
    },
]

useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY
      if(height < 3200){
        setPosition(false)
    }
    if(height > 3200){
    setPosition(true)
    }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section className='flex gap-3 flex-col w-0 justify-end duration-500 items-end fixed top-[75%] right-5 z-[500] '>
        {
            icons.map((item) => {
                return(
                    <a className={` ${showContent ? `` : ``} text-cyan-500 py-1 px-2 flex items-center cursor-pointer`}>
                    <span className=''>{item.icon}</span>
                   </a>
                )
            })
        }
    </section>
  )
}
