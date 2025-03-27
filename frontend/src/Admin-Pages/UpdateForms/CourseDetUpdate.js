import { Button, Input, Textarea } from '@material-tailwind/react';
import { useFormik } from 'formik';
import React from 'react'
import {  useUpdateCourseDetailsMutation } from '../AdminApi/CourseNameApi';

const CourseDetUpdate = ({data}) => {

  console.log(data);
  const [updateCorDet]=useUpdateCourseDetailsMutation();



  
  const formik=useFormik({
    initialValues: {
      corsname: data.CourseDetails.CourseName,
      corsfullnam: data.CourseDetails.CourseSkName,
      corsdura: data.CourseDetails.CourseDuration,
      corstate: data.CourseDetails.ClassState,
      corspath: data.CourseDetails.CareerAfter,
      corsdesp: data.CourseDetails.CourseDetails,
      corsben: data.CourseDetails.CourseBenefits,
      corscont: data.CourseDetails.CourseContents
    },
    // validationSchema: registerSchema,

    onSubmit: async (values,resetForm) => {
      try {



        const formData = new FormData();
        formData.append('corsname', values?.corsname);
        formData.append('corsfullnam', values.corsfullnam);
        
        formData.append('corsdura', values.corsdura);
        formData.append('corstate', values.corstate);
        formData.append('corspath', values.corspath);
        
        formData.append('corsdesp', values.corsdesp);
        formData.append('corsben', values.corsben);
        formData.append('corscont', values.corscont);
        
        console.log(values);
     

        
        const submittedData = {
          formData,
          id: data.CourseDetails._id,
        };


        const result = await updateCorDet(submittedData).unwrap();
        formik.resetForm();
        // if ((result.status) === 'success') {
        //   toast.success(result.message);
        //   nav('/login');
        // } else {
        //   toast.error(result.message);
        // }
      } catch (e) {
        // toast.error(`${e}`);
      }
    }
  });




  return (
    <>
    
      

{/* Add Package */}

      <div>

        <form className="mt-8 mb-2  max-w-screen-lg sm:w-96"  onSubmit={formik.handleSubmit}>
            <div className="mb-4 flex gap-6">
              
              <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Name</h1>

                  <Input type='text' size="lg" label="Name" name='corsname'  onChange={formik.handleChange} value={formik.values.corsname} />
              </div>

              
              <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Full Name</h1>

                  <Input type='text' size="lg" label="Name" name='corsfullnam' onChange={formik.handleChange} value={formik.values.corsfullnam}   />
              </div>



              
              <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Duration</h1>

                  <Input type='text' size="lg" label="Name" name='corsdura' onChange={formik.handleChange} value={formik.values.corsdura}   />
              </div>
              
              <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course State</h1>

                  <Input type='text' size="lg" label="Name" name='corstate' onChange={formik.handleChange} value={formik.values.corstate}  />
              </div>
              
              <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Future Career</h1>

                  <Input type='text' size="lg" label="Name" name='corspath' onChange={formik.handleChange} value={formik.values.corspath}  />
              </div>
              




              
            </div>

            
            <div>

              <h1  className='text-xl font-bold pb-5 '>Course Description</h1>


              <Textarea label='Description' className='w-full  bg-white' name='corsdesp' onChange={formik.handleChange} value={formik.values.corsdesp} ></Textarea>

            </div>



            
            <div>

              <h1  className='text-xl font-bold pb-5 '>Course Benifits</h1>


              <Textarea label='Course Benefits' className='w-full  bg-white' name='corsben' onChange={formik.handleChange} value={formik.values.corsben} ></Textarea>

            </div>



            
            <div>

              <h1  className='text-xl font-bold pb-5 '>Course Contents</h1>


              <Textarea label='Course Content' className='w-full  bg-white' name='corscont'  onChange={formik.handleChange} value={formik.values.corscont} ></Textarea>

            </div>




            <Button
             type='submit' className='mt-5'>Submit</Button>

        </form>


      </div>
          
    </>
  )
}

export default CourseDetUpdate