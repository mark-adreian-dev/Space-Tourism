'use client'

import React from 'react'


import data from "../../../data.json";
const techologies = data.technology;

interface ChildProps {
    activeTech: string
}

const TechData:React.FC<ChildProps> = ({ activeTech}) => {
   
    return (
        <div className='tech-data text-center desktop:text-start '>
            <p className="text-sm uppercase tracking-[0.14763rem] font-barlow-condensed text-light-blue tablet:text-base desktop:mb-[0.69rem]">THE TERMINOLOGY…</p>
            {
                techologies.map(tech => tech.name === activeTech && (
                    <div key={tech.name}>
                        <h1 className='text-[2.5rem] leading-normal text-white font-bellefair uppercase mb-4 tablet:text-[2.5rem] desktop:text-[3.5rem] desktop:mb-[1.06rem]'>{tech.name}</h1>
                        <p className={`mx-auto text-[0.9375rem] text-light-blue font-barlow leading-[1.5625rem] w-[20.4375rem] tablet:w-[28.625remre] tablet:text-base desktop:text-body desktop:w-[27.75rem]`}>{tech.description}</p>
                    </div>
                
                    )
                )
            }
            
        </div>
    )
}

export default TechData
