import { Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Typography,Button} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

import React from 'react'
import { useGetClassQuery } from '../Admin-Pages/AdminApi/CourseNameApi';
import { baseurls } from '../Admin-Pages/AdminApi/BaseUrl';

const Courses = () => {

  const {data}= useGetClassQuery();
  console.log(data);
  return (
      
      <>



                
      <div className='sublist'>


          <div className=' py-[6%] pl-[12%]'>

            <h1 className='text-4xl text-white font-extrabold  pb-5'>Our Courses</h1>
            
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
                  <NavLink href="#" className="font-bold">Courses</NavLink>
                </Breadcrumbs>

            </div>

          </div>


      </div>


{/* Our Pakages */}

      <div className='px-[10%] py-12'>








          <div className='grid grid-cols-3 gap-7'>


            {data && data.ClassesCourses.map((allcourse)=>{
              return(
                
                  <div key={allcourse?._id}>
                    <Card className="w-full max-w-[26rem] shadow-lg">
                              <CardHeader floated={false} color="blue-gray">
                                <img className='h-80 w-full'
                                  src={`${baseurls}${allcourse?.ClassImage}`}
                                  alt="ui/ux review check"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                
                              </CardHeader>
                              <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                  <Typography variant="h5" color="blue-gray" className="font-extrabold">
                                  {allcourse?.ClassName}
                                  </Typography>
                                </div>
                                <Typography color="gray">
                                    <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 text-sm font-medium'>{allcourse?.ClassDuration}</span>


                                </Typography>
                                
                                <Typography color="gray">
                                    <i className="fa-solid fa-comment "></i> State: <span className='pl-1 text-sm font-medium'>{allcourse?.ClassState}</span>


                                </Typography>

                                
                                
                              </CardBody>
                              <CardFooter className="pt-1">
                                <Button size="lg" fullWidth={true}>
                                <NavLink to={`/course/details/${allcourse?._id}`}>Learn More</NavLink>
                                </Button>
                              </CardFooter>
                    </Card>
                  </div>


              )
            })}
                        
                        




                        
            
          </div>






      </div>



{/* Our Pakages End */}



      </>

  )
}

export default Courses