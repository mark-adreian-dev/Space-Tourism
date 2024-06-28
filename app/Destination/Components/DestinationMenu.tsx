import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import data from '../../../data.json'
const destinationData = data.destinations

interface ChildProps {
  activePlanet: string, 
  hoveredPlanet: any, 
  handleClick: (planet: string) => void, 
  handleMouseEnter: (planet: string) => void, 
  handleMouseLeave: () => void

}

const DestinationMenu:React.FC<ChildProps> = ({ activePlanet, hoveredPlanet, handleClick, handleMouseEnter, handleMouseLeave}) => {
  return (
    <ul className='flex justify-between w-60 mb-5 tablet:w-72 tablet:mb-8 desktop:mb-9'>
    
    {
      destinationData.map(planet => 
       
        <li key={planet.name} className={` relative h-7 cursor-pointer tablet:h-8`} onClick={() => handleClick(planet.name)} onMouseEnter={() => handleMouseEnter(planet.name)} onMouseLeave={handleMouseLeave}>
        
            <p className='text-white font-barlow-condensed text-sm tracking-[0.14763rem] uppercase font-thin tablet:text-base'>{planet.name}</p>
            <div className={`indicator absolute left-0 bottom-0 w-full h-[0.1875rem] bg-white ${activePlanet === planet.name ? 'opacity-100' : hoveredPlanet === planet.name ? 'opacity-50' : 'opacity-0'}`}></div> 
          
        </li> 
    
      )
    }
</ul>
  )
}

export default DestinationMenu