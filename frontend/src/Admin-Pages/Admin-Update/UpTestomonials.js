import React from 'react'
import HeaderUp from '../AdComponents/HeaderUp'
import { useParams } from 'react-router';
import { useGetTestimonialbyIdQuery } from '../AdminApi/CourseNameApi';
import TestimonialUpdate from '../UpdateForms/TestimonialUpdate';

const UpTestomonials = () => {

  const {id}=useParams();
  const {data}=useGetTestimonialbyIdQuery(id);
  

  return (
    
    <>


        <div className='grid grid-cols-6 bg-teal-50'>

            <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
              <HeaderUp />
            </div>


            <div className='bg-teal-50 col-span-5 p-[2%]'>
              
              <h1  className='text-4xl font-bold pb-5'>Update Testimonials</h1>


asdd
              {/* Add About */}

              {data !== undefined && <TestimonialUpdate data={data} />}

                
            {/* Add About End */}





              
            </div>


        </div>



        
    
    </>

    


  )
}

export default UpTestomonials