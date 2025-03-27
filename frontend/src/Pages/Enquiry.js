import React from 'react';
import {Breadcrumbs, Button,  Input, Textarea } from '@material-tailwind/react';
import { useCreatequeriesMutation } from '../Admin-Pages/AdminApi/CourseNameApi';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from "yup";
import { toast } from "react-toastify";



const Enquiry = () => {

  const [createEnquiryForms]=useCreatequeriesMutation();

  const EnquirySchema= Yup.object().shape({
    conname: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(50, "Too long !!!"),
    
    conmail: Yup.string().email("Invalid email").required("Required"),

    conphone: Yup.string().required("Required !!!").min(10, "Invalid !!!").max(10, "Invalid !!!"),
    
    altconphone: Yup.string().min(10, "Invalid !!!").max(10, "Invalid !!!"),

    conscl: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(50, "Too long !!!"),

    consub: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(50, "Too long !!!"),

    conmsg: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(500, "Too long !!!"),
    
    
  })

    
  const formik = useFormik({
    initialValues: {
      conname : "",
      conmail : "",
      conphone : "",
      altconphone : "",
      conscl : "",
      consub : "",
      conmsg : "",
    },
    
    onSubmit: async (values) => {
      try {



        const formData = new FormData();
        formData.append('conname', values?.conname);
        formData.append('conmail', values.conmail);
        formData.append('conphone', values.conphone);
        formData.append('altconphone', values.altconphone);
        formData.append('conscl', values.conscl);
        formData.append('consub', values.consub);
        formData.append('conmsg', values.conmsg);
        console.log(values);
     

        const result = await createEnquiryForms(formData).unwrap();
        formik.resetForm();
        if ((result.status) === 'success') {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } catch (e) {
        toast.error(`${e}`);
      }
      
    },
    validationSchema:EnquirySchema,
  });
  

  return (
    <>


                      
<div className='quere'>


<div className=' py-[6%] pl-[12%]'>

  <h1 className='text-4xl text-white font-extrabold  pb-5'>Your Queries</h1>
  
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
        <NavLink href="#" className="font-bold">Queries</NavLink>
      </Breadcrumbs>

  </div>

</div>


</div>



    {/* Enquiry Form */}

    
    <div className='px-[10%] py-[5%]'>

        <div className=''>
        
            <div className='px-[8%] py-[2%] rounded-3xl border-2 shadow-2xl'>


                  <h1 className='text-3xl font-bold py-5'>GOT A QUESTION? SEND AN ENQUIRY</h1>

                  <form className='py-[2%]' onSubmit={formik.handleSubmit}>


                    <div className='py-5'>
                      <h1 className='pb-4'>Name *</h1>
                      <Input label="Your Name" name="conname" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.conname}  />

                      {formik.errors.conname && formik.touched.conname && (
                          <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.conname}</h2>
                        )}{" "}
                    </div>


                    <div className='py-5'>
                      <h1 className='pb-4'>Email *</h1>
                      <Input label="Your Email" name="conmail" className='rounded-3xl py-10 bg-gray-200' type='email' onChange={formik.handleChange} value={formik.values.conmail}  />
                        {formik.errors.conmail && formik.touched.conmail && (
                            <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.conmail}</h2>
                          )}{" "}
                    </div>


                    <div className='py-5'>
                      <h1 className='pb-4'>Mobile Number *</h1>
                      <Input label="Phone Number" name="conphone" className='rounded-3xl py-10 bg-gray-200' type='number'   onChange={formik.handleChange} value={formik.values.conphone} />

                        {formik.errors.conphone && formik.touched.conphone && (
                            <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.conphone}</h2>
                          )}{" "}
                    </div>

                    <div className='py-5'>
                      <h1 className='pb-4'>Alternate Number </h1>
                      <Input label="Phone Number" name="altconphone" className='rounded-3xl py-10 bg-gray-200' type='number'  onChange={formik.handleChange} value={formik.values.altconphone}  />
                        {formik.errors.altconphone && formik.touched.altconphone && (
                            <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.altconphone}</h2>
                          )}{" "}
                    </div>
              

                    <div className='py-5'>
                      <h1 className='pb-4'>School/ College Name </h1>
                      <Input label="Your School/College" name="conscl" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.conscl}  />
                        {formik.errors.conscl && formik.touched.conscl && (
                            <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.conscl}</h2>
                          )}{" "}
                    </div>


                    <div className='py-5'>
                      <h1 className='pb-4'>Subject </h1>
                      <Input label="Subject" name="consub" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.consub}  />
                        {formik.errors.consub && formik.touched.consub && (
                            <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.consub}</h2>
                          )}{" "}


 
                    </div>


                    <div className='py-5'>
                      <h1 className='pb-4'>Message </h1>
                      <Textarea  label="Tell us about you" name="conmsg" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.conmsg}   ></Textarea>
                        {formik.errors.conmsg && formik.touched.conmsg && (
                            <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.conmsg}</h2>
                          )}{" "}
                    </div>

                    <Button type='submit'  className='mt-5'>Submit</Button>


                  </form>

            </div>

        </div>





    </div>


    {/* Enquiry Form End */}
    
    </>
  )
}

export default Enquiry