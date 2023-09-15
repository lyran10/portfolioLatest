import React,{useState,useEffect} from 'react'
import {FaStarOfDavid} from "react-icons/fa"
import symbol from "../navbar/symbol.png"

export const Symbol = () => {
    const [intersection,setIntersection] = useState<number>(0)
    let htmlElement = document.documentElement


    const scroll = () => {
        const symbol = document.querySelector(".symbol")
        if(symbol){
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scale = (scrollPosition / totalHeight) * 100;
            console.log(Math.min(100, Math.max(1, scale)))
            if(Math.round(Math.min(100, Math.max(1, scale))) > 60){
                document.documentElement.style.setProperty('--symbol', `${Math.round(Math.min(100, Math.max(1, scale)))}`);
            }

            if(Math.round(Math.min(100, Math.max(1, scale))) > 90){
                document.documentElement.style.setProperty('--positive', `${Math.round(Math.min(100, Math.max(1, scale)))}`);
                document.documentElement.style.setProperty('--negative', `${Math.round(Math.min(100, Math.max(1, scale)))}`);
            }
          }
        
        }
    
      useEffect(() => {
        window.addEventListener("scroll",scroll)
        return () => window.removeEventListener('scroll', scroll);
      },[])
  return (
    <div className='flex justify-center flex-col items-center w-full lg:w-[100%]'>
    <div className='m-auto text-[10px] flex justify-center h-[100px] items-center'>
         <div className='positive hidden md:flex lg:flex relative mr-5 text-[#f5f5f5] text-[20px] md:text-[30px] lg:text-[30px] duration-500 py-1 px-2 before:absolute before:hidden before:content-"" before:h-[1px] before:w-[50%] before:bg-[#526D82] before:right-[110%] before:top-[55%] '>Ever Positive</div>
         <div className='symbol mr-12 md:mr-0 lg:mr-0 w-[100px] h-[100px]'>
          <img className='w-full h-full rounded-full' src={symbol} alt="" />
         </div>
        <div className='negative hidden md:flex lg:flex relative ml-5 text-[#f5f5f5] duration-500 py-1 px-2 before:absolute before:content-"" before:h-[1px] before:w-[50%] before:bg-[#526D82] before:hidden before:left-[110%] before:top-[55%] text-[20px] md:text-[30px] lg:text-[30px]'>Never Negative</div>
    </div>
    <div className='flex md:hidden lg:hidden '>
    <div className='positive  relative mr-5 text-[#f5f5f5] text-[17px] md:text-[30px] lg:text-[30px] duration-500 py-1 px-2 before:absolute before:hidden before:content-"" before:h-[1px] before:w-[50%] before:bg-[#526D82] before:right-[110%] before:top-[55%] '>Ever Positive</div>
    <div className='negative relative ml-5 text-[#f5f5f5] duration-500 py-1 px-2 before:absolute before:content-"" before:h-[1px] before:w-[50%] before:bg-[#526D82] before:hidden before:left-[110%] before:top-[55%] text-[17px] md:text-[30px] lg:text-[30px]'>Never Negative</div>
    </div>
    </div>
  )
}
