import React,{useEffect,useState,useRef} from 'react'
import { Header } from '../header'
import {IoIosCheckmarkCircle} from "react-icons/io"

export const Experience = () => {
    const [showContent,setShowContent] = useState<boolean>(false)
    const [showAfter,setShowAfter] = useState<boolean>(false)
    const [responBackground,setResponBackground] = useState<{back1 : boolean,back2 : boolean,back3 : boolean}>({back1 : false,back2 : false,back3 : false})
     const [expCard,setExpCard] = useState<{exp1 : boolean,exp2 : boolean,exp3 : boolean}>({exp1 : false,exp2 : false,exp3 : false})
    let count = 100

    const experience = [
      {
        id : "exp1",
        background : "back1",
        company : "Gallagher Service LLP - Pune, India",
        beforeCompany : "before:content-['Gallagher_Service_LLP___-_Pune,_India']",
        role : "Process Analyst",
        beforeRole : "before:content-['Process_Analyst']",
        roleOverview : "Process analyst with a proven track record of optimizing operational workflows and enhancing efficiency. Skilled in analyzing complex processes, identifying bottlenecks, and implementing data-driven solutions for continuous improvement.",
        beforeRoleOverview : "before:content-['Process_analyst_with_a_proven_track_record_of_optimizing_operational_workflows_and_enhancing_efficiency._Skilled_in_analyzing_complex_processes,_identifying_bottlenecks,_and_implementing_data-driven_solutions_for_continuous_improvement.']",
        date : "2017 - 2019",
        beforeDate : "before:content-['2017_-_2019']",
        responsibilities :[
            {
              content : "Verify documents of clients if the claim is valid.",
              beforeContent :"before:content-['Verify_documents_of_clients_if_the_claim_is_valid.']",
              beforeIndex :"before:content-['1']",
            },
            {
                content : "Renew policies.",
                beforeContent :  "before:content-['Renew_policies.']",
                beforeIndex :"before:content-['2']",
            },
            {
              content :"Collect and enter financial data such as premium and tax.",
              beforeContent : "before:content-['Collect_and_enter_financial_data_such_as_premium_and_tax.']",
              beforeIndex :"before:content-['3']",
            },
            {
            content : "Reply to clients emails and if needed answer calls.",
            beforeContent : "before:content-['Maintain_and_communicate_the_updates_with_the_team.']",
            beforeIndex :"before:content-['4']",
            }
        ] 
      },
         {
          id : "exp2",
          background : "back2",
        company : "Convosense - Delhi, India",
        beforeCompany : "before:content-['Convosense___-_Delhi,_India']",
        role : "Full Stack Developer Intern",
        beforeRole : "before:content-['Full_Stack_Developer_Intern']",
        roleOverview : "seamlessly combined jQuery for dynamic front-end interactions and PHP for robust back-end development during an engaging internship. Contributed to creating responsive web applications and gained hands-on experience in both client-side scripting and server-side logic.",
        beforeRoleOverview : "before:content-['seamlessly_combined_jQuery_for_dynamic_frontend_interactions_and_PHP_for_robust_backend_development_during_an_engaging_internship._Contributed_to_creating_responsive_web_applications_and_gained_hands-on_experience_in_both_client_side_scripting_and_server_side_logic.']",
        date : "03/2023 - 05/2023",
        beforeDate : "before:content-['03/2023_-_05/2023']",
        responsibilities :[
            {
              content : "Participating in the design and creation of the user interface.",
              beforeContent :"before:content-['Participating_in_the_design_and_creation_of_the_user_interface.']",
              beforeIndex :"before:content-['1']",
            },
            {
                content : "Testing and fixing bugs or other coding issues.",
                beforeContent :  "before:content-['Testing_and_fixing_bugs_or_other_coding_issues.']",
                beforeIndex :"before:content-['2']",
            },
            {
              content :"Writing JavaScript/jQuery code to handle API requests and responses on the client-side.",
              beforeContent : "before:content-['Writing_JavaScript/jQuery_code_to_handle_API_requests_and_responses_on_the_client-side.']",
              beforeIndex :"before:content-['3']",
            },
            {
            content : "Implementing PHP scripts to handle API requests and responses on the server-side. ",
            beforeContent : "before:content-['Implementing_PHP_scripts_to_handle_API_requests_and_responses_on_the_server-side.']",
            beforeIndex :"before:content-['4']",
            }
        ] 
      },
        {
        id : "exp3",
        background : "back3",
        company : "Big V Telecom - Nagpur, India",
        beforeCompany : "before:content-['Big_V_Telecom___-_Nagpur,_India']",
        role : "React js Developer",
        beforeRole : "before:content-['React_js_Developer']",
        roleOverview : "React.js developer proficient in crafting interactive interfaces using React with TypeScript and enhancing design with Tailwind CSS. Leveraged OpenLayers maps and GIS integration to create location-aware applications, delivering seamless user experiences.",
        beforeRoleOverview : "before:content-['React.js_developer_proficient_in_crafting_interactive_interfaces_using_React_with_TypeScript_and_enhancing_design_with_Tailwind_CSS._Leveraged_OpenLayers_maps_and_GIS_integration_to_create_location_-_aware_applications,_delivering_seamless_user_experiences.']",
        date : "05/2023 - Present",
        beforeDate : "before:content-['05/2023_-_Present']",
        responsibilities :[
            {
              content : "Implementing responsive and user-friendly interfaces using React.js, HTML, CSS, Typescript and other front-end technologies to provide an intuitive user experience for GIS-related functionalities",
              beforeContent :"before:content-['Implementing_responsive_and_user_-_friendly_interfaces_using_React.js,_HTML,_CSS,_Typescript_and_other_frontend_technologies_to_provide_an_intuitive_user_experience_for_GIS_-_related_functionalities']",
              beforeIndex :"before:content-['1']",
            },
            {
                content : "Integrating the OpenLayers JavaScript API into web applications to enable advanced mapping capabilities, such as spatial analysis, data visualization, and geolocation.",
                beforeContent :  "before:content-['Integrating_the_OpenLayers_JavaScript_API_into_web_applications_to_enable_advanced_mapping_capabilities,_such_as_spatial_analysis,_data_visualization,_and_geolocation.']",
                beforeIndex :"before:content-['2']",
            },
            {
              content :"Customizing web applications to meet specific client requirements and ensuring seamless integration with enterprise GIS systems.",
              beforeContent : "before:content-['Customizing_web_applications_to_meet_specific_client_requirements_and_ensuring_seamless_integration_with_enterprise_GIS_systems.']",
              beforeIndex :"before:content-['3']",
            },
            {
            content : "Conducting thorough testing and debugging of web applications to ensure high-quality deliverables that meet functional requirements.",
            beforeContent : "before:content-['Conducting_thorough_testing_and_debugging_of_web_applications_to_ensure_high_-_quality_deliverables_that_meet_functional_requirements.']",
            beforeIndex :"before:content-['4']",
            }
        ] 
      }
    ]

    useEffect(() => {
      const handleScroll = () => {
        const height = window.scrollY
        if(height < 1000){
          setShowContent(false)
          setShowAfter(false)
      }
      if(height > 1000){
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
    <section className='experience w-full lg:w-[70%] py-10 bg-cyan-950 px-[10px] md:px-[10px] lg:px-[10px] mb-[80px]'>
       <Header showContent={showContent} showAfter={showAfter} beforeContent={"before:content-['Experience']"} beforeNum={"before:content-['0.2']"} num={"0.2"} content={"Experience"}/>
       <div className={`flex gap-5 flex-col items-center ${showContent ? "opacity-1" : "opacity-0"} duration-500 md:items-start lg:items-start mt-5 relative`}>
       {/* ${loading.exp1 ? "animate-[exp_1s_cubic-bezier(.95,.36,.11,.65)_1] after:animate-[wiggle1_1s_cubic-bezier(.95,.36,.11,.65)_1] after:right-0" :"after:right-[100%]"} */}
       {experience.map((exp,index) => {
        let id = `${exp.id}` as keyof {exp1 : boolean, exp2 : boolean, exp3 :boolean}
        let background = `${exp.background}` as keyof {back1 : boolean,back2 : boolean,back3 : boolean}
        return(
          <>
          <div className={`cardExp flex gap-3 relative flex-col w-full md:w-[350px] lg:w-[350px] text-[#f5f5f5]  bg-[rgba(6,182,212,.18)] px-3 py-5  duration-500 `}>
             <span className={`absolute bottom-[95%] bg-[#f5f5f5] px-2 text-cyan-500 ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } before:bottom-[95%]  duration-500 before:text-center  before:absolute before:left-0  before:duration-500before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${exp.beforeRole} before:font-bold before:w-full before:h-full`} ><span className='invisible'>{exp.role}</span></span>
          <div className='flex flex-col relative mt-3 gap-1'>
           <span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${exp.beforeDate} before:font-bold before:w-full before:h-full`} ><span className='invisible'>{exp.date}</span></span>
           <div className='hidden lg:absolute md:absolute md:flex lg:flex md:w-[110%] lg:w-[150%] text-[#f5f5f5] h-[200px] left-[105%] top-[50%] px-3 py-1 flex-col'>
            <p className='font-bold mb-3 mt-1 relative bg-[#f5f5f5] bottom-[10%] px-3 w-[145px] text-cyan-500'>Responsibilities</p>
            <div className='expRes relative overflow-scroll h-[75%]'>
            {/* before:absolute before:content-"" before:h-[1px] before:w-[50%] before:bg-[#526D82] before:bottom-0 */}
            {
              exp.responsibilities.map((res : any,index : any) => {
                  return(
                    <div className='flex gap-3'>
                    <span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:w-full before:h-full`} ><span className=''><IoIosCheckmarkCircle className='text-cyan-500' size={20}/></span></span>
                    <span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${res.beforeContent} before:w-full before:h-full`} ><span className='invisible'>{res.content}</span></span>
                    </div>
                  )
              })
            }
            </div>
           </div>
          </div>
          <span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 ${showAfter ? "after:opacity-1" : "after:opacity-0" } before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${exp.beforeCompany} before:font-bold before:w-full before:h-full`} ><span className='invisible'>{exp.company}</span></span>
          <span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${exp.beforeRoleOverview} before:w-full before:h-full `} ><span className='invisible'>{exp.roleOverview}</span></span>
</div>
    <div className={`relative md:hidden lg:hidden mb-[50px] w-full ${index !== experience.length - 1 ? ' mb-[50px]' : ""} before:absolute before:content-"" before:bg-[#526D82] before:h-[1px] before:w-[30%] before:top-[110%]`}>
      <p className='font-bold mb-3 mt-1 relative bg-[#f5f5f5] bottom-[10%] px-3 w-[145px] text-cyan-500'>Responsibilities</p>
      <div className='expRes relative text-[#f5f5f5]'>
      {/* before:absolute before:content-"" before:h-[1px] before:w-[50%] before:bg-[#526D82] before:bottom-0 */}
      {
        exp.responsibilities.map((res : any,index : any) => {
            return(
              <div className='flex gap-3'>
                                 <span className={`relative ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] before:w-full before:h-full`} ><span className=''><IoIosCheckmarkCircle className='text-cyan-500' size={20}/></span></span>
              <span className={`relative w-full ${showContent ? "before:top-0 before:opacity-1"  : "before:top-[100%] before:opacity-0" } duration-500 before:absolute before:right-0 before:duration-500 before:ease-[cubic-bezier(.52,-0.32,.39,1.49)] ${res.beforeContent} before:w-full before:h-full`} ><span className='invisible'>{res.content}</span></span>
              </div>
            )
        })
      }
      </div>
      </div>
</>
)
 })}
</div>

</section>
  )
}
// ${showContent? ` before:animate-[wiggle_0.9s_cubic-bezier(.95,.36,.11,.65)_1] after:animate-[wiggle1_1s_cubic-bezier(.95,.36,.11,.65)_1] before:right-0 after:right-0` : "before:right-[100%] after:right-[100%]"} relative before:duration-200 before:content-"" before:absolute before:w-full before:h-full before:top-0 after:top-0 after:duration-500 after:content-"" after:absolute after:w-full after:h-full
