import React,{useEffect, useState} from 'react'
import {BiLogoJavascript,BiLogoTypescript,BiLogoHtml5,BiLogoCss3,BiLogoJquery,BiLogoReact,BiLogoRedux,BiLogoTailwindCss,BiLogoBootstrap,BiLogoNodejs,BiLogoPhp,BiLogoMongodb,BiLogoFirebase,BiLogoPostgresql,BiLogoGit} from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"
import {FaLinux} from "react-icons/fa"
import {SiMui} from "react-icons/si"
import {FaLaptopCode,FaDatabase,FaCogs,FaIdCard} from "react-icons/fa"
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
            icon : <FaLaptopCode className='text-[50px]'/>,
            technologies : [
                {
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
            ]
           
        },
        {
            id : "Backend",
            icon : <FaCogs className='text-[50px]'/>,
            technologies : [
                {
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
            ]
            
        },
       
        {
            id : "Database",
            icon : <FaDatabase className='text-[50px]'/>,
            technologies : [
                {
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
            ]
           
        },
      
        {
            id : "others",
            icon : <FaIdCard className='text-[50px]'/>,
            technologies : [
                {
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

           
        }
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
        <span className={`relative ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 before:absolute before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:content-["Skills"] before:text-white before:w-full before:h-full after:absolute after:content-"" after:bg-cyan-500 after:w-full after:h-[1px] after:top-[100%] after:left-0`}><span className='invisible text-[20px]'>Skills</span></span>
        </div>
        <div className={`flex flex-wrap w-full gap-8 md:gap-5 lg:gap-5 justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start mt-3`}>
        {/* overflow-hidden hover:before:animate-[wiggle_0.6s_cubic-bezier(.95,.36,.11,.65)_1] hover:after:animate-[wiggle1_0.6s_cubic-bezier(.95,.36,.11,.65)_1] relative hover:before:right-0 before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:right-[100%] before:top-0 after:top-0 hover:after:right-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full after:right-[100%] */}
            {skills.map((skill,index) => {
                    return(
                        <div key={index} className='flex justify-center overflow-hidden z-[1] py-2 px-2 flex-col group md:flex-row lg:flex-row items-center h-full w-full gap-3 relative after:absolute after:content-"" after:bg-cyan-500 after:w-full after:h-full after:z-[-1] hover:after:right-0 after:right-[100%] after:duration-500'>
                            <div className='w-full h-full md:w-[30%] lg:w-[20%] flex justify-start items-start'>
                                <div className={`flex flex-col w-full md:w-[50%] lg:w-[50%] ${showContent ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"} duration-500`}>
                                {skill.icon}
                                <span>{skill.id}</span>
                                </div>
                                <BsArrowRight className='m-auto hidden md:flex lg:flex text-center cursor-pointer -translate-x-5 opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 duration-500'/>
                                </div>
                            <div className='w-full md:w-[70%] lg:w-[80%] flex justify-start items-start flex-wrap gap-3'>
                                {
                                    skill.technologies.map((tech) => {
                                        return(
                                            <>
                                        <span className={`relative py-[2px] z-[1] font-bold ${showContent ? `before:top-0 before:opacity-1 ` : "before:top-[100%] invisible before:opacity-0"} ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0"} before:absolute before:duration-300 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${tech.before} before:text-cyan-500 before:flex before:justify-center before:items-center before:text-center before:bg-[rgba(6,182,212,.18)] before:w-full before:h-full group-hover:before:text-[#f5f5f5]`}><span className='invisible text-[20px]'>
                                            {tech.tech}
                                            </span></span>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        )
            })}
        </div>
        </div>
      
        </div>
  )
}


{/* <span className={`${showContent ? `translate-y-0 opacity-1` : "translate-y-10 opacity-0"} bg-[rgba(6,182,212,.18)] duration-500 text-cyan-500 py-[2px] px-2`}> {tech.icon}</span> */}

// ${showContent? "before:animate-[wiggle_0.9s_cubic-bezier(.95,.36,.11,.65)_1] after:animate-[wiggle1_1s_cubic-bezier(.95,.36,.11,.65)_1] before:right-0 after:right-0" : "before:right-[100%] after:right-[100%]"} relative before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:top-0 after:top-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full