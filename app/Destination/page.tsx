'use client'

import React, { useState, useRef } from 'react'
import Header from '../GlobalComponents/Heading'
import IntroText from '../GlobalComponents/IntroText'
import Image from 'next/image'

import DestinationMenu from './Components/DestinationMenu'
import DestinationData from './Components/DestinationData'

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import data from '../../data.json'
const destinations = data.destinations

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState("Moon")
  const [hoveredPlanet, setHoveredPlanet] = useState<String | null>(null)
  const swiperRef = useRef<any>()
    
  const handleClick = (planet:string) => {
    setActivePlanet(planet)
    if (planet === "Moon") swiperRef.current.slideTo(0)
    if (planet === "Mars") swiperRef.current.slideTo(1)
    if (planet === "Europa") swiperRef.current.slideTo(2)
    if (planet === "Titan") swiperRef.current.slideTo(3)
  }

  const handleMouseEnter = (planet:string) => {
    setHoveredPlanet(planet)
  }

  const handleMouseLeave = () => {
    setHoveredPlanet(null)
  }



  return (
    <main className="bg-dark-blue w-screen h-screen relative destination">
        <Header active="Destination" />
        <div className='destination-main-content flex flex-col justify-center items-center tablet:mt-10 desktop:mt-20'>
            <div className='flex flex-col justify-center items-center tablet:w-full desktop:w-fit desktop:block'> 
              <IntroText description="Pick your destination" number="1" />
              <div className='desktop-flexed-content flex flex-col justify-center items-center desktop:flex-row desktop:items-end'>
                
                <Swiper
                  className='mx-[0px!important] px-[200px] w-[100vw!important] relative desktop:w-[37.8125rem!important] desktop:h-[27.8125rem!important] desktop:mb-0 '
                  onSlideChange={(e) => {
                    if(e.activeIndex == 0) setActivePlanet("Moon")
                    if(e.activeIndex == 1) setActivePlanet("Mars")
                    if(e.activeIndex == 2) setActivePlanet("Europa")
                    if(e.activeIndex == 3) setActivePlanet("Titan")
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper
                  }}
                  
                  speed={1000}
                >
                  {
                    destinations.map(planet => <SwiperSlide key={planet.name} className='w-44 h-44 '>
                      <Image src={planet.images.png} alt='planet-image' width='0' height='0' sizes='100vw' className='m-auto h-44 w-44 mb-7 tablet:w-[18.75rem] tablet:h-[18.75rem] tablet:mb-14 desktop:w-[27.8125rem] desktop:h-[27.8125rem] desktop:m-0' draggable={false}/>
                      </SwiperSlide>)
                  }
                </Swiper>
                
           
                
                <div className='right-content relative flex flex-col items-center desktop:items-start'>
                  <DestinationMenu activePlanet={activePlanet} hoveredPlanet={hoveredPlanet} handleClick={handleClick} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
                  <DestinationData activePlanet={activePlanet} /> 
                </div>
              </div>
            </div>
        </div>
    </main>
  )
}

export default Destination