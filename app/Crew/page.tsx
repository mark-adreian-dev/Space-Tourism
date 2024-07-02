'use client'

import React, { useState, useRef } from 'react'
import Header from '../GlobalComponents/Heading'


import IntroText from '../GlobalComponents/IntroText'

import { Swiper, SwiperSlide} from "swiper/react";

import Pagination from './Components/Pagination';
import CrewData from './Components/CrewData';


import data from '../../data.json'

const crew = data.crew


const page = () => {
  const crewRef = useRef<any>()
  const [activeCrew, setActiveCrew] = useState(crew[0].name)

  

  return (
    <>
      <div className='crew opacity-25 absolute w-screen h-screen'></div>
      <div className="w-screen h-screen relative">
        <Header active="Crew" />
        <div className='flex flex-col justify-center items-center tablet:mt-10 desktop:mt-[4.75rem]'>
          <div className='flex justify-center items-center flex-col tablet:w-full desktop:w-fit'>
            <IntroText number={2} description={"Meet you crew"}/>
            <div className='crew-content tablet:flex tablet:flex-col-reverse tablet:mt-[3.75rem] desktop:flex-row-reverse desktop:mt-0 desktop:w-[74.098125rem] desktop:justify-between'>
              <Swiper 
                className='w-80 h-56 mx-0 border-b-[0.0625rem] border-blue mt-8 mb-8 tablet:h-[33.25rem] tablet:w-[33.71925rem] tablet:mb-0 tablet:border-b-0  desktop:w-[34.64925rem] desktop:h-[42.5625rem] desktop:mt-0'
                onSlideChange={(slide) => {
                  if(slide.activeIndex == 0) setActiveCrew("Douglas Hurley")
                  if(slide.activeIndex == 1) setActiveCrew("Mark Shuttleworth")
                  if(slide.activeIndex == 2) setActiveCrew("Victor Glover")
                  if(slide.activeIndex == 3) setActiveCrew("Anousheh Ansari")
                }}

                onSwiper={ swiper => crewRef.current = swiper }
              >
                {
                  crew.map(member => 
                    <SwiperSlide key={member.name}>
                      <div className='crew-image w-56 h-56 mx-auto tablet:h-[33.25rem] tablet:w-[33.71925rem] desktop:w-[34.64925rem] desktop:h-[42.5625rem]' style={
                        {
                          background: `url("${member.images.png}") no-repeat`,
                          backgroundPosition: "center bottom",
                          backgroundSize: "contain"
                          
                        }}/>
                    </SwiperSlide>
                  )
                }

              </Swiper>
              <div className='crew-data pagination-container flex flex-col justify-center items-center tablet:flex-col-reverse desktop:items-start'>
                <Pagination activeCrew={activeCrew} setActiveCrew={setActiveCrew} crewRef={crewRef}/>

                {
                  crew.map(member => member.name === activeCrew ? <CrewData key={member.name} crewMemberData={member}/>  : null)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default page