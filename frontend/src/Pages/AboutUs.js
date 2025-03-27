import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutdes from '../Images/blog.png';


const AboutUs = () => {
  return (
    <>


        

    <div className='abt'>


      <div className=' py-[6%] pl-[12%] '>

        <h1 className='text-4xl text-white font-extrabold  pb-5'>About Us</h1>
        
        
        <div className='pt-[10%]'>
          <Breadcrumbs>
            <NavLink href="#" className="opacity-60 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </NavLink>
            <NavLink href="#" className="opacity-60 font-bold">
              <span>Pages</span>
            </NavLink>
            <NavLink href="#" className="font-bold">About</NavLink>
          </Breadcrumbs>
        </div>

      </div>


    </div>





<div className=' pb-[5%]'>

    <div className="grid grid-cols-2 gap-0 md:grid-cols-1 mt-6 ml-[11%] mr-[5%]">

      <div className="cakeimg  pr-0">

        <img className='rounded-3xl md:rounded-b-none w-[100%] shadow-2xl border-l-8 border-b-8 border-purple-900 ' src={aboutdes} alt="Cake" />

      </div>

      <div className="info p-10 pt-[5%]">


        <h1 className='text-5xl md:text-2xl font-bold pt-6'>Know About Our Services</h1>

        <h1 className='text-5xl md:text-2xl font-bold pt-6'>Business,History</h1>

        <p className='font-medium text-2xl md:text-xl pt-7 pb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium consequuntur inventore! Quae sit aut nobis! Labore corrupti commodi, iure debitis ipsa voluptas eum! Doloribus voluptates consequatur et voluptate rerum..</p>



        <NavLink to="/contact"  className="hover:text-orange-300 duration-200 bg-pink-300 text-white p-6 text-lg" >Contact Us</NavLink>




      </div>

    </div>

</div>


    
    
    </>
  )
}

export default AboutUs