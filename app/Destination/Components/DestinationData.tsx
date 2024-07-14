import React from 'react'

import data from '../../../data.json'
const destinationData = data.destinations

interface ChildProps {
    activePlanet: string
}

const DestinationData:React.FC<ChildProps> = ({activePlanet}) => {
  return (
    <>  
        {
            destinationData.map(planet => planet.name === activePlanet && ( 
                <div className='active-planet-details' key={planet.name}>
                    <div className='text-center desktop:text-start'>
                        <h2 className='text-h3 text-white font-bellefair uppercase tablet:text-[5rem] desktop:text-h2'>{planet.name}</h2>
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
            ))
        }
    </>
  )
}

export default DestinationData