import React from 'react'
// import pic from '../Images/pic.jpg';
import Banner from './Banner';
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useGetAboutQuery, useGetBlogQuery, useGetClassQuery, useGetCourseByNameQuery, useGetSuccessQuery, useGetTestimonialQuery } from '../Admin-Pages/AdminApi/CourseNameApi';
import { baseurls } from '../Admin-Pages/AdminApi/BaseUrl';




export const Home = () => {




  const {data:coursede}=useGetClassQuery();
  const {data:successdet}=useGetSuccessQuery();
  const {data:testimonialdet}=useGetTestimonialQuery();
  const {data:blogsdat}=useGetBlogQuery();
  const {data:aboutdat}=useGetAboutQuery();
  const {data:clnum}=useGetCourseByNameQuery();

  
  console.log(coursede);
  console.log(successdet);
  console.log(testimonialdet);
  console.log(blogsdat);
  console.log(aboutdat);
  console.log(clnum);

  return (
    <div>
      <Banner />

      
      <div className='bg-teal-50 ml-[11%] mr-[9%] '>

        <div className='grid grid-cols-4 md:grid md:grid-cols-1'>

          <div className='p-4 col-span-2'>
            <h1 className='text-4xl font-extrabold'>About Us</h1>
            {aboutdat && aboutdat.about.map((abco)=>{
              return (

                <h1 key={abco._id} className='p-4 text-lg'>
                   {abco.abtdescription}
                </h1>

              )
            })}
{/* 
<h1 className='p-4 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quod sint, soluta incidunt est iusto alias saepe porro dolor aperiam perferendis ducimus veniam optio quisquam delectus sapiente recusandae nulla sit!Praesentium quod sint, soluta incidunt est iusto alias saepe porro dolor aperiam perferendis ducimus veniam optio quisquam delectus sapiente recusandae nulla sit! ss</h1> */}

          </div>

          <div className='bg-blue-500 text-white'>
            <div className='p-4'>
              <i className="fa-solid fa-graduation-cap text-4xl p-2"></i>
              <p className='text-3xl font-extrabold p-2'>10</p>
              <h1 className='text-xl '>Professional & Qualified Teachers</h1>
            </div>
          </div>

          <div className='bg-blue-400 text-white'>
            <div className='p-4'> 
              <i className="fa-solid fa-desktop text-4xl p-2"></i>
              <p className='text-3xl font-extrabold p-2'>10</p>
              <h1 className='text-xl'>Total Courses</h1>
            </div>
          </div>

        </div>

      </div>



        {/* Courses List */}


        <div className='mt-6 mx-[11%] pb-10'>

          <h1 className='text-4xl py-7 font-semibold'>Our Courses</h1>


          <div className='grid grid-cols-3 md:grid md:grid-cols-1 gap-5'>

          {coursede && coursede.ClassesCourses.map((allco)=>{
            return(

              
            <div key={allco?._id}>
                <Card className="w-full max-w-[26rem] shadow-lg">
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src={`${baseurls}${allco.ClassImage}`}
                        alt="ui/ux review check"
                        className='h-60 w-full'
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-extrabold">
                        {allco?.ClassName}
                        </Typography>
                      </div>
                      <Typography color="gray">
                          <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 text-sm font-medium'>{allco?.ClassDuration}</span>


                      </Typography>
                      <Typography color="gray">
                          <i className="fa-solid fa-clock "></i> State: <span className='pl-1 text-sm font-medium'>{allco?.ClassState}</span>


                      </Typography>

                      
                      
                    </CardBody>
                    <CardFooter className="pt-1">
                      <Button size="lg" fullWidth={true}>
                      Learn More
                      </Button>
                    </CardFooter>
                </Card>          
            </div>

            )
          })}





          </div>


          <div className='mt-[8%] mb-12 text-center'>
           <NavLink className='border-2 border-blue-800 text-blue-800 font-semibold text-3xl p-5 rounded-lg' to="/course">All Courses <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink>        
         </div>


        </div>


        {/* Testimonials */}




        

        {/* Course State */}

        {clnum && clnum.course.map((conums)=>
      {

        return(
          
      

        <div className='bg-blue-50 py-11' key={conums._id}>

            <div className='mt-6 mx-[11%] pb-10'>
              <div className='text-center'>

                  <h1 className='text-5xl py-2'><i className="fa-solid fa-laptop-file"></i></h1>
                  <h1 className='text-2xl py-7 font-normal'>Our Course State</h1>

              </div>

            <div className='grid grid-cols-3 md:grid-cols-1 gap-5 py-10'>

              <div className='rounded-3xl bg-blue-500 text-white'>

                <h1 className='text-6xl text-center pt-10 '><i className="fa-solid fa-person-chalkboard hover:text-7xl duration-300"></i></h1>

                <div className=''>
                  <h1 className='text-4xl px-[42%] font-bold pt-10 '>{conums.runclass}</h1>
                  <h1 className='px-[20%] text-center text-xl py-5'>Running Class</h1>
                </div>

              </div>

              <div className='rounded-3xl bg-red-300 text-white'>

                <h1 className='text-6xl text-center pt-10'><i className="fa-solid fa-school hover:text-7xl duration-300"></i></h1>

                <div className=''>
                  <h1 className='text-4xl px-[42%] font-bold pt-10 '>{conums.courseTotal}</h1>
                  <h1 className='px-[20%] text-center text-xl py-5'>Total Courses</h1>
                </div>

              </div>

              <div className='rounded-3xl bg-green-500 text-white'>

                <h1 className='text-6xl text-center pt-10'><i className="fa-solid fa-graduation-cap hover:text-7xl duration-300"></i></h1>

                <div className=''>
                  <h1 className='text-4xl px-[42%] font-bold pt-10 '>{conums.studentTotal}</h1>
                  <h1 className='px-[20%] text-center text-xl py-5'>Students</h1>
                </div>

              </div>

            </div>
              
            </div>

        </div>


        )
        }

      )}






        {/* Course State End */}



        {/* Success Stories */}


        <div className='mt-6 mx-[11%] pb-10  shadow-lg border-2 rounded-3xl'>

            <div className='text-center'>
            <i className="fa-solid fa-crosshairs text-5xl pt-4 pb-10"></i>
              <h1 className='text-3xl py-2 font-semibold'>Success Stories</h1>
              <p className='text-xl pt-4 pb-10'>By providing valuable guidance and knowledge we inspire you to achieve professional as well as personal growth</p>
            </div>

            <div className='grid grid-cols-3 md:grid md:grid-cols-1 gap-2 px-10'>


              {successdet && successdet.SuccessStory.map((stsuccess)=>{
                return(

                  <div  key={stsuccess?._id}>
                    <Card className="w-full max-w-[26rem] shadow-lg border-2 my-5">
                    
    
                        <div className='p-3'>  
                          
                          <img
                            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="ui/ux review check" className='rounded-[100%] w-[50%]'
                          />
    
                        </div>
                          
                        <CardBody>
    
                          <Typography color="gray">
                              Working on:
                          </Typography>
    
                          <Typography className="font-semibold">
                          {stsuccess?.SuccessPlace}
                          </Typography>
    
    
                        <div className='py-3'>
    
                          <Typography>
                          {stsuccess?.SuccessName}
                          </Typography>
    
    
                          <Typography>
                          {stsuccess?.SuccessJob}
                          </Typography>
    
                        </div>
    
                        <div>
                          <Typography>
    
                          {stsuccess?.SuccessDate}
    
                          </Typography>
                        </div>
    
    
                          
                          
                          
                          
                        </CardBody>
    
                        
                        
                    </Card>          
                  </div>
  

                )
              })}










            </div>




            
          
            <div className='mt-[8%] mb-12 text-center'>
              <NavLink className='border-2 border-black text-black font-semibold text-3xl p-5 rounded-lg hover:border-black hover:text-white hover:bg-blue-gray-400' to="/gallery">Our Success Stories <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink>        
            </div>

        </div>


        
        {/* Success Stories End */}


        {/* Testimonials  */}
        <div className='mt-[5%]'>

            <div className='pt-10 bg-gray-50'>

                <div className='mt-6 mx-[11%] pb-10'>

                  
                    <div className='text-center'>
                        <i className="fa-solid fa-crosshairs text-5xl pt-4 pb-10"></i>
                        <h1 className='text-3xl py-2 font-semibold'>What Our Students Say? ? ?</h1>
                        <p className='text-xl pt-4 pb-10'>Our students are our pride who keep motivating every professionals to be a part of us in their professional journey to achieve their goals</p>
                    </div>




                    {/* carousel */}

                    <OwlCarousel className='owl-theme ' loop margin={10} nav>
                        
                        
            {testimonialdet && testimonialdet.testimonial.map((sttestimonial)=>{

                return(
                  
                  <div className='item py-10' key={sttestimonial?._id}>

                      <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50 border-2">
                          
                          <CardBody>

                            <div className='py-4'>

                              <Typography color="blue-gray" className="font-normal text-justify">
                             {sttestimonial?.TestiMsg}
                              </Typography>

                            </div>

                            <div className="mb-3 flex items-center justify-around">
                              
                            <div>
                              <Typography variant="h5" color="blue-gray" className="font-semibold">
                                {sttestimonial?.TestiCourse}
                              </Typography>
                            
                              <Typography color="blue-gray" className="font-normal">
                                {sttestimonial?.TestiName}
                              </Typography>
                            
                              <Typography color="blue-gray" className="font-normal">
                              {sttestimonial?.TestiCourse}
                              </Typography>
                            </div>
                            
                            </div>

                            
                            
                          </CardBody>
                      </Card>
                      
                  </div>
                )

            }) }
                        
                        
                        
                      
                        
                        
                        
                        


                    </OwlCarousel>


                  
                    <div className='mt-[8%] mb-12 text-center'>
                      <NavLink className='border-2 border-black text-black font-semibold text-3xl p-5 rounded-lg hover:border-black hover:text-white hover:bg-blue-gray-400' to="/testimonial">All Testimonials <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink>        
                    </div>

                </div>

            </div>
        </div>
        {/* Testimonials End */}



        {/* Subscribe */}


        <div className='bg-red-100'>

                <div className='text-center p-[6%]'>
                  <h1 className='text-6xl md:text-3xl font-semibold'>Our Updates</h1>
                  <h1 className='text-6xl md:text-3xl font-semibold pt-3'>to your inbox</h1>

                  <div className=''>

                  <p className='text-3xl md:text-2xl py-8 '>Be the first one to get every updates from us</p>

                  <div className='flex justify-center mt-5'>
                  <div className='w-[30%]' >
                      <form action="#" className='bg-white rounded-l-sm'>
                        <Input className='border-none rounded-l-5xl' type='email' label="Email Address"/>
                        
                      </form>
                      
                    </div>
                    <Button className=''>Subscribe</Button>
                    </div>


                </div>




                      
                </div>

        </div>


          {/* Subscribe End */}

          
      {/* Blogs */}


      <div className='px-[10%]  py-[1%]'>

        <h1  className='text-3xl font-bold pb-[5%] text-center'>Our Blogs</h1>

          <div className='grid gap-4 grid-cols-3  md:grid md:grid-cols-1 md:grid-lg-2'>


          {blogsdat && blogsdat.blog.map((blogdet)=>{



              return(

                            
                <div className='my-10' key={blogdet?._id}>


                  <Card className='mt-6 w-96 overflow-hidden'>

                      <CardHeader floated={false}
                        shadow={false}
                        color="transparent"
                        className="relative h-56 m-0 rounded-none">
                        
                      <img src={`${baseurls}${blogdet.BlogImage}`} alt='Blog pic'    className="object-cover" />

                      </CardHeader>


                      <CardBody className='pt-8'>

                        <Typography variant="h4" color="blue-gray">
                        {blogdet?.BlogName}
                        </Typography>

                        <Typography variant="lead" color="gray" className="mt-3 pt-4 font-normal">
                        {blogdet?.BlogContent}
                        </Typography>


                      </CardBody>

                      <CardFooter>
                        
                        <NavLink className="hover:text-orange-600 duration-500 text-lg"
                        
                        to={`/single_blog/${blogdet?._id}`} >Read More</NavLink>

                      </CardFooter>




                  </Card>

                </div>

              )




          })}




          </div>

          
          <div className='mt-[8%] mb-12 text-center'>
           <NavLink className='border-2 border-blue-800 text-blue-800 font-semibold text-3xl p-5 rounded-lg' to="/blog">Our Blogs <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink>        
         </div>
      </div>



      {/* Blogs End */}



    </div>
  )
}
