"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "../GlobalComponents/Heading";
import IntroText from "../GlobalComponents/IntroText";
import Pagination from "./Components/Paginations";

import { Swiper, SwiperSlide } from "swiper/react";

import data from "../../data.json";
import TechData from "./Components/TechData";

const techologies = data.technology;

const page = () => {
  const technologyRef = useRef<any>();
  const [activeTech, setActiveTech] = useState<string>(techologies[0].name);
  const [windowSize, setWindowSize] = useState<any>()

  useEffect(() => {
    setWindowSize(window.innerWidth)
    window.addEventListener('resize', () => setWindowSize(window.innerWidth))
  }, [])

  const handleClick = (techName:string) => {
    setActiveTech(techName)
    if(techName == "Launch vehicle") technologyRef.current.slideTo(0)
    if(techName == "Spaceport") technologyRef.current.slideTo(1)
    if(techName == "Space capsule") technologyRef.current.slideTo(2)
  }

  return (
    <>
      <div className="technology opacity-25 absolute w-screen h-screen mix-blend-screen"></div>
      <div className="w-screen h-screen relative">
        <Header active="Technology" />
        <div className="destination-main-content flex flex-col justify-center items-center tablet:mt-10 desktop:mt-20 desktop:items-end wide:items-center">
          <div className="flex flex-col justify-center items-center tablet:w-full desktop:block desktop:w-[79.59375rem]">
            <IntroText description="Space Launch 101" number="3" />
            <div className="desktop:flex desktop:flex-row-reverse desktop:mt-7 desktop:items-end desktop:justify-between">
              <Swiper
                className="w-screen h-44 mt-8 mb-8 tablet:h-[19.375rem] tablet:mb-14 desktop:w-[32.1875rem] desktop:h-[32.9375rem] desktop:mt-0 desktop:mx-0"
                onSlideChange={(slide) => {
                  if(slide.activeIndex == 0) setActiveTech("Launch vehicle")
                  if(slide.activeIndex == 1) setActiveTech("Spaceport")
                  if(slide.activeIndex == 2) setActiveTech("Space capsule")
              
                }}
                onSwiper={(swiper) => (technologyRef.current = swiper)}
              >
                {techologies.map((tech) => (
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
