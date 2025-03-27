import React from 'react'
import Header from './AdComponents/Header'
import { Button, Input } from '@material-tailwind/react'
import {  useCreateCourseMutation, useDeleteTotalNumMutation, useGetCourseByNameQuery } from './AdminApi/CourseNameApi'
import { useFormik } from 'formik'
import AdminClassEnt from './AdminClassEnt'
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom'


const AdminHome = () => {

  const { data, isLoading } = useGetCourseByNameQuery();
  console.log(data);

  const [createCourses, { isLoading:isLoad}] = useCreateCourseMutation();

  const [deleteNumberData]=useDeleteTotalNumMutation();


  const detnum="Course Numbers";

  const formik = useFormik({
    initialValues: {
      runclass:"",
      courseTotal:"",
      teacherTotal:"",
      studentTotal:"",
    },
    // validationSchema: registerSchema,

    onSubmit: async (values,resetForm) => {
      try {

        const data={
          detnum,
          runclass:values.runclass,
          courseTotal:values.courseTotal,
          teacherTotal:values.teacherTotal,
          studentTotal:values.studentTotal,

        }

        const result = await createCourses(data).unwrap();
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
  });




  
  if (isLoading) {

    return <div className='h-[300px] mt-14'>
      <lottie-player src="https://lottie.host/01986b4b-7629-473a-8223-f06d23ec4120/LelU3WnIJp.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>

  }

  const deletenumbers=async(id)=>{
    const result= await deleteNumberData({id:id});
    if(result)
    {
      toast.success(result.message);
      window.location.reload();
    }
    else{
      toast.error(result.message)
    } 
  }

  return (
    
    <div className='grid grid-cols-6 bg-teal-50'>

        <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
          <Header />
        </div>


        <div className='bg-teal-50 col-span-5 p-[2%]'>
          
          <h1  className='text-4xl font-bold pb-5'>Dashboard</h1>



          {/* Course State */}

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
          {/* Course State End     */}



          {/* Course State Table */}


                      
            <h1  className='text-4xl font-bold py-5'>Status Info </h1>


       
            <div className='pt-5'>
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className='text-xl'>S.No</th>
                       
                        <th className='text-xl'>Title</th>
                        <th className='text-xl'>Running Classess</th>
                        <th className='text-xl'>Total Courses</th>
                        <th className='text-xl'>Total Teachers</th>
                        <th className='text-xl'>Total Students</th>
                        <th className='text-xl'>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                    {data && data.course.map((coursesnam)=>{

                      return (
                        <tr className='text-center' key={coursesnam?._id}>
                            <td className='text-lg p-2'> 1</td>
                            
                            <td className='text-lg p-2'>
                              {coursesnam?.detnum}</td>
                            
                            <td className='text-lg p-2'>
                              {coursesnam?.runclass}</td>
                            
                            <td className='text-lg p-2'>
                              {coursesnam?.courseTotal}
                              </td>
                            
                            <td className='text-lg p-2'>
                              {coursesnam?.teacherTotal}</td>
                            
                            <td className='text-lg p-2'>
                              {coursesnam?.studentTotal}
                              </td>
                            <td className='text-lg p-2'>
                                  <NavLink to={`/admin/number/${coursesnam._id}`}>
                                  <i className="fa-solid fa-pen-to-square p-4 text-blue-500 text-2xl hover:text-blue-800"></i>
                                  
                                  </NavLink>
                                  
                                <div onClick={()=>deletenumbers(coursesnam._id)}><i className="fa-solid fa-trash p-4 text-red-500 text-2xl hover:text-red-800"></i></div>
                          
  
  
                          </td>
                       </tr>)
                      

                        })}
                      
                      



                    </tbody>
                  </table>
            </div>



          {/* Course State Table end */}


          {/* Add Courses */}

                <AdminClassEnt/>

          {/* Course Class List */}




        </div>


    </div>


  )
}

export default AdminHome