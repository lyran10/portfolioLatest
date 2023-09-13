import React,{useState} from 'react'
import { ContextState } from '../../context/context'
import { Context } from 'vm'

type Props = {
  handleNav? : () => void
}

export const Button = ({handleNav} : Props) => {
  const {arrow} = ContextState() as Context;
  const [move,setMove] = useState<string>("translate-y-[50vh] translate-x-[80vh] text-[100px]")

  return (
    <div className='mr-10'>
         <div onClick={handleNav} className='cursor-pointer duration-500 rounded-full flex justify-center items-center flex-col h-[40px] w-[40px]'>
        <div className={`w-8 h-[1px] bg-cyan-500 ${arrow.arrow1} duration-200 ${move === "translate-y-0 translate-x-0" ? "bg-cyan-200" : ""} `}></div>
        <div className={`h-[1px] bg-cyan-500 ${move === "translate-y-0 translate-x-0" ? "bg-cyan-200" : ""} duration-200 ${arrow.arrow2}`}></div>
        <div className={`w-8 h-[1px]  bg-cyan-500 ${arrow.arrow3} duration-200 ${move === "translate-y-0 translate-x-0" ? "bg-cyan-200" : ""}`}></div>
      </div>
    </div>
  )
}
