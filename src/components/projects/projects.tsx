import React,{useEffect,useState,useRef} from 'react'
import { Header } from '../header'
import crypto from "./crypto.png"
import boloforms from "./boloforms.png"
import student from "./student.png"

export const Projects = () => {
    const [showContent,setShowContent] = useState<boolean>(false)
    const [showAfter,setShowAfter] = useState<boolean>(false)
    const [responBackground,setResponBackground] = useState<{back1 : boolean,back2 : boolean,back3 : boolean}>({back1 : false,back2 : false,back3 : false})
     const [expCard,setExpCard] = useState<{exp1 : boolean,exp2 : boolean,exp3 : boolean}>({exp1 : false,exp2 : false,exp3 : false})
    let count = 100

    const projects = [
      {
        id : "pro1",
        background : "back1",
        project : "Landing Page(BoloForms)",
        beforeProject : "before:content-['Landing_Page(BoloForms)']",
        image : boloforms,
        projectOverview : "Great styling, colors and functionality. Created using HTML,CSS,React-Typescript,Tailwind.",
        beforProjectOverview : "before:content-['Great_styling,_colors_and_functionality._Created_using_HTML,_CSS,_React-Typescript,_Tailwind.']"
      },
      {
        id : "pro2",
        background : "back2",
        project : "Student Management",
        beforeProject : "before:content-['Student_Management']",
        image : student,
        projectOverview : "Users can store all the info of a student in the database. Created using HTML ,CSS, React, Material UI, Firebase for auth and store data(firestore).",
        beforProjectOverview : "before:content-['Users_can_store_all_the_info_of_a_student_in_the_database._Created_using_HTML_,CSS,_React_Material_UI,_Firebase_for_auth_and_store_data(firestore).']"
      },
      {
        id : "pro3",
        background : "back3",
        project : "Crypto Currency Tracker",
        beforeProject : "before:content-['Crypto_Currency_Tracker']",
        image : crypto,
        projectOverview : "Users can get all the info about a crypto currency and can also keep a track on it by storing it in the watch list. Created using HTML, CSS, React-Typescript, Tailwind,MongoDB, Node.js, Express, JWT tokens.",
        beforProjectOverview : "before:content-['Users_can_get_all_the_info_about_a_crypto_currency_and_can_also_keep_a_track_on_it_by_storing_it_in_the_watch_list._Created_using_HTML,_CSS,_React-Typescript,_Tailwind,_MongoDB,_Node.js,_Express,_JWT_tokens.']"
      },
    ]

    useEffect(() => {
      const handleScroll = () => {
        const height = window.scrollY
        if(height < 2600){
          setShowContent(false)
          setShowAfter(false)
      }
      if(height > 2600){
        count--
          setTimeout(() => {setShowContent(true)},500)
          setTimeout(() => { setShowAfter(true)},1000)
      }
        
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCilck = (background : keyof {back1 :boolean,back2 :boolean,back3 :boolean},card : keyof {exp1 :boolean,exp2 :boolean,exp3 :boolean}) => {
      setExpCard({...expCard,[card] : !expCard[card] ? true : false})
      setTimeout(() => {setResponBackground({...responBackground,[background] : !responBackground[background] ? true : false})},170)

    }
 
  return (
    <section className='w-full lg:w-[70%] py-10 bg-cyan-950 px-[60px] mb-[80px]'>
       <Header showContent={showContent} showAfter={showAfter} beforeContent={"before:content-['Projects']"} beforeNum={"before:content-['0.4']"} num={"0.4"} content={"Projects"}/>
      
       <div className='flex mt-3 flex-wrap gap-10 flex-col items-center w-full'>
       {
        projects.map((pro,index) => {
            return(
              <div className={`relative w-full gap-5 lg:gap-0 md:gap-0 flex-col md:flex-row lg:flex-row flex justify-center items-center before:content-"" before:absolute before:w-[30%] mt-5 md:mt-0 lg:mt-0 before:lg:w-[0%] before:md:w-[0%] before:h-[1px] before:bg-[#526D82] before:top-[110%] before:left-0`}>
                <div className='w-[100%] md:w-[50%] lg:w-[50%] px-0 md:px-5 lg:px-5 h-full flex justify-center items-center text-[#f5f5f5]'>
                  <div className='w-full flex flex-col gap-3'>
                  <span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${pro.beforeProject} before:font-bold before:w-full before:h-full`} ><span className='invisible'>{pro.project}</span></span>
                  <div className='flex flex-col'>
                  <span className={`relative w-full ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:content-['Over_View'] before:font-bold before:w-full before:h-full`} ><span className='invisible'>Over View</span></span>
                  <span className={`relative w-full ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${pro.beforProjectOverview} before:w-full before:h-full`} ><span className='invisible'>{pro.projectOverview}</span></span>
                  </div>
                  <div className='flex gap-3 overflow-hidden'>
                    <button className={`overflow-hidden py-1 px-2 font-bold bg-cyan-500 ease-[cubic-bezier(.52,-0.32,.39,1.49)] text-cyan-950 duration-500 ${showContent ? "translate-y-0" : "translate-y-11"} hover:before:animate-[wiggle_0.6s_cubic-bezier(.95,.36,.11,.65)_1] hover:after:animate-[wiggle1_0.6s_cubic-bezier(.95,.36,.11,.65)_1] relative hover:before:right-0 before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:right-[100%] before:top-0 after:top-0 hover:after:right-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full after:right-[100%]`}>Github</button>
                    <button className={`overflow-hidden py-1 px-2 font-bold bg-cyan-500 ease-[cubic-bezier(.52,-0.32,.39,1.49)] text-cyan-950 duration-500 ${showContent ? "translate-y-0" : "translate-y-11"} hover:before:animate-[wiggle_0.6s_cubic-bezier(.95,.36,.11,.65)_1] hover:after:animate-[wiggle1_0.6s_cubic-bezier(.95,.36,.11,.65)_1] relative hover:before:right-0 before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:right-[100%] before:top-0 after:top-0 hover:after:right-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full after:right-[100%]`}>Deployed</button>
                  </div>
                  </div>
                
                </div>
                <div className='w-[100%] md:w-[50%] lg:w-[50%] overflow-hidden h-full flex justify-center items-center bg-center bg-cover bg-no-repeat'>
                  <img className={`duration-500 ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${showContent ? "translate-y-0" : "translate-y-[250px]"}`} src={pro.image} alt="" />
                </div>
              </div>
            )
        })
      }
       </div>
    </section>
  )
}