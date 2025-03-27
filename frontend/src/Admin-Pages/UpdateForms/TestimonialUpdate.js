import { Button, Input, Textarea } from '@material-tailwind/react';
import { useFormik } from 'formik';
import React from 'react'
import {useUpdateTestimoMutation } from '../AdminApi/CourseNameApi';
import { baseurls } from '../AdminApi/BaseUrl';

const TestimonialUpdate = ({data}) => {

  console.log(data);
  const [updateTestimony]=useUpdateTestimoMutation();

  
  const formik = useFormik({
    initialValues: {
      testimonialperson: data.testimonial.TestiName,
      testimonialcourse: data.testimonial.TestiCourse,
      testimonialdate: data.testimonial.TestiDate,
      testimonialmessage: data.testimonial.TestiMsg,
      testimonialimage: data.testimonial.TestiImage
    },
    // validationSchema: registerSchema,

    onSubmit: async (values,resetForm) => {
      try {



        const formData = new FormData();
        formData.append('testimonialperson', values?.testimonialperson);
        formData.append('testimonialcourse', values.testimonialcourse);
        formData.append('testimonialdate', values.testimonialdate);
        formData.append('testimonialmessage', values.testimonialmessage);
        formData.append('testimonialimage', values.testimonialimage);
        console.log(values);
     
        
        const submittedData = {
          formData,
          id: data.testimonial._id,
        };

        const result = await updateTestimony(submittedData).unwrap();
        formik.resetForm();
      } catch (e) {
        // toast.error(`${e}`);
      }
    }
  });


  return (
    
    <div>

          <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
              <div className="mb-4 flex gap-6">
                
                <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course</h1>

                    <Input 
                      type='text' 
                      size="lg" 
                      name='testimonialcourse' label="Course"  
                      onChange={formik.handleChange} 
                      value={formik.values.testimonialcourse}  />
                </div>


                <div>
                  <h1  className='text-xl font-bold pb-5 pt-[5%] '>Person</h1>

                  <Input 
                    type='text' 
                    size="lg" 
                    label="Name" 
                    name='testimonialperson' 
                    onChange={formik.handleChange} 
                    value={formik.values.testimonialperson}  />
                </div>
                

                <div>
                  <h1  className='text-xl font-bold pb-5 pt-[5%] '>Date</h1>

                  <Input 
                    type='date' 
                    size="lg" 
                    name='testimonialdate' 
                    onChange={formik.handleChange} 
                    value={formik.values.testimonialdate}  />

                </div>


                <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Image</h1>
                

                 
                  {
                    formik.values.imagePreview==null?(
                      <img
                        className="w-[60%] h-[150px]  mb-6  object-cover"
                        src={`${baseurls}${data.testimonial.TestiImage}`} 
                      />
                    ):(
                      <img
                        className="w-[60%] h-[150px]  mb-6  object-cover"
                        src={`${formik.values.imagePreview}`} 
                      />
                    )
                  }

                  <Input type='file'
                    label='Testimonial Image' name='testimonialimage'
                    accept='image/*'
                    onChange={
                      (e)=>{
                        const testo=e.target.files[0];
                        formik.setFieldValue('testimonialimage',testo);

                        const res=['image/png','image/jpg','image/jpeg'].includes(testo.type);
                        if(res)
                        {
                          const reader=new FileReader();
                          reader.readAsDataURL(testo);
                          reader.addEventListener('load', ()=>{
                            formik.setFieldValue('imagePreview',reader.result)
                          })
                        }
                        else{
                          formik.setFieldValue('imagePreview',data.testimonial.TestiImage)
                        }

                      }
                    }
                  />
                  {
                    formik.errors.testimonialimage && formik.touched.testimonialimage && <h2 className='pt-2'>
                      {
                        formik.errors.testimonialimage
                      }
                    </h2>
                  }

              
                </div>

                
              </div>

              
              <div>

                <h1  className='text-xl font-bold pb-5 '>Add Testimonial Description</h1>


                <Textarea 
                  label='Description' 
                  className='w-full  bg-white' name='testimonialmessage' 
                  onChange={formik.handleChange} 
                  value={formik.values.testimonialmessage} ></Textarea>

              </div>

              <Button type='submit' className='mt-5'>Submit</Button>

          </form>


    </div>
  )
}

export default TestimonialUpdate