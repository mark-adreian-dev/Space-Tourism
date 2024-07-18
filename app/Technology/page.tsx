"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "../GlobalComponents/Heading";
import IntroText from "../GlobalComponents/IntroText";
import Pagination from "./Components/Paginations";
import TechData from "./Components/TechData";
import { SwiperType } from "../Interface";

import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../data.json";
const technologiesData = data.technology;

const technologies: string[] = []
technologiesData.map(technology => technologies.push(technology.name))

interface TechnologyIndexType {
  "Launch vehicle": number,
  "Spaceport": number,
  "Space capsule": number,
} 
const TechnologyIndex: TechnologyIndexType = {
  "Launch vehicle": 0,
  "Spaceport": 1,
  "Space capsule":  2,

}

const page = () => {
  const technologyRef = useRef<any>();
  const [activeTech, setActiveTech] = useState<string>(technologies[0]);
  const [windowSize, setWindowSize] = useState<number>(0)

  useEffect(() => {
    setWindowSize(window.innerWidth)
    window.addEventListener('resize', () => setWindowSize(window.innerWidth))
  }, [])

  const handleClick = (techName: string) => {
    setActiveTech(techName)
    technologyRef.current.slideTo(TechnologyIndex[techName as keyof typeof TechnologyIndex])

  }

  return (
    <>
      <div className="technology opacity-25 absolute w-screen h-screen mix-blend-screen"></div>
      <div className="technology w-screen h-screen relative">
        <Header active="Technology" />
        <div className="destination-main-content flex flex-col justify-center items-center tablet:mt-10 desktop:mt-20 desktop:items-end wide:items-center">
          <div className="flex flex-col justify-center items-center tablet:w-full desktop:block desktop:w-[79.59375rem]">
            <IntroText description="Space Launch 101" number={3} />
            <div className="desktop:flex desktop:flex-row-reverse desktop:mt-7 desktop:items-end desktop:justify-between">
              <Swiper
                className="w-screen h-44 mt-8 mb-8 tablet:h-[19.375rem] tablet:mb-14 desktop:w-[32.1875rem] desktop:h-[32.9375rem] desktop:mt-0 desktop:mx-0"
                onSlideChange={(swiper: SwiperType) => {
                  if(swiper.activeIndex == 0) setActiveTech("Launch vehicle")
                  if(swiper.activeIndex == 1) setActiveTech("Spaceport")
                  if(swiper.activeIndex == 2) setActiveTech("Space capsule")
              
                }}
                onSwiper={(swiper: SwiperType) => (technologyRef.current = swiper)}
              >
                {technologiesData.map((tech) => (
                  <SwiperSlide key={tech.name}>
                    
                      <div className={`technology-image w-screen h-44 tablet:h-[19.375rem] desktop:w-[32.1875rem] desktop:h-[32.9375rem]`}
                            style={

                              windowSize >= 1440 ? 
                                {
                                  backgroundImage: `url(${tech.images.portrait})`,
                                  backgroundSize: 'cover', 
                                  backgroundPosition: 'center'
                                }

                                :

                                {
                                  backgroundImage: `url(${tech.images.landscape})`,
                                  backgroundSize: 'cover', 
                                  backgroundPosition: 'center'
                                }
                            }
                      ></div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex flex-col justify-center items-center desktop:flex-row desktop:pb-28">
                <Pagination activeTech={activeTech} handleClick={handleClick}/>
                <TechData activeTech={activeTech} />
              </div>
              
            </div>
            
            
              
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
