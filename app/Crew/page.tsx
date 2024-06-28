import React from 'react'
import Header from '../GlobalComponents/Heading'
import Image from 'next/image'

import Ansari from '../../public/assets/crew/image-anousheh-ansari.png'
import Douglas from '../../public/assets/crew/image-douglas-hurley.png'
import Shuttleworth from '../../public/assets/crew/image-mark-shuttleworth.png'
import Victor from '../../public/assets/crew/image-victor-glover.png'

const crewImages = {

    'Ansari': Ansari,
    'Douglas': Douglas,
    'Shuttleworth': Shuttleworth,
    'Victor': Victor

}


const page = () => {
 

  return (
    <main className="bg-dark-blue w-screen h-screen relative crew">
        <Header active="Crew" />
       
    </main>
  )
}

export default page