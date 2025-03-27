import React from 'react'
import learn from '../Images/learn.jpg';

const Banner = () => {
  return (
    <div>

    <div className=''>
        <div className="bg-teal-50 grid grid-cols-2 gap-0 md:grid-cols-1 mt-6 ml-[11%] mr-[9%] rounded-t-3xl ">

          <div className="cakeimg  pr-0">

            <img className='rounded-tl-3xl md:rounded-t-3xl md:rounded-b-none w-[100%]' src={learn} alt="Cake" />

          </div>

          <div className="info p-10 pl-[10%] pt-[15%]">

            <p className='font-medium text-lg'> <i className="fa-solid fa-arrow-trend-up text-orange-300 pr-2"></i> Building IT professional since 2013</p>

            <h1 className='text-5xl md:text-2xl font-bold pt-6'>Begin the journey towards a bright career! </h1>

            <p className='font-medium text-2xl md:text-xl pt-7'>
              Master skills, become a professional and build your career
            </p>




          </div>

        </div>

    </div>

    </div>
  )
}

export default Banner