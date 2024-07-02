import React from 'react'

import data from '../../../data.json'

const crew = data.crew

interface ChildProps {
    activeCrew: string,
    crewRef: any
    setActiveCrew: (name:string) => void

}


const Pagination:React.FC<ChildProps> = ({ activeCrew, setActiveCrew, crewRef }) => {

  const handleClick = (name:string) => {
    setActiveCrew(name)
    if(name == "Douglas Hurley") crewRef.current.slideTo(0)
    if(name == "Mark Shuttleworth") crewRef.current.slideTo(1)
    if(name == "Victor Glover")  crewRef.current.slideTo(2)
    if(name == "Anousheh Ansari")  crewRef.current.slideTo(3)
  }
  
  return (
    <div className='crew-pagination-control flex mb-8 tablet:mb-10'>
        {
            
            crew.map(member => 
                <div key={member.name} className={`w-2.5 h-2.5 rounded-full bg-white ${member.name !== "Anousheh Ansari" ? 'mr-4' : '' } ${member.name !== activeCrew ? 'opacity-[0.1744]' : ''}`} onClick={() => handleClick(member.name)}></div>
            )
              
        }
    </div>
  )
}

export default Pagination