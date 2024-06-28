'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
 import Link from 'next/link'

import logo from '../../public/assets/shared/logo.svg'

const menu = [

  {
    'title': "Home",
    'number': 0
  }, 

  {
    'title': "Destination",
    'number': 1
  },

  {
    'title': "Crew",
    'number': 2
  },

  {
    'title': "Technology",
    'number': 3
  },
 
]

const header = ({ active }:any ) => {
  const [menuActive, setMenuActive] = useState(false)
  const [hovered, setHovered] = useState<Number | null>(null)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMenuActive(false)
    })
  }, [])

  const handleMenuClick = () => {
    if(menuActive) setMenuActive(false) 
    else setMenuActive(true)
  }

  const handleMouseEnter = (number:Number) => setHovered(number)
  const handleMouseLeave = () => setHovered(null)
  
  return (
    <header className='w-full'>
        <nav className='p-6 w-full flex justify-between items-center relative z-20 tablet:p-0 tablet:pl-10 desktop:pt-10'>
            <div className='logo w-10 h-10'>
                <a href='/'>
                  <Image src={logo} alt='space-toursim-logo' className='w-full h-full'/>  
                </a>
            </div>
            <div className='hamburger w-6 h-6 flex flex-col justify-between relative cursor-pointer tablet:hidden' onClick={handleMenuClick}>
                <span className={`h-[0.1875rem] bg-white block transition-transform ease-in-out duration-300 origin-[0%50%] ${menuActive ? 'rotate-45 w-[1.80rem]' : 'w-full'}`}></span>
                <span className={`w-full h-[0.1875rem] bg-white block transition ease-in-out duration-300 ${menuActive ? 'opacity-0' : ''}`}></span>
                <span className={`h-[0.1875rem] bg-white block transition-transform ease-in-out duration-300 origin-[0%50%] ${menuActive ? 'rotate-[-45deg] w-[1.80rem]' : 'w-full '}`}></span>
              
            </div>
            <div className='line opacity-[0.2515] w-[calc(100vw-55rem)] h-[1px] absolute left-28 shrink bg-white z-40 hidden desktop:block'></div>
            
            {/* Menu for tablet and desktop view  */}
            <div className='wide-screen-menu hidden h-24 bg-red-600 md:block relative desktop:w-[51.875rem]'>
              <ul className='flex justify-between items-center h-full tablet:px-12 desktop:px-32'>
                {
                  menu.map(item => 
                    <li key={item.number} className={`relative h-full ${item.number === 3 ? null : 'tablet:mr-10'}`} onMouseEnter={() => handleMouseEnter(item.number)} onMouseLeave={handleMouseLeave}>
                      <Link href={item.title === "Home" ? "/" : `/${item.title}`} className='flex items-center h-full'>
                        <p className='text-white font-barlow-condensed text-nav font-bold mr-3 hidden desktop:block'>0{item.number}</p>
                        <p className='text-white font-barlow-condensed text-nav uppercase font-thin'>{item.title}</p>
                      </Link>
                      <div className={`indicator absolute left-0 bottom-0 w-full h-1 bg-white ${active == item.title ? 'opacity-100' : 'opacity-0'} ${hovered === item.number && active !== item.title ? 'opacity-50' : ''}`}></div> 
                    </li>
                  )
                }
              </ul>
            </div>
        </nav>

        {/* drawer section for mobile view  */}
        <div className={`drawer overflow-hidden absolute top-0 bottom-0 right-0 z-10 bg-red-500 transition-[width] ease-in-out duration-300 ${menuActive ? 'w-64' : 'w-0'}`}>
          <ul className='relative w-64 pt-28'>
            {
              menu.map(item => 
                <li key={item.number} className='relative w-full mb-6'>
                  <Link href={item.title === "Home" ? "/" : `/${item.title}`} className='flex items-center py-2 pl-8'>
                    <p className='font-barlow-condensed text-nav font-bold mr-3'>0{item.number}</p>
                    <p className='font-barlow-condensed text-nav uppercase font-thin'>{item.title}</p>
                  </Link>
                  {active === item.title ? <div className='indicator absolute top-0 right-0 w-1 h-8 bg-white'></div> : null}
                </li>
              )
            }
          </ul> 
        </div>
    </header>
  )
}

export default header