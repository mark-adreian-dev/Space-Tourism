'use client'

import React, { useState, useRef } from 'react'
import Header from '../GlobalComponents/Heading'
import IntroText from '../GlobalComponents/IntroText'
import Image from 'next/image'

import DestinationMenu from './Components/DestinationMenu'
import DestinationData from './Components/DestinationData'

import { Swiper, SwiperSlide} from "swiper/react";


import data from '../../data.json'
const destinations = data.destinations

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState("Moon")
  const [hoveredPlanet, setHoveredPlanet] = useState<String | null>(null)
  const destinationRef = useRef<any>()
    
  const handleClick = (planet:string) => {
    setActivePlanet(planet)
    if (planet === "Moon") destinationRef.current.slideTo(0)
    if (planet === "Mars") destinationRef.current.slideTo(1)
    if (planet === "Europa") destinationRef.current.slideTo(2)
    if (planet === "Titan") destinationRef.current.slideTo(3)
  }

  const handleMouseEnter = (planet:string) => {
    setHoveredPlanet(planet)
  }

  const handleMouseLeave = () => {
    setHoveredPlanet(null)
  }

  return (
    <>
      <div className='destination opacity-50 absolute w-screen h-screen'></div>
      <div className="w-screen h-screen relative">
        <Header active="Destination" />
        <div className='destination-main-content flex flex-col justify-center items-center tablet:mt-10 desktop:mt-20'>
          <div className='flex flex-col justify-center items-center tablet:w-full desktop:w-fit desktop:block'> 
            <IntroText description="Pick your destination" number="1" />
            <div className='desktop-flexed-content flex flex-col justify-center items-center mt-10 tablet:mt-14 desktop:mt-16 desktop:flex-row desktop:items-end'>
              
              <Swiper
                className='mx-0 w-screen relative mb-7 tablet:mb-14 desktop:w-[35.8125rem] desktop:h-[27.8125rem] desktop:mb-0 desktop:mr-[2rem!important]'
                onSlideChange={(slide) => {
                  if(slide.activeIndex == 0) setActivePlanet("Moon")
                  if(slide.activeIndex == 1) setActivePlanet("Mars")
                  if(slide.activeIndex == 2) setActivePlanet("Europa")
                  if(slide.activeIndex == 3) setActivePlanet("Titan")
                }}
                onSwiper={ swiper => destinationRef.current = swiper } 
                speed={700}
              >
                {
                  destinations.map(planet => 
                    <SwiperSlide key={planet.name}>
                      <Image src={planet.images.png} alt='planet-image' width='0' height='0' sizes='100vw' className={`m-auto h-44 w-44 tablet:w-[18.75rem] tablet:h-[18.75rem] tablet:mb-14 desktop:w-[27.8125rem] desktop:h-[27.8125rem] desktop:m-0`} draggable={false}/>
                    </SwiperSlide>
                  )
                }
              </Swiper>

              <div className='right-content relative flex flex-col items-center desktop:items-start'>
                <DestinationMenu activePlanet={activePlanet} hoveredPlanet={hoveredPlanet} handleClick={handleClick} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
                <DestinationData activePlanet={activePlanet} /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
   
  )
}

export default Destination