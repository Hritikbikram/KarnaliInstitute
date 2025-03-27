import { Button, Input } from '@material-tailwind/react';
import React from 'react'
import HeaderUp from '../AdComponents/HeaderUp'

const UpCourseState = () => {
  return (
    
    <>


        <div className='grid grid-cols-6 bg-teal-50'>

            <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
              <HeaderUp />
            </div>


            <div className='bg-teal-50 col-span-5 p-[2%]'>
              
              <h1  className='text-4xl font-bold pb-5'>Update Course State</h1>



              {/* Add About */}

              <div>

                  <form className="mt-8 mb-2  max-w-screen-lg sm:w-96">
                      <div className="mb-4 flex gap-6">
                        
                        <div>
                          <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Name </h1>

                            <Input type='text' size="lg" label="Course" />
                        </div>

                        
                        <div>
                          <h1  className='text-xl font-bold pb-5 pt-[5%] '>Total Students </h1>

                            <Input type='text' size="lg" label="Students" />
                        </div>

                        
                      </div>

                      

                      <Button className='mt-5'>Submit</Button>

                  </form>


              </div>
                
            {/* Add About End */}





              
            </div>


        </div>



        
    
    </>
    

  )
}

export default UpCourseState