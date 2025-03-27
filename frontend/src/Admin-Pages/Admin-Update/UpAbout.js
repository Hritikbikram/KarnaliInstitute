import React from 'react';
import HeaderUp from '../AdComponents/HeaderUp';
import { useParams } from 'react-router';
import {  useGetAboutbyIdQuery } from '../AdminApi/CourseNameApi';
import AboutUpdate from '../UpdateForms/AboutUpdate';

const UpAbout = () => {
  
  

  const{id}=useParams();
  const {data}=useGetAboutbyIdQuery(id);






  return (
    <>


        <div className='grid grid-cols-6 bg-teal-50'>

            <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
              <HeaderUp />
            </div>


            <div className='bg-teal-50 col-span-5 p-[2%]'>
              
              <h1  className='text-4xl font-bold pb-5'>Update About Us</h1>



               {/* Update About  */}

               {data !== undefined && <AboutUpdate data={data} />}
          
            {/* Upddate About End */}





              
            </div>


        </div>



        
    
    </>
  )

  
  


  
}

export default UpAbout