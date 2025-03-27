import React from 'react';
import { Breadcrumbs, Typography,Button, Input, Checkbox, Textarea} from '@material-tailwind/react';

import { NavLink, useParams } from 'react-router-dom';
import { useCreatequeriesMutation, useGetClassCorbyIdQuery, useGetClassQuery, useGetClsssbyIdQuery, useGetCourseByNameQuery, useGetCourseDetailQuery, useGetCourseDetailsFrontbyIdQuery, useGetCourseDetailsbyIdQuery } from '../Admin-Pages/AdminApi/CourseNameApi';
import { useFormik } from 'formik';
import { toast } from "react-toastify";
import * as Yup from "yup";


const CourseDetail = () => {

const {id}=useParams();
// const {data}=useGetCourseDetailsFrontbyIdQuery(id);
// const {data}=useGetCourseDetailQuery();
// console.log(data);


// const {data:corsnamess}=useGetClsssbyIdQuery(id);
// console.log(corsnamess);

const {data}=useGetClassCorbyIdQuery(id);
console.log(data);

const [createEnquiryForms]=useCreatequeriesMutation();
const {data:enquire}=useGetClassQuery();
console.log(enquire);


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
  // validationSchema: registerSchema,

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
      if ((result.status) === 'success') {
        toast.success(result.message);
        formik.resetForm();
      } else {
        toast.error(result.message);
      }
    } catch (e) {
      toast.error(`${e}`);
    }
    
  },
  validationSchema:EnquirySchema,

});




// console.log(data);
// const {data}=useGetCourseDetailQuery();
// console.log(data);



