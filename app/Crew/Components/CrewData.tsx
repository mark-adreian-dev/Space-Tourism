import React from 'react'

interface ChildProps {
    crewMemberData: any,
}

const CrewData:React.FC<ChildProps> = ({ crewMemberData }) => {

    const crewMemeberName = crewMemberData.name

  const bodyWidth = {
    "Douglas Hurley": "tablet:w-[28.625rem]",
    "Mark Shuttleworth": "tablet:w-[32.5rem]",
    "Victor Glover": "tablet:w-[37rem]",
    "Anousheh Ansari": "tablet:w-[33.5rem]"
  } 
  return (
    <div className='crew-data text-center tablet:mb-10 desktop:text-start desktop:mb-28'>
        <h5 className='text-base font-bellefair text-white uppercase opacity-50 mb-2 tablet:text-2xl desktop:text-h4 desktop:mb-4'>{crewMemberData.role}</h5>
        <h1 className='text-2xl text-white font-bellefair uppercase mb-4 tablet:text-[2.5rem] desktop:text-h3 desktop:mb-7'>{crewMemberData.name}</h1>
        <p className={`text-[0.9375rem] text-light-blue font-barlow leading-[1.5625rem] w-[20.4375rem] ${bodyWidth[crewMemberData.name as keyof typeof bodyWidth]} tablet:text-base desktop:text-body desktop:w-[27.75rem] `}>{crewMemberData.bio}</p>
    </div>
  )
}

export default CrewData