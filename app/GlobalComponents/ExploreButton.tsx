'use client'

import { useState } from 'react'
import Link from 'next/link'

const ExploreButton = () => {
  const [hovered, setHovered] = useState<boolean>(false)

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  return (
    <Link href={`/Destination`}>
      <div className='explore-button-container relative w-36 h-36 tablet:h-60 tablet:w-60 desktop:w-[17rem] desktop:h-[17rem]'>
        <div className={`button-scale absolute top-0 left-0 opacity-[0.1036] bg-white transition-[transform] ease-in-out duration-300 w-36 h-36 rounded-full ${hovered ? ' scale-150' : null} tablet:h-60 tablet:w-60 desktop:w-[17rem] desktop:h-[17rem]`}></div>
        <div className={`button-scale relative bg-white w-36 h-36 rounded-full flex justify-center items-center tablet:h-60 tablet:w-60 desktop:w-[17rem] desktop:h-[17rem]`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className='font-bellefair uppercase text-body text-dark-blue tracking-wider tablet:text-[2rem] tablet:tracking-widest'>Explore</p>
        </div>
      </div>
    </Link>
    
  )
}

export default ExploreButton