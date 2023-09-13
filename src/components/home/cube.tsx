import React,{useEffect,useRef,useState} from 'react'

type Props = {
  mouse : {x:number,y:number}
}

export const Cube = () => {
  const cubeRef = useRef<null | HTMLDivElement>(null)
  const [show,setShow] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {setShow(true)},1000)

  },[])

  // useEffect(() => {

  //   let cube = document.querySelector(".cube")
  //   let frontCube = document.querySelector(".front")
  //   let backCube = document.querySelector(".back")
  //   let leftCube = document.querySelector(".left")
  //   let rightCube = document.querySelector(".right")
  //   let topCube = document.querySelector(".top")
  //   let bottomCube = document.querySelector(".bottom")

  //   const interval = setInterval(() => {
  //     // if(cube instanceof HTMLElement) cube.style.transform = "rotateX(0deg) rotateY(0deg)"
  // //     // slidesPosition(frontCube)
  //     if(frontCube instanceof HTMLElement) {
  //       if(frontCube.style.transform === "translateZ(5rem)") frontCube.style.transform = "translateZ(10rem)"
  //       else frontCube.style.transform = "translateZ(5rem)"
  //     }

  //     if(backCube instanceof HTMLElement) {
  //       if(backCube.style.transform === "translateZ(-5rem)") backCube.style.transform = "translateZ(-15rem)"
  //       else backCube.style.transform = "translateZ(-5rem)"
  //     }

  //     if(leftCube instanceof HTMLElement) {
  //       if(leftCube.style.transform === "translateX(-50%) translateY(2px) rotateY(90deg)") leftCube.style.transform = "translateX(-70%) translateY(2px) rotateY(90deg)"
  //       else leftCube.style.transform = "translateX(-50%) translateY(2px) rotateY(90deg)"
  //     }

  //     if(rightCube instanceof HTMLElement) {
  //       if(rightCube.style.transform === "translateX(50%) rotateY(90deg)") rightCube.style.transform = "translateX(70%) rotateY(90deg)"
  //       else rightCube.style.transform = "translateX(50%) rotateY(90deg)"
  //     }

  //     if(topCube instanceof HTMLElement) {
  //       if(topCube.style.transform === "translateY(-50%) rotateX(90deg)") topCube.style.transform = "translateY(-70%) rotateX(90deg)"
  //       else topCube.style.transform = "translateY(-50%) rotateX(90deg)"
  //     }

  //     if(bottomCube instanceof HTMLElement) {
  //       if(bottomCube.style.transform === "translateY(50%) rotateX(90deg)") bottomCube.style.transform = "translateY(70%) rotateX(90deg)"
  //       else bottomCube.style.transform = "translateY(50%) rotateX(90deg)"
  //     }
  //   },2000) 
  //   return () =>{ clearInterval(interval) } 
  // },[])
  // style={{transform : `rotateX(${mouse.x /25}deg) rotateY(${mouse.y /25 }deg)`}}
  return (
   <section className={`flex w-full lg:w-[50%] justify-center items-center cubeContainer duration-500 ${show ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"}`} >
      <div ref={cubeRef} className={`relative cube h-[150px] w-[150px] animate-[cube_6s_infinite] lg:h-[250px] lg:w-[250px] duration-500`} >
   <div  className='h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] front text-cyan-950 font-bold absolute duration-500 flex justify-center items-center text-[13px] lg:text-[15px] bg-cyan-500 translate-z-[4.8rem] lg:translate-z-[7.8rem]'>Full Stack Developer</div>
   <div className='h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] absolute text-cyan-950 top duration-500 bg-cyan-500 text-[13px] lg:text-[15px]'></div>
   <div className='h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] absolute text-cyan-950 left font-bold duration-500 flex justify-center items-center bg-cyan-500 text-[13px] lg:text-[15px]'>React Developer</div>
   <div className='h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] absolute text-cyan-950 bottom duration-500 bg-cyan-500 text-[13px] lg:text-[15px]'></div>
   <div className='h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] absolute text-cyan-950 font-bold right duration-500 flex justify-center items-center bg-cyan-500 text-[13px] lg:text-[15px]'>Mern Stack Developer</div>
   <div className='h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] absolute text-cyan-950 font-bold back duration-500 flex justify-center items-center bg-cyan-500 text-[13px] lg:text-[15px]'>Frontend Developer</div>
   {/* translate-z-[-4.8rem] lg:translate-z-[-7.8rem] */}
    </div>
  </section>
   
  )
}
