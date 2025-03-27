import { Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGetBlogQuery } from '../Admin-Pages/AdminApi/CourseNameApi';
import { baseurls } from '../Admin-Pages/AdminApi/BaseUrl';

const Blog = () => {

  const {data}= useGetBlogQuery();
  console.log(data);


  return (
    <>
    

    
      <div className='bloggs'>


            <div className=' py-[6%] pl-[12%] '>

              <h1 className='text-4xl text-white font-extrabold  pb-5'>Blogs</h1>
              
              
              <div className='pt-[10%]'>
              <Breadcrumbs >
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
                <NavLink href="#" className="font-bold">Blogs</NavLink>
              </Breadcrumbs>
              </div>

            </div>


      </div>



{/* Blogs */}


  <div className='px-[10%]  py-[1%]'>

    <h1  className='text-3xl font-bold py-[5%] text-center'>Our Blogs</h1>

    <div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-1'>


      {data && data.blog.map((allblogs)=>{
        return(
            <div className='my-10' key={allblogs?._id}>


                <Card className='overflow-hidden h-[70%]'>

                    <CardHeader floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none">
                      
                    <img src={`${baseurls}${allblogs.BlogImage}`} alt='Blog pic'    className="w-full h-full object-cover" />

                    </CardHeader>


                    <CardBody className='pt-8'>

                      <Typography variant="h4" color="blue-gray">
                      {allblogs?.BlogName}
                      </Typography>

                      <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal">
                      {allblogs?.BlogContent}
                      </Typography>


                    </CardBody>

                    <CardFooter>
                      
                      <NavLink className="hover:text-orange-600 duration-500 text-lg" to='/single_blog' >Read More</NavLink>

                    </CardFooter>




                </Card>

            </div>

        )

      })}






    </div>


  </div>



{/* Blogs End */}

    
    
    
    </>
  )
}

export default Blog