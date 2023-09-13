import React,{useEffect, useState} from 'react'
import {BiLogoJavascript,BiLogoTypescript,BiLogoHtml5,BiLogoCss3,BiLogoJquery,BiLogoReact,BiLogoRedux,BiLogoTailwindCss,BiLogoBootstrap,BiLogoNodejs,BiLogoPhp,BiLogoMongodb,BiLogoFirebase,BiLogoPostgresql,BiLogoGit} from "react-icons/bi"
import {FaLinux} from "react-icons/fa"
import {SiMui} from "react-icons/si"
type Props = {
    showContent: boolean,
    showAfter : boolean
}

export const Skills = ({showContent,showAfter} : Props) => {
    const [rotateArrow,setRotateArrow] = useState<string>("")
    const [count,setCount] = useState<number>(0)
    const headers = ["Frontend","Backend","Database","others"]
    const skills = [
        {
            id : "Frontend",
            tech : "Javascript",
            before : `before:content-['Javascript']`,
            delay : "before:delay-1",
            workedWith : true,
            icon : <BiLogoJavascript size={30}/>
        },
        {
            id : "Frontend",
            tech : "Typescript",
            before : "before:content-['Typescript']",
            delay : "before:delay-2",
            workedWith : true,
            icon : <BiLogoTypescript size={30}/>
        },
        {
            id : "Frontend",
            tech : "HTML",
            before : "before:content-['HTML']",
            delay : "before:delay-3",
            workedWith : true,
            icon : <BiLogoHtml5 size={30}/>
        },
        {
            id : "Frontend",
            tech : "CSS",
            before : "before:content-['CSS']",
            delay : "before:delay-4",
            workedWith : true,
            icon : <BiLogoCss3 size={30}/>
        },
        {
            id : "Frontend",
            tech : "Jquery",
            before : "before:content-['Jquery']",
            delay : "before:delay-5",
            workedWith : true,
            icon : <BiLogoJquery size={30}/>
        },
        { 
            id : "Frontend",
            tech : "React",
            before : "before:content-['React']",
            delay : "before:delay-6",
            workedWith : true,
            icon : <BiLogoReact size={30}/>
        },
        {
            id : "Frontend",
            tech : "Redux",
            before : "before:content-['Redux']",
            delay : "before:delay-7",
            workedWith : true,
            icon : <BiLogoRedux size={30}/>
        },
        {
            id : "Frontend",
            tech : "Tailwind",
            before : "before:content-['Tailwind']",
            delay : "before:delay-8",
            workedWith : true,
            icon : <BiLogoTailwindCss size={30}/>
        },
        {
            id : "Frontend",
            tech : "Bootstrap",
            before : "before:content-['Bootstrap']",
            delay : "before:delay-9",
            workedWith : true,
            icon : <BiLogoBootstrap size={30}/>
        },
        {
            id : "Frontend",
            tech : "Material UI",
            before : "before:content-['Material_UI']",
            delay : "before:delay-10",
            workedWith : false,
            icon : <SiMui size={30}/>
        },
        {
            id : "Backend",
            tech : "Nodejs",
            before : "before:content-['Nodejs']",
            delay : "before:delay-11",
            workedWith : true,
            icon : <BiLogoNodejs size={30}/>
        },
        {
            id : "Backend",
            tech : "PHP",
            before : "before:content-['PHP']",
            delay : "before:delay-12",
            workedWith : false,
            icon : <BiLogoPhp size={30}/>
        },
        {
            id : "Database",
            tech : "MongoDB",
            before : "before:content-['MongoDB']",
            delay : "before:delay-13",
            workedWith : true,
            icon : <BiLogoMongodb size={30}/>
        },
        {
            id : "Database",
            tech : "Firebase",
            before : "before:content-['Firebase']",
            delay : "before:delay-14",
            workedWith : false,
            icon : <BiLogoFirebase size={30}/>
        },
        {
            id : "Database",
            tech : "Postgresql",
            before : "before:content-['Postgresql']",
            delay : "before:delay-15",
            workedWith : true,
            icon : <BiLogoPostgresql size={30}/>
        },
        {
            id : "others",
            tech : "Git",
            before : "before:content-['Git']",
            delay : "before:delay-16",
            workedWith : true,
            icon : <BiLogoGit size={30}/>
        },
        {
            id : "others",
            tech : "Linux",
            before : "before:content-['Linux']",
            delay : "before:delay-17",
            workedWith : false,
            icon : <FaLinux size={30}/>
        },
       
    ]

    // const handleClick = () => {
    //  if(rotateArrow !== ""){
    //     setCount(count => count - 1)
    //     console.log(count)
    //     if(count === 0) setRotateArrow("")
    //  }else{
    //     setCount(count => count + 1)
    //     if(count === headers.length - 1) setRotateArrow("rotate-[180deg]")
    // }
   
    //     setLoading(false)
    //     setTimeout(() => {
    //     setLoading(true)
    //     },1)
    // }

    // useEffect(() => {
    //      setLoading(false)
    //      setTimeout(() => {
    //         setLoading(true)
    //         },100)
    // },[])

  return (
   
       
        <div className='flex gap-5 flex-col'>
        <div className={`w-full`}>
        {/* <span className=' font-semibold mb-3'>what I've worked with</span> */}
        <div className='flex text-white'>
        <span className={`relative ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 before:absolute before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:content-["Skills"] before:text-white before:w-full before:h-full`}><span className='invisible text-[20px]'>Skills</span></span>
        </div>
        <div className={`flex flex-wrap gap-2 mt-3`}>
            {skills.map((skill,index) => {
                    return(
                        <div className='flex justify-center items-center'>
                           
                            </div>
                        )
            })}
        </div>
        </div>
      
        </div>
  )
}
{/* <span className={`${showContent ? `translate-y-0 opacity-1` : "translate-y-10 opacity-0"} bg-[rgba(6,182,212,.18)] duration-500 text-cyan-500 py-[2px] px-2`}> {skill.icon}</span>
<span className={`relative py-[2px] font-bold ${showContent ? `before:top-0 before:opacity-1 ${skill.delay}` : "before:top-[100%] invisible before:opacity-0"} ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0"} before:absolute before:duration-300 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${skill.before} before:text-cyan-500 before:flex before:justify-center before:items-center before:text-center before:bg-[rgba(6,182,212,.18)] before:w-full before:h-full`}><span className='invisible text-[20px]'>
    {skill.tech}
    </span></span> */}
// ${showContent? "before:animate-[wiggle_0.9s_cubic-bezier(.95,.36,.11,.65)_1] after:animate-[wiggle1_1s_cubic-bezier(.95,.36,.11,.65)_1] before:right-0 after:right-0" : "before:right-[100%] after:right-[100%]"} relative before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:top-0 after:top-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full