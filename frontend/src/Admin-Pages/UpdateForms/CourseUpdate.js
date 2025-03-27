import { Button, Input, Radio } from '@material-tailwind/react';
import { useFormik } from 'formik';
import React from 'react'
import {  useUpdateClassInfoMutation } from '../AdminApi/CourseNameApi';
import { baseurls } from '../AdminApi/BaseUrl';

const CourseUpdate = ({data}) => {

  console.log(data);
  const [updateClassEnt]=useUpdateClassInfoMutation()


  
  const formik= useFormik({

    initialValues: {
      classtitle:data.ClassesCourses.ClassName,
      classtime:data.ClassesCourses.ClassDuration,
      classst:data.ClassesCourses.ClassState,
      classdat:data.ClassesCourses.ClassDate,
      classcoimage:data.ClassesCourses.ClassImage
    },
    // validationSchema: registerSchema,

    onSubmit: async (values) => {
      try {

        const formData = new FormData();
        formData.append('classtitle', values?.classtitle);
        formData.append('classtime', values.classtime);
        formData.append('classst', values.classst);
        formData.append('classdat', values.classdat);
        formData.append('classcoimage', values.classcoimage);

        console.log(values);
        
        const submittedData = {
          formData,
          id: data.ClassesCourses._id,
        };
        const result = await updateClassEnt(submittedData).unwrap();
        formik.resetForm();
        // if (result.status === "success") {
        //   toast.success(result.message);
        //   nav("/login");
        // } else {
        //   toast.error(result.message);
        // }
      } catch (e) {
        console.log(e);
        // toast.error(`${e}`);
      }
    },

  });



  return (
    <div>


        
      <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit} >
          <div className="mb-4 flex gap-6">
            
            <div>
            <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Name</h1>

                <Input type='text' size="lg" name='classtitle' label="classtitle"  onChange={formik.handleChange} value={formik.values.classtitle}   />
            </div>


            <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Duration</h1>

              <Input type='text' size="lg" label="classtime" name='classtime'  onChange={formik.handleChange} value={formik.values.classtime} />
            </div>

            <div>

                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course State</h1>

                <Radio color="blue" label="Upcoming" name="classst" defaultChecked/>
                <Radio color="red" label="Running" name="classst"  onChange={formik.handleChange} value={formik.values.classst}/>

            </div>
            

            <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Commencement</h1>

              <Input type='date' size="lg" name='classdat'   onChange={formik.handleChange} value={formik.values.classdat} />

            </div>


            <div>
            <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Image</h1>
                        


                  {
                    formik.values.imagePreview==null?(
                      <img
                        className="w-[60%] h-[150px]  mb-6  object-cover"
                        src={`${baseurls}${data.ClassesCourses.ClassImage}`} 
                      />
                    ):(
                      <img
                        className="w-[60%] h-[150px]  mb-6  object-cover"
                        src={`${formik.values.imagePreview}`} 
                      />
                    )
                  }


                      <Input required type='file'
                        label='Class Image' name='classcoimage'
                        accept='image/*'
                        onChange={
                          (e)=>{
                            const classto=e.target.files[0];
                            formik.setFieldValue('classcoimage',classto);

                            const res=['image/png','image/jpg','image/jpeg'].includes(classto.type);
                            if(res)
                            {
                              const reader=new FileReader();
                              reader.readAsDataURL(classto);
                              reader.addEventListener('load', ()=>{
                                formik.setFieldValue('imagePreview',reader.result)
                              })
                            }
                            else{
                              formik.setFieldValue('imagePreview',null)
                            }

                          }
                        }
                      />
                      {
                        formik.errors.classcoimage && formik.touched.classcoimage && <h2 className='pt-2'>
                          {
                            formik.errors.classcoimage
                          }
                        </h2>
                      }
          
            </div>

            
          </div>

          

          <Button type='submit' className='mt-5'>Submit</Button>

      </form>




    </div>
  )
}

export default CourseUpdate