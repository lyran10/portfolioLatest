import React from 'react'
import {BsArrowRight} from "react-icons/bs"

type Props = {
  showContent : boolean
}

export const DLbutton = ({showContent} : Props) => {
  return (
    <button className={`text-[15px] w-[200px] relative font-bold group py-2 px-3 flex justify-center gap-5 items-center text-cyan-950 bg-cyan-500 mt-5 duration-500 ${showContent ? "translate-y-0 opacity-1" : " translate-y-10 opacity-0"} overflow-hidden hover:before:animate-[wiggle_0.6s_cubic-bezier(.95,.36,.11,.65)_1] hover:after:animate-[wiggle1_0.6s_cubic-bezier(.95,.36,.11,.65)_1] relative hover:before:right-0 before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:right-[100%] before:top-0 after:top-0 hover:after:right-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full after:right-[100%]`}>
      Download CV
      <BsArrowRight className=''/>
    </button>
  )
}
