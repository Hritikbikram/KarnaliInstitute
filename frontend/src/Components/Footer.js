import React from 'react';
import logo from '../Images/brand.svg';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-gray-200'>
    

    <div className='grid grid-cols-5 md:grid-cols-2 p-[4%] gap-6'>

      <div className='col-span-2'>
        <img src={logo} alt="Logo" />

        <p className='text-lg pt-5 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni sed, laudantium sequi quod nostrum non eum! Laudantium, pariatur? Nulla, hic. Est, nihil autem culpa fuga nulla possimus tempore beatae.</p>
      </div>

      <div className='text-left text-lg '>
        <ul className='text-black'>


            <li className='font-bold text-black pb-3'>
              <NavLink to="/"  className="hover:text-orange-300 duration-200" >KarnaliInsitute</NavLink>
            </li>
              
            <li>
              <NavLink to="/about"  className="hover:text-orange-300 duration-200" >About Us</NavLink>
            </li>
            
            <li>
              <NavLink to="/course"  className="hover:text-orange-300 duration-200" >Courses</NavLink>
            </li>

            
            <li>
              <NavLink to="/"  className="hover:text-orange-300 duration-200" >Careers</NavLink>
            </li>
            
            
            <li>
              <NavLink to="/contact"  className="hover:text-orange-300 duration-200" >Contact Us</NavLink>
            </li>
            
            <li>
              <NavLink to="/"  className="hover:text-orange-300 duration-200" >Feedback</NavLink>
            </li>
        </ul>
      </div>


      <div className='text-left text-lg'>
        <ul className='text-black'>


          <li className='font-bold text-black pb-3'>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Legal</NavLink>
          </li>

          <li>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Terms</NavLink>
          </li>


          <li>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Conditions</NavLink>
          </li>

          <li>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Cookies</NavLink>
          </li>

          <li>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Copyright</NavLink>
          </li>
        </ul>
      </div>


      <div className='text-left text-lg'>
        <ul className='text-black'>
          
          <li className='font-bold text-black pb-3'>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Follow</NavLink>
          </li>

          <li>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Facebook</NavLink>
          </li>

          <li>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Instagram</NavLink>
          </li>

          <li>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Twitter</NavLink>
          </li>

          <li>
            <NavLink to="/"  className="hover:text-orange-300 duration-200" >Youtube</NavLink>
          </li>
        </ul>
      </div>


 

    </div>

    <div>
        <hr  className='p-5 w-[90%] mx-[5%] border-blue-gray-200' />

        <p className='px-[5%] pb-6'>© 2023 Karnali Institute - All rights reserved</p>
    </div>


    </div>
  )
}

export default Footer