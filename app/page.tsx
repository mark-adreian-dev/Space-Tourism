import Header from './components/Heading'
import HomeButton from './components/ExploreButton'
export default function Home() {
  return (
    <main className="bg-dark-blue w-screen h-screen relative homepage tablet:pb-24 desktop:pb-0 desktop:flex desktop:flex-col desktop:justify-between">
      <Header active="Home"/>
      <div className='main-content-wrapper mt-12 flex flex-col justify-center items-center w-full tablet:mt-28 desktop:flex-row desktop:mt-0 desktop:pb-32 desktop:justify-between desktop:items-end desktop:px-40 wide:px-64\'>
        <div className='flex flex-col justify-center items-center desktop:items-start'>
          <p className='font-barlow-condensed font-thin text-light-blue text-nav uppercase mb-6 tablet:text-body tablet:tracking-[0.21094rem] tablet:text-h5'>so, you want to travel to</p>
          <h1 className='font-bellefair text-[5rem] mb-4 tablet:text-h1'>SPACE</h1>
          <p className='home-body-content text-[0.9375rem] w-[20.4375rem] leading-[1.5625rem] font-barlow text-light-blue text-center mb-20 tablet:text-base tablet:w-[27.75rem] desktop:text-justify desktop:text-body desktop:mb-0'>
            Let’s face it; if you want to go to space, you might as well 
            genuinely go to outer space and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <HomeButton />
      </div>   
    </main>
  );
}
