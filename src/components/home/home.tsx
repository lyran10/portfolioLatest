import React,{useEffect,useState} from 'react'
import { Nav } from '../navbar/nav'
import { Cube } from './cube'
import { DLbutton } from './DLbutton'
import player from "./soccer-player.png"
import {TbPlayFootball} from "react-icons/tb"

export const Home= () => {
  const [showContent,setShowContent] = useState<boolean>(false)
  const [showAfter,setShowAfter] = useState<boolean>(false)
  const [mouse,setMouse] = useState({x:0,y:0})

  const handleMouseMove = (e : any) => {
    const x = e.clientX;
    const y = e.clientY;
    setMouse({x,y})
  };

  useEffect(() => {
    setTimeout(() => {setShowContent(true)},1000)
    setTimeout(() => { setShowAfter(true)},2000) 
  },[])

  return (
    <div id="home" className={`h-screen w-full lg:w-[70%] bg-cyan-950 mb-[30px]`}>
      <div className=' bg-cyan-950 flex flex-col relative justify-center items-center gap-[50px] lg:gap-0 lg:flex-row h-[85%] translate-y-[80px] text-[50px]' onMouseMove={handleMouseMove} >
        <div className='w-full lg:w-[50%] text-white flex flex-col gap-5 justify-center duration-500 items-center'>
          <div className='flex lg:justify-start lg:items-start md:justify-center md:items-center justify-center items-center gap-0 flex-col'>
          <span className={`relative ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 before:absolute before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:content-["Hi,"] before:text-white before:w-full before:h-full before:text-[35px] md:before:text-[45px] lg:before:text-[45px]`}><span className='invisible text-[35px] md:text-[45px] lg:text-[45px]'>Hi,</span></span>

          <span className={`relative ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 before:absolute after:left-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:content-["I_am_Liran_Ramekar"] before:text-white before:w-full before:text-[35px] md:before:text-[45px] lg:before:text-[45px] before:h-full`}>
           <span className='invisible text-[35px] md:text-[45px] lg:text-[45px]'>I am Liran Ramekar</span>
            </span>
            <DLbutton showContent={showContent}/>
          </div>
          </div>
        <div className='w-[50%] text-white flex justify-center items-center'>
          <Cube/>
        </div>
      </div>
    </div>
  )
}
