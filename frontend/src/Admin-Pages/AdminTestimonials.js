import { Button, Input, Textarea } from '@material-tailwind/react'
import React from 'react'
import Header from './AdComponents/Header'
import { useCreateTestimonialMutation, useDeletetestimonialdataMutation, useGetTestimonialQuery } from './AdminApi/CourseNameApi'
import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom'
import { toast } from "react-toastify";


const AdminTestimonials = () => {

  const {data}=useGetTestimonialQuery();
  console.log(data);

  const [createTestimonialsDat]=useCreateTestimonialMutation();

  const [testimonialDa]=useDeletetestimonialdataMutation();


  const formik = useFormik({
    initialValues: {
      testimonialperson: "",
      testimonialcourse: "",
      testimonialdate: "",
      testimonialmessage: "",
      testimonialimage: ""
    },
    // validationSchema: registerSchema,

    onSubmit: async (values) => {
      try {



        const formData = new FormData();
        formData.append('testimonialperson', values?.testimonialperson);
        formData.append('testimonialcourse', values.testimonialcourse);
        formData.append('testimonialdate', values.testimonialdate);
        formData.append('testimonialmessage', values.testimonialmessage);
        formData.append('testimonialimage', values.testimonialimage);
        console.log(values);
     

        const result = await createTestimonialsDat(formData).unwrap();
        if ((result.status) === 'success') {
          toast.success(result.message);
        formik.resetForm();
        } else {
          toast.error(result.message);
        }
      } catch (e) {
        toast.error(`${e}`);
      }
    }
  });
  

  const deleteTestimonial=async(id)=>{
    const result =await testimonialDa({id:id}).unwrap();

    if(result)
    {
      toast.success(result.message);
      window.location.reload();
    }
    else
    {
      toast.error(result.message);
    }
  }

  return (
    
    <div className='grid grid-cols-6 bg-teal-50'>

    <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
      <Header />
    </div>


    <div className='bg-teal-50 col-span-5 p-[2%]'>
      
      <h1  className='text-4xl font-bold pb-5'>Testimonials</h1>


      {/* Add Testimonials */}

      <div>

          <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
              <div className="mb-4 flex gap-6">
                
                <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course</h1>

                    <Input type='text' size="lg" name='testimonialcourse' label="Course"  onChange={formik.handleChange} value={formik.values.testimonialcourse}  />
                </div>


                <div>
                  <h1  className='text-xl font-bold pb-5 pt-[5%] '>Person</h1>

                  <Input type='text' size="lg" label="Name" name='testimonialperson' onChange={formik.handleChange} value={formik.values.testimonialperson}  />
                </div>
                

                <div>
                  <h1  className='text-xl font-bold pb-5 pt-[5%] '>Date</h1>

                  <Input type='date' size="lg" name='testimonialdate' onChange={formik.handleChange} value={formik.values.testimonialdate}  />

                </div>


                <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Image</h1>
                

                  {
                    formik.values.imagePreview && <img className="w-[60%] h-[150px]  mb-6  object-cover" src={
                      `${formik.values.imagePreview}`
                    } />
                  }

                  <Input required type='file'
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
                          formik.setFieldValue('imagePreview',null)
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


                <Textarea label='Description' className='w-full  bg-white' name='testimonialmessage' onChange={formik.handleChange} value={formik.values.testimonialmessage} ></Textarea>

              </div>

              <Button type='submit' className='mt-5'>Submit</Button>

          </form>


      </div>

{/* Add Testimonials End */}


{/* Testimonial Table */}

<h1  className='text-4xl font-bold py-5'>Testimonials List</h1>


<div className='pt-5'>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className='text-xl'>S.No</th>
            <th className='text-xl'>Name</th>
            <th className='text-xl'>Course</th>
            <th className='text-xl'>Date</th>
            <th className='text-xl'>Testimonial</th>
            <th className='text-xl'>Image</th>
            <th className='text-xl'>Action</th>
          </tr>
        </thead>
        <tbody>

        {data && data.testimonial.map((testdet)=>{
                  return(

          
          
          <tr className='text-center' key={testdet?._id}>
            <td className='text-lg p-2'>Place 1</td>
            <td className='text-lg p-2'>{testdet?.TestiName}</td>
            <td className='text-lg p-2'>{testdet?.TestiCourse}</td>
            <td className='text-lg p-2'>{testdet?.TestiDate}</td>
            <td className='text-lg p-2'>{testdet?.TestiMsg}</td>
            <td className='text-lg p-2'>{testdet?.TestiImage}</td>
            <td className='text-lg p-2'>
              
            <NavLink to={`/admin/testimonial_update/${testdet._id}`}>
                        <i className="fa-solid fa-pen-to-square">
                      </i>
                        </NavLink>

                        <div onClick={()=>deleteTestimonial(testdet?._id)}>
                        <i className="hover:cursor-pointer fa-regular fa-trash-can text-red-700"></i>
                        </div>
            
              
              </td>
          </tr>

                  )})}



        </tbody>
      </table>
</div>


{/* Testimonial Table End */}

      
    </div>


    </div>

  )
}

export default AdminTestimonials