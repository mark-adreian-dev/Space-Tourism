import React from 'react'

import data from "../../../data.json";
const techologies = data.technology;

interface ChildProps {
    activeTech: string,
    handleClick: (techName:string) => void
}

const Paginations:React.FC<ChildProps> = ({ activeTech, handleClick }) => {
  return (
    <div className='tech-pagination flex mb-6 tablet:mb-11 desktop:flex-col desktop:mr-20 desktop:mb-0'>
        {
            techologies.map(tech => 
                <div key={tech.name} className={`flex justify-center items-center w-10 h-10 bg-transparent border-[1px] border-solid  border-opacity-25 rounded-full ${tech.name !== activeTech ? 'border-[rgba(255,255,255,0.25)]' : 'bg-white border-0'} ${tech.name !== "Space capsul" ? "mr-4 desktop:mb-8" : ''} tablet:w-14 tablet:h-14 desktop:w-20 desktop:h-20`} onClick={() => handleClick(tech.name)} >
                    <p className={`text-base font-bellefair ${tech.name === activeTech ? 'text-dark-blue' : 'text-white'} tablet:text-2xl desktop:text-[2rem]`}>{techologies.indexOf(tech) + 1}</p>
                </div>
            )
        }
    </div>
  )
}

export default Paginations