// if(data.CourseName===id)
// {
//   const {isdatas:data}=useGetCourseDetailsbyIdQuery(data.CourseName);
//   console.log(isdatas);
// }

  return (
    <>


                    
        <div className='subdetails'>


            <div className=' py-[6%] pl-[12%]'>

              <div className='pt-[1%]'>  
              
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

              
              <h1 className='text-5xl  font-extrabold  py-5'>{data?.CoursesInformation.CourseName}</h1>

              <p className='text-xl  font-extrabold  py-5'>Course name in Surkhet</p>

              <div className='flex gap-10'>

                  <Typography  className="text-lg">
                    <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 font-medium'>{data?.CoursesInformation.CourseDuration}</span>
                  </Typography>


                  <Typography  className="text-lg">
                    <i className="fa-solid  fa-medal "></i> Career: <span className='pl-1  font-medium'>{data?.CoursesInformation.CareerAfter}</span>
                  </Typography>

              </div>


              <div className='flex gap-10 pt-8'>

              <NavLink className='border-2 bg-yellow-400 border-black text-black font-semibold text-xl p-5 rounded-lg hover:border-black hover:text-white hover:bg-blue-gray-400' to="/enquiry">Send Enquiry <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink> 



              <NavLink className='border-2 bg-blue-400 border-black text-black font-semibold text-xl p-5 rounded-lg hover:border-black hover:text-white hover:bg-blue-gray-400' to="/admission">Get Admission <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink> 

              </div>
              

            </div>


        </div>



        {/* Details Page */}

        <div className='mt-6 mx-[11%] pb-10'>

          <div className='flex gap-5 justify-evenly'>

            
                  <Typography color="blue" className="text-lg">
                    <i className="fa-solid fa-clock "></i>  <span className='pl-1  text-black font-medium'>Master Your Skills</span>
                  </Typography>


                  <Typography color="blue" className="text-lg">
                    <i className="fa-solid fa-clock "></i>  <span className='pl-1 text-black font-medium'>Become a Professional</span>
                  </Typography>

                  <Typography color="blue" className="text-lg">
                    <i className="fa-solid fa-medal "></i>  <span className='pl-1  text-black font-medium'>Build a Career!</span>
                  </Typography>



          </div>



        </div>


        <hr />

            <div className='mt-6 mx-[11%] pb-10'>

              <div className='flex gap-10 font-bold text-xl justify-start'>

                <NavLink>Course Overview</NavLink>
                <NavLink>Course Syllabus</NavLink>
                <NavLink>Course Benefits</NavLink>

              </div>

            </div>

        <hr />


        <div className='mt-6 mx-[11%] pb-10'>
              
              <div className='grid grid-cols-3 md:grid md:grid-cols-1 gap-5'>

                  <div className='py-5 px-10 col-span-2'>

                    <div>
                        <h1 className='text-2xl font-bold py-5'>Course Information</h1>
                        <p className='text-lg text-justify'>
                          
                          {data?.CoursesInformation.CourseDetails}
                        
                        
                        </p>

                    </div>


                    <div>
                        <h1 className='text-2xl font-bold py-5'>Course Benefits</h1>
                        <p className='text-lg text-justify pb-5'>
                          Benefits of this course                        
                        </p>

                        {/* <ul className='list-disc'>
                          <li>First Benefit</li>
                          <li>Second Benefit</li>
                          <li>Third Benefit</li>
                          <li>Fourth Benefit</li>
                          <li>Fifth Benefit</li>
                          <li>Sixth Benefit</li>
                        </ul> */}

                        <p>{data?.CoursesInformation.CourseBenefits}</p>

                    </div>


                    <div>
                        <h1 className='text-2xl font-bold py-5'>Course Contents</h1>
                        <p className='text-xl text-justify pb-5'>What you will learn?</p>


                        
                        {/* <ul className='list-disc'>
                          <li>First Topic</li>
                          <li>Second Topic</li>
                          <li>Third Topic</li>
                          <li>Fourth Topic</li>
                          <li>Fifth Topic</li>
                          <li>Sixth Topic</li>
                        </ul> */}

                        <p>{data?.CoursesInformation.CourseContents}</p>



                    </div>

    

                  </div>

                  <div className='py-5'>

                    
                      <div className='px-[8%] py-[2%] rounded-3xl border-2 shadow-2xl'>


                        <h1 className='text-3xl font-bold py-5'>GOT A QUESTION? SEND AN ENQUIRY</h1>
{/* 
                        <form className='py-[2%]' >


                          <div className='py-5'>
                            <h1 className='pb-4'>Name *</h1>
                            <Input label="Your Name" name="conname" className='rounded-3xl py-10 bg-gray-200' type='text' />
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>Email *</h1>
                            <Input label="Your Email" name="conmail" className='rounded-3xl py-10 bg-gray-200' type='email' />
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>Mobile Number *</h1>
                            <Input label="Phone Number" name="conphone" className='rounded-3xl py-10 bg-gray-200' type='number'  />
                          </div>

                          <div className='py-5'>
                            <h1 className='pb-4'>Alternate Number </h1>
                            <Input label="Phone Number" name="conphone" className='rounded-3xl py-10 bg-gray-200' type='number'  />
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>School/ College Name </h1>
                            <Input label="Your School/College" name="conscl" className='rounded-3xl py-10 bg-gray-200' type='text' />
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>Choose Course </h1>
                            <Input label="Course" name="consub" className='rounded-3xl py-10 bg-gray-200' type='text' />

                            <div className="gap-4">
                              <Checkbox color="blue" label="Course 1" defaultChecked />
                              <Checkbox color="red" label="Course 2" defaultChecked />
                              <Checkbox color="green" label="Course 3" defaultChecked />
                              <Checkbox color="amber" label="Course 4" defaultChecked />
                              <Checkbox color="teal" label="Course 5" defaultChecked />
                              <Checkbox color="indigo" label="Course 6" defaultChecked />
                              <Checkbox color="purple" label="Course 7" defaultChecked />
                              <Checkbox color="pink" label="Course 8" defaultChecked />
                            </div>
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>Message </h1>
                            <Textarea  label="Tell us about you" name="conmsg" className='rounded-3xl py-10 bg-gray-200' type='text'  ></Textarea>
                          </div>

                          <Button type='submit'>Submit</Button>


                        </form> */}


                       
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


            {/* Course Description End */}


        </div>
    
    
    
    </>
  )
}

export default CourseDetail