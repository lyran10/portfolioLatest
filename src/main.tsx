import React,{useState,useEffect} from 'react'
import { Home } from './components/home/home'
import { About } from './components/about/about'
import { Experience } from './components/experience/experience'
import { Education } from './components/education/education'
import { Projects } from './components/projects/projects'
import { Contact } from './components/contact/contact'
import { Nav } from './components/navbar/nav'
import { Symbol } from './components/symbol/symbol'
import { Linebar } from './components/contact/linebar'

export const Main = () => {
  const [showContent,setShowContent] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(()=> {setShowContent(true)},500)
  },[])

  return (
    <main className='bg-cyan-950 flex justify-center items-center flex-col' style={{fontFamily :"Montserrat"}}>
      {/* <Social showContent={showContent}/> */}
      <Nav/>
      <Home/>
      <About/>
      <Experience/>
      <Education/>
      <Projects/>
      <Symbol/>
      <Contact/>
      <Linebar/>
    </main>
  )
}
