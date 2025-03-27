import React from 'react'
import { useParams } from 'react-router';
import { useGetBlogbyIdQuery } from '../AdminApi/CourseNameApi';
import HeaderUp from '../AdComponents/HeaderUp'
import BlogUpdate from '../UpdateForms/BlogUpdate';


const UpBlogs = () => {
  


  const {id}=useParams();
  const {data}=useGetBlogbyIdQuery(id);
  

  return (
    
    <>


        <div className='grid grid-cols-6 bg-teal-50'>

            <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
              <HeaderUp />
            </div>


            <div className='bg-teal-50 col-span-5 p-[2%]'>
              
              <h1  className='text-4xl font-bold pb-5'>Update Blogs</h1>


              {/* Add About */}

              {data !== undefined && <BlogUpdate data={data} />}

                
            {/* Add About End */}





              
            </div>


        </div>



        
    
    </>

    


  )
  





}

export default UpBlogs