import React from 'react'

type Props = {
    showContent: boolean,
    showAfter : boolean,
    beforeContent: string,
    content : string,
    beforeNum? : string,
    num? : string
}

export const Header = ({showContent,showAfter,beforeContent,content,beforeNum,num} : Props) => {
  return (
    <div className={`relative flex text-white font-bold gap-3 before:duration-500 after:content-'' after:absolute  after:h-[1px] after:top-[50%] after:right-0 after:bg-[#526D82]  ${showContent ? "after:w-[15%] md:after:w-[50%] lg:after:w-[60%] before:opacity-1" : "before:w-[0%] before:opacity-0"}`}>
        <span className={`relative ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0"} before:absolute before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${beforeNum} before:text-white before:text-[20px] before:w-full before:h-full`}><span className='invisible text-[20px]'>{num}</span></span>
        <span className={`relative ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 before:absolute before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${beforeContent} before:text-white before:w-full before:h-full before:text-[20px] `}><span className='invisible text-[20px]'>{content}</span></span>
    </div>
  )
}
