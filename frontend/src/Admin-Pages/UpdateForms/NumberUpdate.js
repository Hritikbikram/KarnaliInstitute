import { Input, Button } from '@material-tailwind/react';
import { useFormik } from 'formik';
import React from 'react'
import { useUpdatesinnumMutation } from '../AdminApi/CourseNameApi';
const NumberUpdate = ({data}) => {

  console.log(data);
  const [updateNum]=useUpdatesinnumMutation();

  const formik = useFormik({
    initialValues: {
      runclass:data.courstatus.runclass,
      courseTotal:data.courstatus.courseTotal,
      teacherTotal:data.courstatus.teacherTotal,
      studentTotal:data.courstatus.studentTotal,
    },
    // validationSchema: registerSchema,

    onSubmit: async (values,resetForm) => {
      try {
        const formData = new FormData();
        formData.append("runclass", values?.runclass);
        formData.append("courseTotal", values.courseTotal);
        formData.append("teacherTotal", values.teacherTotal);
        formData.append("studentTotal", values.studentTotal);

        const submittedData = {
          formData,
          id: data.courstatus._id,
        };

        const result = await updateNum(submittedData).unwrap();
        console.log(result);
      } catch (e) {
        // toast.error(`${e}`);
      }
    },
  });




  return (
    
    <div className='grid grid-cols-6 bg-teal-50'>



        <div className='bg-teal-50 col-span-5 p-[2%]'>
          


          {/* Add Testimonials */}


            <div>

              <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
                  <div className="mb-4 flex gap-6">
                    
                    <div>
                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Running Classes</h1>

                        <Input type='text' size="lg" label="Running Classes" name="runclass" onChange={formik.handleChange} value={formik.values.runclass} />
                    </div>

                    
                    <div>
                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Total Courses </h1>

                        <Input type='text' size="lg" label="Courses" name="courseTotal" onChange={formik.handleChange} value={formik.values.courseTotal} />
                    </div>

                    
                    <div>
                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Total Teachers </h1>

                        <Input type='text' size="lg" label="Teachers" name="teacherTotal" onChange={formik.handleChange} value={formik.values.teacherTotal} />
                    </div>

                    

                    
                    <div>
                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Total Students </h1>

                        <Input type='text' size="lg" label="Students" name="studentTotal" onChange={formik.handleChange} value={formik.values.studentTotal} />
                    </div>

                    
                    
                  </div>

                  

                  <Button type='submit' className='mt-5'>Submit</Button>

              </form>


            </div>
            
        </div>


    </div>

  )
}

export default NumberUpdate