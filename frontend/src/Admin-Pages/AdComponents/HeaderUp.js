import React from 'react';
import dashlogo from '../AdImages/nepal.png'
import { removeUser } from '../AdFeatures/localStorage';

const HeaderUp = () => {
  return (
    <>
    

        
      <img src={dashlogo} alt="Logo" />


        <div className=' px-1 py-10'>


          <a href="../" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-table-columns"></i>
            <span className='px-3'>Dashboard</span>
          </a>
          


          <a href="../about" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-book-open"></i>
            <span className='px-3'>About</span>
          </a>
          

          



          


          <a href="../courses" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-graduation-cap"></i>
            <span className='px-3'>Courses Info</span>
          </a>
          

          


          <a href="../careers" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-chalkboard-user"></i>
            <span className='px-3'>Success</span>
          </a>
          

          


          <a href="../testimonial" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-landmark"></i>
            <span className='px-3'>Testimonials</span>
          </a>
          
          


          <a href="../blog" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-landmark"></i>
            <span className='px-3'>Blogs</span>
          </a>
          

          


          <a href="../admission" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-calendar"></i>
            <span className='px-3'>Admission</span>
          </a>
          
          

          


          <a href="../queries" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-calendar"></i>
            <span className='px-3'>Queries</span>
          </a>
          
          


          <a href="../contacts" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-table"></i>
            <span className='px-3'>Contacts</span>
          </a>
          


          <a href="../users" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-table"></i>
            <span className='px-3'>Contacts</span>
          </a>
          
          


          <a href="../" className="font-semibold text-xl items-center rounded-lg text-gray-900 px-4 py-3 block
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                        <i className="fa-solid fa-square-poll-vertical"></i>
            <span className='px-3' onClick={()=>removeUser()}>Logout</span>
          </a>
          


        </div>
    
    
    </>
  )
}

export default HeaderUp