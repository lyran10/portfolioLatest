import React,{useState,useEffect} from 'react'
import {FaStarOfDavid} from "react-icons/fa"

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
    <div className='flex justify-center items-center w-full lg:w-[70%]'>
    <div className='m-auto hidden md:flex lg:flex justify-center mb-[80px] h-[100px] items-center'>
         <div className='positive relative mr-5 text-[#f5f5f5] text-[30px] duration-500 py-1 px-2 before:absolute before:content-"" before:h-[1px] before:w-[50%] before:bg-[#526D82] before:right-[110%] before:top-[55%]'>Ever Positive</div>
         <div className='symbol overflow-hidden rounded-full w-[100px] h-[100px] relative before:duration-500 before:absolute before:content-"" before:bg-cyan-500 before:w-full before:h-full before:rounded-full'></div>
        <div className='negative relative ml-5 text-[#f5f5f5] text-[30px] duration-500 py-1 px-2 before:absolute before:content-"" before:h-[1px] before:w-[50%] before:bg-[#526D82] before:left-[110%] before:top-[55%]'>Never Negative</div>
    </div>
    </div>
  )
}
