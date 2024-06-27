'use client'

import React, { useState } from 'react'
import Header from '../components/Heading'
import IntroText from '../components/IntroText'
import Image from 'next/image'

import data from '../../data.json'
import Moon from '../../public/assets/destination/image-moon.png'
import Mars from '../../public/assets/destination/image-mars.png'
import Europa from '../../public/assets/destination/image-europa.png'
import Titan from '../../public/assets/destination/image-titan.png'

const destinationData = data.destinations

const planetImages = {
  'Moon': Moon,
  'Mars': Mars,
  'Europa': Europa,
  'Titan': Titan
}

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState("Moon")
  const [hoveredPlanet, setHoveredPlanet] = useState<String | null>(null)
  
  const handleClick = (planet:string) => {
    setActivePlanet(planet)
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
                <Image src={planetImages[activePlanet as keyof typeof planetImages]} alt='planet-image' className='h-44 w-44 mb-7 tablet:w-[18.75rem] tablet:h-[18.75rem] tablet:mb-14 desktop:w-[27.8125rem] desktop:h-[27.8125rem] desktop:mb-0 desktop:mr-40' draggable={false}/>
                <div className='right-content relative flex flex-col items-center desktop:items-start'>
                  <ul className='flex justify-between w-60 mb-5 tablet:w-72 tablet:mb-8 desktop:mb-9'>
                      {
                          destinationData.map(planet => 
                              <li key={planet.name} className={` relative h-7 cursor-pointer tablet:h-8`} onClick={() => handleClick(planet.name)} onMouseEnter={() => handleMouseEnter(planet.name)} onMouseLeave={handleMouseLeave}>
                                  <p className='font-barlow-condensed text-sm tracking-[0.14763rem] uppercase font-thin tablet:text-base'>{planet.name}</p>
                                  <div className={`indicator absolute left-0 bottom-0 w-full h-[0.1875rem] bg-white ${activePlanet === planet.name ? 'opacity-100' : hoveredPlanet === planet.name ? 'opacity-50' : 'opacity-0'}`}></div> 
                              </li> 
                          )
                      }
                  </ul>

                  
                  {
                    destinationData.map(planet => planet.name === activePlanet? 
                      <div className='active-planet-details' key={planet.name}>
                        <div className='text-center desktop:text-start'>
                          <h2 className='text-h3 font-bellefair uppercase tablet:text-[5rem] desktop:text-h2'>{planet.name}</h2>
                          <p className='text-[0.9375rem] text-light-blue font-barlow leading-[1.5625rem] w-[20.4375rem] mb-8 tablet:w-[35.8125rem] desktop:w-[27.75rem] desktop:text-body desktop:mb-14'>{planet.description}</p>
                        </div>

                        <div className='w-full text-center'>
                          <div className='border-solid h-[0.0625rem] bg-blue mb-8 desktop:mb-7'></div>

                          <div className='statistics tablet:flex tablet:justify-center desktop:justify-start'>
                            <div className="left-side tablet:mr-[6.25rem] desktop:flex desktop:flex-col desktop:items-start">
                              <p className='text-subHeading-2 font-barlow-condensed uppercase text-white mb-3'>avg. distance</p>
                              <h5 className='text-[1.75rem] font-bellefair uppercase text-white mb-4 tablet:mb-0'>{planet.distance}</h5>
                            </div>
                            <div className="right-side desktop:flex desktop:flex-col desktop:items-start">
                              <p className='text-subHeading-2 font-barlow-condensed uppercase text-white mb-3'>est. travel time</p>
                              <h5 className='text-[1.75rem] font-bellefair uppercase text-white'>{planet.travel}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      : null)
                  }
                </div>
              </div>
              
            </div>
            
        </div>
    </main>
  )
}

export default Destination