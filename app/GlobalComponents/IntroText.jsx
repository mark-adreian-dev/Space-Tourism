import React from 'react'

const IntroText = ({ number, description}) => {
  return (
    <div className='intro-text flex mb-10 tablet:pl-10 tablet:self-start tablet:w-ful tablet:mb-14 desktop:pl-0 desktop:mb-16'>  
      <p className='text-nav text-white font-barlow-condensed font-bold opacity-25 mr-5 tablet:text-lg desktop:text-h5'>0{number}</p>        
      <p className='font-barlow-condensed font-thin text-white text-nav uppercase tablet:text-lg desktop:text-h5'>{description}</p>
    </div>
  )
}

export default IntroText