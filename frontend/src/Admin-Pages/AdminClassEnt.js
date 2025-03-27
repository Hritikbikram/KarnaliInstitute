import { Button, Input, Radio } from '@material-tailwind/react';
import { useFormik } from 'formik';
import React from 'react'
import { useCreateClassesMutation, useDeleteClassMutation, useGetClassQuery } from './AdminApi/CourseNameApi';
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";


const AdminClassEnt = () => {

  const { data}= useGetClassQuery();
  console.log(data)

  const [deleteData]= useDeleteClassMutation();


  const [createClasseCourse]= useCreateClassesMutation();



  const formik= useFormik({

    initialValues: {
      classtitle:"",
      classtime:"",
      classst:"",
      classdat:"",
      classcoimage:""
    },
    // validationSchema: registerSchema,

    onSubmit: async (values,resetForm) => {
      try {

        // const data={

        //   classtitle:values.classtitle,
        //   classtime:values.classtime,
        //   classst:values.classst,
        //   classdat:values.classdat,
        //   classcoimage:values.classcoimage

        // }

        const formData = new FormData();
        formData.append('classtitle', values?.classtitle);
        formData.append('classtime', values.classtime);
        formData.append('classst', values.classst);
        formData.append('classdat', values.classdat);
        formData.append('classcoimage', values.classcoimage);

        // console.log(values);
        const result = await createClasseCourse(formData).unwrap();
       
        // const result = await createClasseCourse(data).unwrap();
        if (result.status === "success") {
          toast.success(result.message);
          formik.resetForm();
        } else {
          toast.error(result.message);
        }
      } catch (e) {
        // toast.error(`${e}`);
        toast.error("Unable to enter");
      }
    },

  });


  const deleteus = async (id) => {
    const result = await deleteData({ id: id }).unwrap();
    if(result)
    {
      toast.success(result.message);
      window.location.reload();
    }
    else{
      toast.error(result.message)
    }        


  };


  return (
    <div>

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

                <Radio color="blue" label="Upcoming" name="classst" value="Upcoming" onChange={formik.handleChange} checked={formik.values.classst === 'Upcoming'}/>

                
                <Radio color="red" label="Running" name="classst"  onChange={formik.handleChange} value="Running"  checked={formik.values.classst === 'Running'}/>

            </div>
            

            <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Commencement</h1>

              <Input type='date' size="lg" name='classdat'   onChange={formik.handleChange} value={formik.values.classdat} />

            </div>


            <div>
            <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Image</h1>
            

            
            {
                        formik.values.imagePreview && <img className="w-[60%] h-[150px]  mb-6  object-cover" src={
                          `${formik.values.imagePreview}`
                        } />
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




        
      <h1  className='text-4xl font-bold py-5'>Class Info </h1>



      <div className='pt-5'>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className='text-xl'>S.No</th>
                <th className='text-xl'>Class Title</th>
                <th className='text-xl'>Class Duration</th>
                <th className='text-xl'>Class Status</th>
                <th className='text-xl'>Class Date</th>
                <th className='text-xl'>Class Image</th>
                <th className='text-xl'>Actions</th>
              </tr>
            </thead>
            <tbody>

            {data && data.ClassesCourses.map((classinf)=>{

              return (
                <tr className='text-center' key={classinf?._id}>
                    <td className='text-lg p-2'> 1</td>

                    
                    <td className='text-lg p-2'>
                      {classinf?.ClassName}</td>
                  
                    <td className='text-lg p-2'>
                      {classinf?.ClassDuration}</td>
                    <td className='text-lg p-2'>
                      {classinf?.ClassState}
                      </td>

                    <td className='text-lg p-2'>
                      {classinf?.ClassDate}</td>

                      <td className='text-lg p-2'>
                      {classinf?.ClassImage}
                      </td>



                    <td className='text-lg p-2'>
                        
                    <NavLink to={`/admin/courses_update/${classinf._id}`}>
                      <i className="fa-solid fa-pen-to-square">
                                    </i>
                    </NavLink>
                  
                    <div onClick={()=>deleteus(classinf._id)} >

                        <i className="fa-solid fa-trash p-4 text-red-500 text-2xl hover:text-red-800"></i>

                    </div>
                  


                  </td>
              </tr>)
              

                })}
              
              



            </tbody>
          </table>
      </div>




    </div>
  )
}

export default AdminClassEnt