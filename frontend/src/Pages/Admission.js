import React from 'react'
import { Breadcrumbs, Button, Input, Option, Radio, Select, select} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { useCreateAdmissionMutation, useGetClassQuery } from '../Admin-Pages/AdminApi/CourseNameApi';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from "react-toastify";



const Admission = () => {


  const {data}=useGetClassQuery();
  console.log(data);


  const [createAdmissionDat]=useCreateAdmissionMutation();

  const admissionSchema=Yup.object().shape({
    admissionname: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(50, "Too long !!!"),
    
    
    admissionmail: Yup.string().email("Invalid email").required("Required"),

    admissionphone: Yup.string().required("Required !!!").min(10, "Invalid !!!").max(10, "Invalid !!!"),

    admissionpeadd: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(50, "Too long !!!"),

    admissiongudnam: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(50, "Too long !!!"),

    admissiongudco: Yup.string().required("Required !!!").min(10, "Invalid !!!").max(10, "Invalid !!!"),

    admissionlev: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(50, "Too long !!!"),

    admissionscl: Yup.string().required("Required !!!").min(3, "Too Short !!!").max(50, "Too long !!!"),





  });

  const formik=useFormik({
    initialValues:{

      admissionname: "",
      admissiongender: "",
      admissionmail: "",
      admissionphone: "",
      admissionpeadd: "",
      admissionteadd: "",
      admissiondob: "",
      admissiongudnam: "",
      admissiongudco: "",
      admissionlev: "",
      admissionscl: "",
      admissionsub: "",
      admissionshift: "",
      admissionimage:""


    },
    
    onSubmit:async(values)=>{
      try{

        
        const formData = new FormData();

        formData.append('admissionname', values?.admissionname);
        formData.append('admissiongender', values.admissiongender);
        formData.append('admissionmail', values.admissionmail);
        formData.append('admissionphone', values.admissionphone);
        formData.append('admissionpeadd', values.admissionpeadd);
        formData.append('admissionteadd', values?.admissionteadd);
        formData.append('admissiondob', values.admissiondob);
        formData.append('admissiongudnam', values.admissiongudnam);
        formData.append('admissiongudco', values.admissiongudco);
        formData.append('admissionlev', values.admissionlev);
        formData.append('admissionscl', values?.admissionscl);
        formData.append('admissionsub', values.admissionsub);
        formData.append('admissionshift', values.admissionshift);
        formData.append('admissionimage', values.admissionimage);
        console.log(values);
     

        const result = await createAdmissionDat(formData).unwrap();
        formik.resetForm();

       if (result.status === "success") {
          toast.success(result.message);
          formik.resetForm();
        } else {
          toast.error(result.message);
        }
      } catch (e) {
        toast.error(`${e}`);
      }
    },

    validationSchema: admissionSchema,


  })


  return (
    <>


                    
        <div className='admiss'>


            <div className=' py-[6%] pl-[12%]'>

              <h1 className='text-4xl text-white font-extrabold  pb-5'>Admission Form</h1>
              
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


        {/* Admission Form */}



        <div className='text-center pt-7'>
             <h1 className='text-5xl font-bold py-5'>Online Admission</h1>

             <p className='text-xl'>Please fill out the form below to be enrolled in our course. It is mandatory to fill-up fields with (*)</p>

          </div>

        <div className='px-[10%] py-[5%]'>






            <div className=''>

                <div className='px-[8%] py-[2%] rounded-3xl border-2 shadow-2xl'>



                      <form className='py-[2%]'  onSubmit={formik.handleSubmit}>

                        <div>

                          <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Image</h1>

                          

                          {
                            formik.values.imagePreview && <img className="w-[60%] h-[150px]  mb-6  object-cover" src={
                              `${formik.values.imagePreview}`
                            }/>
                          }

                          <Input required type='file' size="lg" label="Image" name="admissionimage" accept='image/*'
                          onChange={
                            (e)=>{
                              const admi=e.target.files[0];
                              formik.setFieldValue('admissionimage',admi);

                              const res=['image/png','image/jpg','image/jpeg'].includes(admi.type);

                              if(res){
                                const reader=new FileReader();
                                reader.readAsDataURL(admi);
                                reader.addEventListener('load',()=>{
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
                            formik.errors.admissionimage && formik.touched.admissionimage && <h2 className='pt-2'>
                              {
                                formik.errors.admissionimage
                              }</h2>
                          }

                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Name *</h1>
                          <Input  
                            label="Your Name" name="admissionname" className='rounded-3xl py-10 bg-gray-200'
                             type='text'
                             onChange={formik.handleChange} value={formik.values.admissionname}  />

                            {formik.errors.admissionname && formik.touched.admissionname && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissionname}</h2>
                              )}{" "}
                        </div>


                        
                        <div className='py-5'>
                          <h1 className='pb-4'>Choose Gender</h1>

                          <div className="gap-4">
                            <Radio name="admissiongender" color="blue" label="Male" 
                            onChange={formik.handleChange} value={formik.values.admissiongender} defaultChecked />

                            <Radio name="admissiongender" color="red" label="Female"
                            onChange={formik.handleChange} value={formik.values.admissiongender}  />
                                                    
                            
                          </div>


                        </div>



                        <div className='py-5'>
                          <h1 className='pb-4'>Email </h1>
                          <Input label="Your Email" name="admissionmail" className='rounded-3xl py-10 bg-gray-200' type='email' onChange={formik.handleChange} value={formik.values.admissionmail}/>

                          

                          {formik.errors.admissionmail && formik.touched.admissionmail && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissionmail}</h2>
                              )}{" "}

                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Mobile Number *</h1>
                          <Input  label="Phone Number" name="admissionphone" className='rounded-3xl py-10 bg-gray-200' type='number' 
                          onChange={formik.handleChange} value={formik.values.admissionphone} />

                          

                          {formik.errors.admissionphone && formik.touched.admissionphone && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissionphone}</h2>
                              )}{" "}
                          
                          
                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Permanent Address (*)</h1>
                          <Input  label="Permanent Address" name="admissionpeadd" className='rounded-3xl py-10 bg-gray-200' type='text' 
                          onChange={formik.handleChange} value={formik.values.admissionpeadd} />

                          

                          {formik.errors.admissionpeadd && formik.touched.admissionpeadd && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissionpeadd}</h2>
                              )}{" "}
                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Temporary Address </h1>
                          <Input label="Temporary Address" name="admissionteadd" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.admissionteadd} />
                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Date Of Birth</h1>
                          <Input required  name="admissiondob" className='rounded-3xl py-10 bg-gray-200' type='date' 
                          onChange={formik.handleChange} value={formik.values.admissiondob} />

                          

                          {formik.errors.admissiondob && formik.touched.admissiondob && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissiondob}</h2>
                              )}{" "}
                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Guardian Name </h1>
                          <Input label="Guardian Name" name="admissiongudnam" className='rounded-3xl py-10 bg-gray-200' type='text' 
                          onChange={formik.handleChange} value={formik.values.admissiongudnam} />

                          

                          {formik.errors.admissiongudnam && formik.touched.admissiongudnam && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissiongudnam}</h2>
                              )}{" "}
                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Guardian Contact </h1>
                          <Input label="Guardian Contact" name="admissiongudco" className='rounded-3xl py-10 bg-gray-200' type='number' 
                          onChange={formik.handleChange} value={formik.values.admissiongudco} />

                          

                          {formik.errors.admissiongudco && formik.touched.admissiongudco && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissiongudco}</h2>
                              )}{" "}
                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Academic Level </h1>
                          <Input label="Academic" name="admissionlev" className='rounded-3xl py-10 bg-gray-200' type='text' 
                          onChange={formik.handleChange} value={formik.values.admissionlev} />

                          

                          {formik.errors.admissionlev && formik.touched.admissionlev && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissionlev}</h2>
                              )}{" "}
                        </div>
                  

                        <div className='py-5'>
                          <h1 className='pb-4'>School/ College Name </h1>
                          <Input label="Your School/College" name="admissionscl" className='rounded-3xl py-10 bg-gray-200' type='text'
                          onChange={formik.handleChange} value={formik.values.admissionscl} />

                          

                          {formik.errors.admissionscl && formik.touched.admissionscl && (
                                <h2 className="pt-2 text-red-600 font-extrabold"> {formik.errors.admissionscl}</h2>
                              )}{" "}
                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Choose Course  </h1>

                          {data && (
                            <Select
                              label="Select Version"
                              name='admissionsub'
                              value={formik.values.admissionsub}
                              onChange={(selectedValue) =>
                                formik.setFieldValue("admissionsub", selectedValue)
                              }
                            >
                              {data &&
                                data.ClassesCourses.map((e, index) => {
                                  
                                  return (
                                    <Option value={e.ClassName} key={index}>
                                      {e.ClassName} ({e.ClassState})
                                    </Option>
                                  );
                                
                                })}
                            </Select>
                          )}


                        </div>


                        <div className='py-5'>
                          <h1 className='pb-4'>Choose Shift</h1>

                          <div className="gap-4">
                            <Radio name="admissionshift" color="blue" value="Morning"
                            onChange={formik.handleChange} checked={formik.values.admissionshift==='Morning'} defaultChecked/> Morning


                            <Radio name="admissionshift" color="red" value="Afternoon"
                            onChange={formik.handleChange} checked={formik.values.admissionshift==='Afternoon'}  /> Afternoon


                            <Radio name="admissionshift" color="green" value="Evening"
                            onChange={formik.handleChange} checked={formik.values.admissionshift==='Evening'}  /> Evening
                            
                          </div>


                        </div>



                        <Button type='submit'>Submit</Button>


                      </form>

                </div>

            </div>





        </div>


        {/* Admission For end */}

    
    
    </>
  )
}

export default Admission