import React,{useState,useEffect} from 'react'
import { Button } from './button'
import { Sidebar } from './sidebar';
import { ContextState } from '../../context/context'
import { Context } from 'vm';
import symbol from "./symbol.png"


export const Nav = () => {
  const {showItems,setShowItems,arrow,setArrow} = ContextState() as Context;
  const [sideNav,setSideNav] = useState<string>("-translate-x-[2000px]")
  const [showNav,setShowNav] = useState<string>("translate-y-0")
const list = [
  {
  id : "Home",
  content : 'before:content-["Home"]',
  link : "#home"
},
{
  id : "About Me",
  content : 'before:content-["About_me"]',
  link : "#about"
},
{
  id : "Projects",
  content :'before:content-["Projects"]',
  link : "#projects"
},
{
  id : "Experience",
  content :'before:content-["Experience"]',
  link : "#experience"
},
{
  id : "Education",
  content :'before:content-["Education"]',
  link : "#education"
},
{
  id : "Contact",
  content :'before:content-["Contact"]',
  link : "#contact"
},
,]

const [prev, setPrev] = useState<number>(0);

// Function to handle scroll event
const handleScroll = () => {
  if (window.scrollY < prev) {
      console.log("up")
      setShowNav("translate-y-0")
  }
  else {
      console.log("down")
      setShowNav("-translate-y-[100px]")
  }
  setPrev(window.scrollY)
};

useEffect(() => {
  // Attach the scroll event listener when the component mounts
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [prev]);

const handleNav = () => {
  if(arrow.arrow1 === "-translate-y-2"){
    setArrow({arrow1 : "-rotate-[33deg] -translate-y-2",arrow2 : "rotate-[90deg] translate-x-[14px] w-[36px]",arrow3 : "rotate-[33deg] translate-y-2"})
    setShowItems("translate-x-6")
  }else{
    setArrow({arrow1 : "-translate-y-2",arrow2 : "w-8",arrow3 : "translate-y-2 "})
    setShowItems("translate-x-0")
  }
}

const handleSideNav = () => {
  if(arrow.arrow1 === "-translate-y-2"){
    setArrow({arrow1 : "-rotate-[33deg] -translate-y-2",arrow2 : "rotate-[90deg] translate-x-[14px] w-[36px]",arrow3 : "rotate-[33deg] translate-y-2"})
    setSideNav("-translate-x-0")
  }else{
    setArrow({arrow1 : "-translate-y-2",arrow2 : "w-8",arrow3 : "translate-y-2 "})
    setSideNav("-translate-x-[2000px]")
  }
}
// ${arrow.arrow1 === "-rotate-[33deg] -translate-y-2" ? "bg-cyan-950":"bg-transparent"}
  return (
    <nav style={{fontFamily :"Montserrat"}} className={`h-[80px] ${showNav} top-0 w-full fixed z-[2000] flex justify-between duration-500 items-center bg-cyan-950`}>
      <div className='text-cyan-500 ml-10 text-[20px] w-[60px] h-[60px] flex justify-center items-center rounded-full'>
        <img className='w-[60px] h-[60px] rounded-full' src={symbol} alt="" />
      </div>
      <ul className='gap-10 hidden lg:flex'>
        {list.map((item : any) => {
          return(
            <li>
            <a href={item.link} className={`cursor-pointer text-center px-2 flex justify-center items-center text-white ${arrow.arrow1 === "-rotate-[33deg] -translate-y-2" ? "before:top-0 before:opacity-1": "before:top-[100%] invisible before:opacity-0"} relative ${item.content} before:text-white before:absolute before:w-full before-h-full before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)]`}><span className='invisible'>{item.id}</span></a>
            </li>
          )
        })}
      </ul>
      <Sidebar handleSideNav={handleSideNav} sideNav={sideNav} list={list}/>
      <div  className='hidden lg:flex'>
      <Button handleNav={handleNav}/>
      </div>
      <div className='flex lg:hidden'>
      <Button handleNav={handleSideNav}/>
      </div>
    </nav>
  )
}
