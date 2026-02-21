import HeroHome from '@/components/home/HeroHome';

export default function Home() {
  return (
     <> 
      <HeroHome />
      <div className='flex px-20 py-20 justify-around border-y border-border-secondary'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-extrabold text-accent text-5xl text-center'>200+</h1>
          <p className='font-normal text-text-secondary text-s text-center'>PROJECTS COMPLETED</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-extrabold text-accent text-5xl text-center'>10+</h1>
          <p className='font-normal text-text-secondary text-s text-center'>YEARS EXPERIENCE</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-extrabold text-accent text-5xl text-center'>24/7</h1>
          <p className='font-normal text-text-secondary text-s text-center'>EMERGENCY SERVICE</p>
        </div>
      </div>
    </>
  );
}
