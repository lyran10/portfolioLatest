import React,{useEffect,useState} from 'react'
import { Content } from './content';
import { Image } from './image';
import { Header } from '../header';
import { Skills } from './skills';

export const About = () => {
  const roles = [{
    content : "Full Stack Developer",
    before : "before:content-['Full_Stack_Developer']"
  },
  {
    content : "React js Developer",
    before : "before:content-['React_Developer']"
  },
  {
    content : "MERN Stack Developer",
    before : "before:content-['MERN_Stack_Developer']"
  }
]
    let htmlElement = document.documentElement
    const [showContent,setShowContent] = useState<boolean>(false)
    const [showAfter,setShowAfter] = useState<boolean>(false)
    const [id,setId] = useState<string>(roles[0].content)
    const [intersection,setIntersection] = useState<number>(0)
    const [opacity,setOpacity] = useState<number>(0)
    let count1 = 0
    let count = 100
   
    useEffect(() => {
      if(showContent){
         const interval = setInterval(() => {
          if(count1 === roles.length) count1 = 0
          else{
            setId(roles[count1].content)
            count1++
          }
        },1500)
         
         return () => clearInterval(interval)
      }
    },[showContent])

    useEffect(() => {
        const handleScroll = () => {
          const height = window.scrollY
          if(height < 180){
            setShowContent(false)
            setShowAfter(false)
        }
        if(height > 180){
          count--
            setTimeout(() => {setShowContent(true)},500)
            setTimeout(() => { setShowAfter(true)},1000)
        }
          
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const scroll = () => {
        
        if(htmlElement){
          const percentOfScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight
          let intersection =  Math.min(percentOfScreenHeightScroll * 100,100)
          setIntersection(intersection)
        }

        const content = document.querySelector('.image');

        if(content){
          const scrollY = window.scrollY || window.pageYOffset;
          const contentHeight = content.clientHeight;
          const windowHeight = window.innerHeight;
          const opacity = 1 - (scrollY / (contentHeight - windowHeight));
          setOpacity(opacity)
        }
      }
    
      useEffect(() => {
        window.addEventListener("scroll",scroll)
        return () => window.removeEventListener('scroll', scroll);
      },[])

  return (
    <div className={`aboutMe w-full lg:w-[70%] py-10 px-[60px] bg-cyan-950 text-white mb-[80px]`}>
         <Header showContent={showContent} showAfter={showAfter} beforeContent={"before:content-['About_me']"} beforeNum={"before:content-['0.1']"} num={"0.1"} content={"About me"}/>
         <Image opacity={opacity} intersection={intersection}/>
      <div className=''>
        
          <Content showContent={showContent}/>
          <div className='w-[100%] m-auto flex flex-col gap-5 mt-10 mb-10'>
          <Skills showContent={showContent} showAfter={showAfter}/>
          </div>
          
      </div>
    </div>
  )
}
