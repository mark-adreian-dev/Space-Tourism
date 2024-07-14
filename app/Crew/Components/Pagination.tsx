import data from '../../../data.json'
const crew = data.crew

interface CrewMemberIndex {
  "Douglas Hurley": number,
  "Mark Shuttleworth": number,
  "Victor Glover":  number,
  "Anousheh Ansari": number,
}

interface ChildProps {
  activeCrew: string,
  crewRef: any
  setActiveCrew: (name:string) => void
}

const CrewIndex: CrewMemberIndex = {
  "Douglas Hurley": 0,
  "Mark Shuttleworth": 1,
  "Victor Glover":  2,
  "Anousheh Ansari": 3,
}

const Pagination:React.FC<ChildProps> = ({ activeCrew, setActiveCrew, crewRef }) => {

  const handleClick = (name:string): void => {
    setActiveCrew(name)
    crewRef.current.slideTo(CrewIndex[name as keyof typeof CrewIndex])
  }
  
  return (
    <div className='crew-pagination-control flex mb-8 tablet:mb-10'>
      { 
        crew.map(member => 
          <div 
            key={member.name} 
            className={`w-2.5 h-2.5 rounded-full bg-white 
              ${member.name !== "Anousheh Ansari" ? 'mr-4' : '' } 
              ${member.name !== activeCrew ? 'opacity-[0.1744]' : ''}`
            } 
            onClick={(): void => handleClick(member.name)}>
          </div>
        )      
      }
    </div>
  )
}

export default Pagination