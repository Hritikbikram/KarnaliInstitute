import React from 'react';
import Footer from '../Components/Footer';
import { NavLink, useParams } from 'react-router-dom';
import { useGetBlogQuery, useGetBlogbyIdQuery } from '../Admin-Pages/AdminApi/CourseNameApi';
import { baseurls } from '../Admin-Pages/AdminApi/BaseUrl';


const BlogSingle = () => {
  const {id}=useParams();
  const {data:singblogdat}=useGetBlogbyIdQuery(id);
  const {data:blogdet}=useGetBlogQuery();
  console.log(blogdet);
  console.log(singblogdat);

  return (
    <>


             <div>

          <div className='px-[10%] pt-[5%]'>


            <div className='grid grid-cols-3 pb-12'>
              <div className='col-span-2'>
                
                

                  <img src={`${baseurls}${singblogdat?.blog.BlogImage}`} alt="Blog" className='py-5' />

                  <div className='grid grid-cols-2 text-lg'>
                      <div className='flex gap-4'>

                        <i className="fa-solid fa-pen-nib pt-2"></i>

                        <p>{singblogdat?.blog.BlogAuthor}</p>


                      </div>

                      <div className='flex gap-4'>
                        <i className="fa-regular fa-calendar-days pt-1"></i>
                        <p>{singblogdat?.blog.BlogDate}</p>
                      </div>

                  </div>


                  
                  <div className='py-[2%]'>

                      <h1 className='text-3xl font-bold py-5'>{singblogdat?.blog.BlogName}</h1>

                      <p>{singblogdat?.blog.BlogContent}</p>


                  </div>


              </div>

              <div className='px-10'>

                <h1 className='text-xl font-bold py-5'>Recent Post</h1>

                {blogdet && blogdet.blog.map((allblogs)=>{
                  return(

                    <div key={allblogs?._id}>


                    <div className='flex gap-3 py-3'>
                      <img src={`${baseurls}${allblogs.BlogImage}`} className='w-[40%]' alt="blogs" />
                      <div>
                        <NavLink to={`/single_blog/${allblogs?._id}`} className='text-md font-bold'>{allblogs?.BlogName}</NavLink>
                        <p className='text-gray-700'>{allblogs?.BlogDate}</p>
                      </div>
                      

                    </div>




                </div>


                  )
                })}



                
              </div>


            </div>

            


          </div>





        </div>

 
<Footer/>

    </>
  )
}

export default BlogSingle