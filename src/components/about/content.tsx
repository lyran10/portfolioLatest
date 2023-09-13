import React,{useEffect,useState} from 'react'

type Props = {
    showContent : boolean,
}

export const Content = ({showContent} : Props) => {

  return (
    <div className='w-[100%] h-full flex-col mb-10 m-auto text-center md:text-start lg:text-start text-[#f5f5f5] mt-10'>
         <span className={`overflow-hidden relative ${showContent ? "before:top-0 before:opacity-1" : "before:top-[100%] invisible before:opacity-0"} before:content-['"_Hello_there!_I_am_a_versatile_individual_with_a_dynamic_journey._From_my_early_days_as_a_football_enthusiast,_to_honing_skills_as_a_meticulous_process_analyst,_and_later_embracing_the_world_of_coding_during_the_challenging_times_of_Covid-19_–_my_path_has_been_a_testament_to_adaptability._Fueled_by_an_unwavering_passion_for_coding,_I_now_channel_my_creativity_and_problem-solving_abilities_into_crafting_digital_solutions_that_make_a_difference._"'] before:relative before:duration-500 before:w-full before:ease-[cubic-bezier(.52,-0.32,.39,1.49)]`}>
           </span>
    </div>
  )
}
