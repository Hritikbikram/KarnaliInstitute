import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/brand.svg';
import { Button, Input } from '@material-tailwind/react';

const Header = () => {

  const [isShow, setShow]=useState(false);

  return (
    <div>
      <div className='flex justify-between p-6 bg-black text-white font-semibold'>

        <h1>Inquiry: - 083-123456 / 9876543210</h1>

           

        <h1> <Link className='bg-blue-800 hover:bg-blue-400 p-3 rounded-lg' to="/enquiry">Enquriy</Link> </h1>


      </div>



      <header className='flex space-x-10 justify-evenly px-5 py-4 top-0 z-20'>

      <div className='pl-9 py-4'>
        <NavLink to='/' className="text-xl">
          <img src={logo} alt="" />
          <h1>Karnali Institute</h1>
        </NavLink>
      </div>



      <div className='space-x-7 py-5 text-xl lg:hidden'>

        <NavLink className="hover:text-orange-300 duration-200" to='/gallery'>Success Gallery</NavLink>

        <NavLink className="hover:text-orange-300 duration-200"  to='/testimonial'>Testimonials </NavLink>

        <NavLink className="hover:text-orange-300 duration-200"  to='/course'>All Courses <i className="fa-solid fa-chevron-down px-2"></i></NavLink>
        
        <NavLink className="hover:text-orange-300 duration-200" to='/admission'>Admission </NavLink>
        
        <NavLink className="hover:text-orange-300 duration-200" to='/blog'>Blogs</NavLink>
 
        <NavLink className="hover:text-orange-300 duration-200" to='/enquiry'>Enquiries </NavLink>
        
        <NavLink className="hover:text-orange-300 duration-200" 
         to='/contact'>Contact Us </NavLink>

      </div>


      <div className='hidden lg:flex'>
    <button onClick={()=>setShow(!isShow)}>
    
    {isShow ? <i className="fa-regular fa-circle-xmark"></i> : <i className='fa-solid fa-bars'></i> } 
    
    </button>
    </div>








      {/* <div className=' py-5 text-xl'>

        <form >
          <div className='flex '>
          <Input 
          className='rounded-r-none w-[100%]' 
          type='text'
           label='Search Courses'
           name='search'
           />

 
          <Button className='text-lg px-5 py-1 rounded-l-none'><i className="fa-solid fa-magnifying-glass"></i></Button>
          </div>
        </form>
        
      </div>       */}






      </header>
      
    {isShow && <div className='space-x-7 py-5 text-xl lg:flex lg:flex-col space-y-1 mt-1 hidden text-center' onClick={()=>setShow(false)}>

<ul>

    <li>  

      <NavLink className="hover:text-orange-300 duration-200" to='/gallery'>Success Gallery</NavLink>

    </li>

    <li>

      <NavLink className="hover:text-orange-300 duration-200"  to='/testimonial'>Testimonials </NavLink>
    
    </li>

    <li>  

      <NavLink className="hover:text-orange-300 duration-200"  to='/course'>All Courses <i className="fa-solid fa-chevron-down px-2"></i></NavLink>

    </li>

    <li>            
      <NavLink className="hover:text-orange-300 duration-200" to='/admission'>Admission </NavLink>

    </li>

    <li>      
      <NavLink className="hover:text-orange-300 duration-200" to='/blog'>Blogs</NavLink>
    
    </li>

    <li>
      <NavLink className="hover:text-orange-300 duration-200" to='/enquiry'>Enquiries </NavLink>
    
    </li>

    <li> 
      <NavLink className="hover:text-orange-300 duration-200" 
      to='/contact'>Contact Us </NavLink>

      
    </li>



</ul>

</div>}

      <hr className='bg-black'/>
    </div>
  )
}

export default Header