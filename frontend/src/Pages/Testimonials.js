import { Breadcrumbs, Card, CardBody, Typography} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useGetTestimonialQuery } from '../Admin-Pages/AdminApi/CourseNameApi';
import { baseurls } from '../Admin-Pages/AdminApi/BaseUrl';

const Testimonials = () => {

  const {data}=useGetTestimonialQuery();
  console.log(data);

  return (
    <>
    



                
    <div className='testimonials'>


      <div className=' py-[6%] pl-[12%]'>

        <h1 className='text-4xl text-white font-extrabold  pb-5'>What Our Students Say ? ? ? ?</h1>
        
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
              <NavLink href="#" className="font-bold">Testimonials</NavLink>
            </Breadcrumbs>

        </div>

      </div>


    </div>


{/* Our Pakages */}

<div className='px-[10%] py-12'>








<div className='grid grid-cols-3  md:grid md:grid-cols-1 md:grid-lg-2 gap-7'>
              

      {data && data.testimonial.map((testimoall)=>{
        return(

          
          <div key={testimoall?._id}>
          <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50">
              
              <CardBody>

                <div className='py-4'>

                  <Typography color="blue-gray" className="font-normal text-justify">
                  {testimoall?.TestiMsg}
                  </Typography>

                </div>

                <div className="mb-3 flex items-center justify-around">
                  
                <img
                                src={`${baseurls}${testimoall.TestiImage}`}
                                alt="ui/ux review check" className='rounded-[100%] h-[30%] w-[25%]'
                              />
                <div>
                  <Typography variant="h5" color="blue-gray" className="font-semibold">
                  {testimoall?.TestiCourse}
                  </Typography>
                
                  <Typography color="blue-gray" className="font-normal">
                  {testimoall?.TestiName}
                  </Typography>
                
                  <Typography color="blue-gray" className="font-normal">
                    Training Name
                  </Typography>
                </div>
                
                </div>

                
                
              </CardBody>
          </Card>

        </div>

        )
      })}
              
{/* 
              <div>
                <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50">
                    
                    <CardBody>

                      <div className='py-4'>

                        <Typography color="blue-gray" className="font-normal text-justify">
                         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas optio exercitationem et aliquam dicta dolorum unde voluptates deleniti ipsam. Voluptatibus reiciendis est blanditiis doloremque dolorum nam, at excepturi ipsam harum! "
                        </Typography>

                      </div>

                      <div className="mb-3 flex items-center justify-around">
                        
                      <img
                                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                      alt="ui/ux review check" className='rounded-[100%] h-[30%] w-[25%]'
                                    />
                      <div>
                        <Typography variant="h5" color="blue-gray" className="font-semibold">
                          Web Design Training
                        </Typography>
                      
                        <Typography color="blue-gray" className="font-normal">
                          @user-1
                        </Typography>
                      
                        <Typography color="blue-gray" className="font-normal">
                          Training Name
                        </Typography>
                      </div>
                      
                      </div>

                      
                      
                    </CardBody>
                </Card>

              </div>
              

              <div>
                <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50">
                    
                    <CardBody>

                      <div className='py-4'>

                        <Typography color="blue-gray" className="font-normal text-justify">
                         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas optio exercitationem et aliquam dicta dolorum unde voluptates deleniti ipsam. Voluptatibus reiciendis est blanditiis doloremque dolorum nam, at excepturi ipsam harum! "
                        </Typography>

                      </div>

                      <div className="mb-3 flex items-center justify-around">
                        
                      <img
                                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                      alt="ui/ux review check" className='rounded-[100%] h-[30%] w-[25%]'
                                    />
                      <div>
                        <Typography variant="h5" color="blue-gray" className="font-semibold">
                          Web Design Training
                        </Typography>
                      
                        <Typography color="blue-gray" className="font-normal">
                          @user-1
                        </Typography>
                      
                        <Typography color="blue-gray" className="font-normal">
                          Training Name
                        </Typography>
                      </div>
                      
                      </div>

                      
                      
                    </CardBody>
                </Card>

              </div>
              

              <div>
                <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50">
                    
                    <CardBody>

                      <div className='py-4'>

                        <Typography color="blue-gray" className="font-normal text-justify">
                         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas optio exercitationem et aliquam dicta dolorum unde voluptates deleniti ipsam. Voluptatibus reiciendis est blanditiis doloremque dolorum nam, at excepturi ipsam harum! "
                        </Typography>

                      </div>

                      <div className="mb-3 flex items-center justify-around">
                        
                      <img
                                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                      alt="ui/ux review check" className='rounded-[100%] h-[30%] w-[25%]'
                                    />
                      <div>
                        <Typography variant="h5" color="blue-gray" className="font-semibold">
                          Web Design Training
                        </Typography>
                      
                        <Typography color="blue-gray" className="font-normal">
                          @user-1
                        </Typography>
                      
                        <Typography color="blue-gray" className="font-normal">
                          Training Name
                        </Typography>
                      </div>
                      
                      </div>

                      
                      
                    </CardBody>
                </Card>

              </div>

 */}


</div>






</div>



{/* Our Pakages End */}

    
    
    
    </>
  )
}

export default Testimonials