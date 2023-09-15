import React,{useEffect,useState,useRef} from 'react'
import { Header } from '../header'
import {FaGraduationCap} from "react-icons/fa"
import {BiCodeAlt} from "react-icons/bi"

export const Education = () => {
    const [showContent,setShowContent] = useState<boolean>(false)
    const [showAfter,setShowAfter] = useState<boolean>(false)
    const [responBackground,setResponBackground] = useState<{back1 : boolean,back2 : boolean,back3 : boolean}>({back1 : false,back2 : false,back3 : false})
    const [expCard,setExpCard] = useState<{exp1 : boolean,exp2 : boolean,exp3 : boolean}>({exp1 : false,exp2 : false,exp3 : false}) 
    const [card1,setCard1] = useState<{x : number,y:number}>({x:0,y:0})
    const [card2,setCard2] = useState<{x : number,y:number}>({x:0,y:0})
    const [card3,setCard3] = useState<{x : number,y:number}>({x:0,y:0})
    let count = 100

    const education = [
      {
        id : "edu1",
        background : "back1",
        college : "Hislop College",
        beforeCollege : "before:content-['Hislop_College']",
        country : "Nagpur, India",
        beforeCountry : "before:content-['Nagpur,_India']",
        degree : "Bachelors of Business Administration",
        beforeDegree : "before:content-['Bachelors_of_Business_Administration']",
        date : "2017 - 2019",
        beforeDate : "before:content-['2010_-_2013']",
        icon : <FaGraduationCap size={30}/>,
        card : card1,
        setCard : setCard1
      },
         {
          id : "exp2",
          background : "back2",
        college : "Developers Institute",
        beforeCollege : "before:content-['Developers_Institute']",
        country : "Tel Aviv, Israel",
        beforeCountry : "before:content-['Tel_Aviv,_Israel']",
        degree : "Full Stack Development - Javascript and Python Bootcamp",
        beforeDegree : "before:content-['Full_Stack_Development_-_Javascript_and_Python_Bootcamp']",
        date : "03/2022 - 09/2022",
        beforeDate : "before:content-['03/2022_-_09/2022']",
        icon : <BiCodeAlt size={30}/>,
        card : card2,
        setCard : setCard2
         },
        {
          id : "exp3",
        background : "back3",
        college : "Manipal University - Jaipur, India",
        beforeCollege : "before:content-['Manipal_University']",
        country : "Jaipur, India",
        beforeCountry : "before:content-['Jaipur,_India']",
        degree : "Masters in Computer Application - Expected graduation 2025",
        beforeDegree : "before:content-['Masters_in_Computer_Application_-_Expected_graduation_2025']",
        date : "2023 - 2025",
        beforeDate : "before:content-['2023_-_2025']",
        icon : <FaGraduationCap size={30}/>,
        card : card3,
        setCard : setCard3
      }
    ]

    useEffect(() => {
      const handleScroll = () => {
        const height = window.scrollY
        if(height < 2000){
          setShowContent(false)
          setShowAfter(false)
      }
      if(height > 2000){
        count--
          setTimeout(() => {setShowContent(true)},500)
          setTimeout(() => { setShowAfter(true)},1000)
      }
        
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mouseMove = (e : any,edu : any) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const offsetX = clientX - left - width / 5;
      const offsetY = clientY - top - height / 5;
      const rotateX = offsetY / 10;
    const rotateY = offsetX / 10; 
     edu.setCard({...edu.card, x : rotateX, y : rotateY})
      console.log(window.innerWidth)
    }

    const mouseLeave = () => {
       setCard1({...card1, x : 0, y : 0})
       setCard2({...card2, x : 0, y : 0})
       setCard3({...card3, x : 0, y : 0})
    }
 
  return (
    <section id="education" className='w-full lg:w-[70%] py-10 bg-cyan-950 px-[10px] md:px-[60px] lg:px-[60px] mb-[30px]'>
       <Header showContent={showContent} showAfter={showAfter} beforeContent={"before:content-['Education']"} beforeNum={"before:content-['0.3']"} num={"0.3"} content={"Education"}/>
       <div className={`flex gap-5 md:gap-5  lg:gap-5  justify-center  md:justify-around   lg:justify-around items-center flex-wrap mt-5 relative education`}>
       {/* ${loading.exp1 ? "animate-[exp_1s_cubic-bezier(.95,.36,.11,.65)_1] after:animate-[wiggle1_1s_cubic-bezier(.95,.36,.11,.65)_1] after:right-0" :"after:right-[100%]"} */}
       {education.map((edu,index) => {
        let id = `${edu.id}` as keyof {exp1 : boolean, exp2 : boolean, exp3 :boolean}
        // let background = `${exp.background}` as keyof {back1 : boolean,back2 : boolean,back3 : boolean}
        return(
          <div onMouseMove={(e) => mouseMove(e,edu)} style={{transform : `rotateX(${edu.card.y}deg) rotateY(${edu.card.x}deg)`}} onMouseLeave={mouseLeave} className={`w-[300px] h-[300px] eduCard bg-[rgba(6,182,212,.18)] text-[#f5f5f5] ${showContent ? "opacity-1 translate-y-0"  : "opacity-0 translate-y-10" } duration-500 relative`}>
           <div className='absolute w-full h-full flex flex-col  gap-3 border border-cyan-500 bg-cyan-950 top-2 right-2'>
            <div className='h-[20%] relative mb-3 w-full bg-cyan-500 '>
            <span className={` absolute top-[85%] right-1 bg-[#f5f5f5] px-2 text-center text-cyan-500  ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${edu.beforeDate} before:font-bold before:w-full before:h-full`} ><span className='invisible'>{edu.date}</span></span>
            </div>
            <div className='flex flex-col justify-start items-start w-[90%] m-auto gap-3'>
              <div className='w-[50px] h-[50px] rounded-full bg-[rgba(6,182,212,.18)] flex justify-center items-center'>
              {edu.icon}
              </div>
            <span className={` relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${edu.beforeDegree} before:w-full before:h-full`} ><span className='invisible'>{edu.degree}</span></span>
            <span className={` relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${edu.beforeCollege}  before:w-full before:h-full`} ><span className='invisible'>{edu.college}</span></span>
            <span className={` relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${edu.beforeCountry} before:w-full before:h-full`} ><span className='invisible'>{edu.country}</span></span>
            </div>
          
          </div>
          </div>
      
        )
 })}
</div>
</section>
  )
}

// ${showContent? ` before:animate-[wiggle_0.9s_cubic-bezier(.95,.36,.11,.65)_1] after:animate-[wiggle1_1s_cubic-bezier(.95,.36,.11,.65)_1] before:right-0 after:right-0` : "before:right-[100%] after:right-[100%]"} relative before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:top-0 after:top-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full


{/* <div className={`cardExp flex flex-col ${index % 2 ===0 ? "self-start":"self-end"} w-[100%] text-[#f5f5f5] bg-cyan-950 duration-500 before:text-[#f5f5f5] gap-3 ${expCard[id] ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden"} py-5 bg-cyan-950`}>
<div className='flex gap-3'>
<span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" }  duration-500  before:absolute before:left-0  before:duration-500before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${exp.beforeRole} before:font-bold before:w-full before:h-full`} ><span className='invisible'>{exp.role}</span></span>
<span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${exp.beforeDate} before:font-bold before:w-full before:h-full`} ><span className='invisible'>{exp.date}</span></span>
</div>
<span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${exp.beforeCompany} before:font-bold before:w-full before:h-full`} ><span className='invisible'>{exp.company}</span></span>  */}