import React,{useEffect,useState,useRef} from 'react'
import { Header } from '../header'
import { Social } from '../home/social'
import {FaLinkedinIn,FaInstagram,FaFacebookF,FaGithub} from "react-icons/fa"
import {BiSolidPhoneCall,BiLogoGmail} from "react-icons/bi"
import { Symbol } from '../symbol/symbol'
import photo from "./liran.jpg"
import { Linebar } from './linebar'

export const Contact = () => {
  const height = window.scrollY
    const [showContent,setShowContent] = useState<boolean>(false)
    const [showAfter,setShowAfter] = useState<boolean>(false)
    const [position,setPosition] = useState<boolean>(false)
    let count = 100

  const labelIcons = [
    {
        icon : <FaLinkedinIn className={`shadow-sideBarShadow text-cyan-500 text-[15px] md:text-[15px] lg:text-[15px]`}/>,
        content : "LinkedIn",
        translate : "translate-x-[400px]",
        beforeContent : "before:content-['LinkedIn']",
        href : "https://www.linkedin.com/in/liran-ramekar-398163217/"
    },
    {
        icon : <FaInstagram className={`shadow-sideBarShadow text-cyan-500 text-[15px] md:text-[15px] lg:text-[15px]`}/>,
        content : "Instagram",
        translate : "translate-x-[300px]",
        beforeContent : "before:content-['Instagram']",
        href : "https://www.instagram.com/liranimmanuel/"
    },
    {
        icon : <FaFacebookF className={`shadow-sideBarShadow text-cyan-500 text-[15px] md:text-[15px] lg:text-[15px]`}/>,
        content : "Facebook",
        translate : "translate-x-[200px]",
        beforeContent : "before:content-['Facebook']",
        href : "https://www.facebook.com/liran.immanuel"
    },
    {
        icon : <FaGithub className={`shadow-sideBarShadow text-cyan-500 text-[15px] md:text-[15px] lg:text-[15px]`}/>,
        content : "Github",
        translate : "translate-x-[100px]",
        beforeContent : "before:content-['Github']",
        href : "https://github.com/lyran10"
    },
]

    useEffect(() => {
      const handleScroll = () => {
        const height = window.scrollY
        if(height < 3300){
          setShowContent(false)
          setShowAfter(false)
          setPosition(false)
      }
      if(height > 3300){
        count--
                  setPosition(true)
          setTimeout(() => {setShowContent(true)},500)
          setTimeout(() => { setShowAfter(true)},1000)
      }
        
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [height]);

  return (
    <section id="contact" className='w-full lg:w-[70%] flex flex-col py-10 bg-cyan-950 px-[10px] md:px-[60px] lg:px-[60px]'>
       <Header showContent={showContent} showAfter={showAfter} beforeContent={"before:content-['Contact_Me']"} beforeNum={"before:content-['0.5']"} num={"0.5"} content={"Contact Me"}/>
       <div className='w-full flex flex-col'>
       <Symbol/>
       <div className='w-full mt-10 gap-10 flex flex-col md:flex-row lg:flex-row'>
       <div className='w-full md:w-[50%] lg:w-[50%] flex justify-start gap-3 flex-col items-start'>
       <span className={`relative text-[#f5f5f5] text-[20px] md:text-[15px] lg:text-[15px] ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:content-["Feel_free_to_get_in_touch_if_you_have_any_questions._I'd_love_to_hear_from_you!"] before:w-full before:h-full before:text-[20px] md:before:text-[15px] lg:before:text-[15px]`} ><span className='invisible'>Feel free to get in touch if you have any questions. I'd love to hear from you!</span></span>
       <div className='flex gap-3'>
        <BiSolidPhoneCall size={25} className='text-cyan-500'/>
       <span className={`relative text-[#f5f5f5] mt-[1px] ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:content-["0536652453"] before:w-full before:h-full`} ><span className='invisible'>0536652453</span></span>
       </div>
       <div className='flex gap-3'>
        <BiLogoGmail size={25} className='text-cyan-500'/>
        <span className={`relative text-[#f5f5f5] mt-[3px] ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:content-["liranramekar7@gmail.com"] before:w-full before:h-full`} ><span className='invisible'>liranramekar7@gmail.com</span></span>
       </div>
       <div className={`flex gap-3 flex-wrap mt-5 justify-start items-center duration-500`}>
       {
            labelIcons.map((item) => {
    
          return(
            <a href={item.href} className={` ${showContent ? `opacity-1` : `opacity-0`} bg-[rgba(6,182,212,.18)] text-cyan-500 py-1 px-2 flex items-center cursor-pointer gap-1`}>
           <span className=''>{item.icon}</span>
           <span className={`relative font-bold ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0"} before:absolute before:duration-300 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${item.beforeContent} before:text-cyan-500 before:mt-[1px] before:flex before:justify-center before:items-center before:text-center before:w-full before:h-full before:text-[12px] md:before:text-[15px] lg:before:text-[15px]`}><span className='invisible text-[12px] md:text-[15px] lg:text-[15px]'>{item.content}</span></span> 
          </a>
        )     
            })
        }
       </div>
      
        {/* <div className='w-[150px] h-[150px] rounded-full relative border-8 border-cyan-500'>
        <img src={photo} className='rounded-full' alt="" />
        </div> */}
       </div>
       <form className={`flex flex-col w-full md:w-[50%] lg:w-[50%] duration-500 gap-5 ${showContent ? "translate-y-0 opacity-1" : "translate-y-[50px] opacity-0" }`}>
       <span className='text-[#f5f5f5] relative text-[20px] before:content-"" before:absolute before-w-[30%] before:h-[1px] before:bg-cyan-500'>Get In Touch</span>
        <input className='p-2 border-b border-cyan-500 bg-cyan-950 outline-none text-[#f5f5f5]' placeholder='Email' type="email" />
        <input className='p-2 border-b border-cyan-500 bg-cyan-950 outline-none text-[#f5f5f5]' placeholder='Subject' type="text" />
        <textarea className='p-2 border-b border-cyan-500 bg-cyan-950 outline-none text-[#f5f5f5]' placeholder='Message' cols={50} rows={4}></textarea>
        <button className='overflow-hidden py-1 px-2 bg-cyan-500 text-cyan-950 w-[100px] font-bold hover:before:animate-[wiggle_0.6s_cubic-bezier(.95,.36,.11,.65)_1] hover:after:animate-[wiggle1_0.6s_cubic-bezier(.95,.36,.11,.65)_1] relative hover:before:right-0 before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:right-[100%] before:top-0 after:top-0 hover:after:right-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full after:right-[100%]'>Send</button>
       </form>
       </div>
       </div>
</section>
  )
}