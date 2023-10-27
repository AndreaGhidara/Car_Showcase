import Image from 'next/image'

import { CustomFilter, Hero, SerchBar } from '@/Components';
import { fetchCars } from '@/utils';


export default async function Home() {

  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogues
          </h1>
          <p>
            explore the cars you might like
          </p>
        </div>
        <div className='home__filters'>
          <SerchBar /> 
          <div className='home__filter-container'>
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            We have Cars
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Ops, no results</h2>
            <p> {allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
