import React from 'react'

type Props = {
  sideNav : string
  list : any[]
}

export const Sidebar = ({sideNav,list} :Props) => {
  return (
    <div className={`absolute w-full h-[200vh] top-[80px] duration-500 bg-cyan-500 ${sideNav}`}>
    <ul className='gap-10'>
        {list.map((item : any) => {
          return(
            <li className={`cursor-pointer text-white text-start duration-500 py-5 px-4 text-[25px] hover:bg-cyan-950 overflow-hidden hover:before:animate-[wiggle_0.6s_cubic-bezier(.95,.36,.11,.65)_1] hover:after:animate-[wiggle1_0.6s_cubic-bezier(.95,.36,.11,.65)_1] relative hover:before:right-0 before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:right-[100%] before:top-0 after:top-0 hover:after:right-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full after:right-[100%]`}>{item.id}</li>
          )
        })}
      </ul>
    </div>
  )
}

