import { Button, Input, Option, Select, Textarea, Radio } from '@material-tailwind/react'
import React from 'react'
import Header from './AdComponents/Header'
import { useFormik } from 'formik'
import { useCreateCourseDetailsMutation, useDeleteCourseDetailsMutation, useGetClassQuery, useGetCourseDetailQuery } from './AdminApi/CourseNameApi'
import { NavLink } from 'react-router-dom'
import { toast } from "react-toastify";


const AdminCourses = () => {

  const {data}=useGetCourseDetailQuery();
  
  const [CreateCorsDet]=useCreateCourseDetailsMutation();

  const {data:courseslist}=useGetClassQuery();

  const [detailsData]=useDeleteCourseDetailsMutation();
  
  const formik=useFormik({
    initialValues: {
      corsname: "",
      corsfullnam: "",
      corsdura: "",
      corstate: "",
      corspath: "",
      corsdesp: "",
      corsben: "",
      corscont: ""
    },
    // validationSchema: registerSchema,

    onSubmit: async (values) => {
      try {

        const data={
          corsname: values.corsname,
          corsfullnam: values.corsfullnam,
          corsdura: values.corsdura,
          corstate: values.corstate,
          corspath: values.corspath,
          corsdesp: values.corsdesp,
          corsben: values.corsben,
          corscont: values.corscont
        }


     

        const result = await CreateCorsDet(data).unwrap();
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

  const deleteDetails=async(id)=>{
    const result = await detailsData({id:id}).unwrap();
    if(result)
    {
      toast.success(result.message);
      window.location.reload();
    }
    else
    {
      toast.error(result.message)
    }
  
  }


  return (
    


    
    <div className='grid grid-cols-6 bg-teal-50'>

    <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
      <Header />
    </div>


    <div className='bg-teal-50 col-span-5 p-[2%]'>
      
      <h1  className='text-4xl font-bold pb-5'>Course Details Page</h1>

        {/* Add Package */}

        <div>

          <form className="mt-8 mb-2  max-w-screen-lg sm:w-96"  onSubmit={formik.handleSubmit}>
              <div className="mb-4 flex gap-6">
                
                <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Course Name</h1>


                    {courseslist && (
                      <Select
                        label="Select Version"
                        name='corsname'
                        value={formik.values.corsname}
                        onChange={(selectedValue) =>
                          formik.setFieldValue("corsname", selectedValue)
                        }
                      >
                        {courseslist &&
                          courseslist.ClassesCourses.map((e, index) => {
                            return (
                              <Option value={e.ClassName} key={index}>
                                {e.ClassName}
                              </Option>
                            );
                          })}
                      </Select>
                    )}

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

                    {/* <Input type='text' size="lg" label="Name" name='corstate' onChange={formik.handleChange} value={formik.values.corstate}  /> */}

                        
                    <Radio color="blue" label="Upcoming" name="corstate" value="Upcoming" onChange={formik.handleChange} checked={formik.values.corstate === 'Upcoming'}/>

                    
                    <Radio color="red" label="Running" name="corstate"  onChange={formik.handleChange} value="Running"  checked={formik.values.corstate === 'Running'}/>


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




              <Button type='submit' className='mt-5'>Submit</Button>

          </form>


        </div>

{/* Add Package End */}


{/* Destionation Table */}

<h1  className='text-4xl font-bold py-5'>Course Details </h1>


<div className='pt-5'>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className='text-xl'>S.No</th>
            <th className='text-xl'>Course Name</th>
            <th className='text-xl'>Course Exact Name</th>
            <th className='text-xl'>Course Duration</th>
            <th className='text-xl'>Course State</th>
            <th className='text-xl'>Future Career</th>
            <th className='text-xl'>Course Description</th>
            <th className='text-xl'>Course Benefits</th>
            <th className='text-xl'>Course Contents</th>
            <th className='text-xl'>Action</th>
          </tr>
        </thead>
        <tbody>

          
        {data && data.CourseInfo.map((coursedet)=>{
                  return(
          
          
          <tr className='text-center' key={coursedet?._id}>
            <td className='text-lg p-2'>Place 1</td>
            <td className='text-lg p-2'> {coursedet?.CourseName}</td>
            <td className='text-lg p-2'>{coursedet?.CourseSkName}</td>
            <td className='text-lg p-2'>{coursedet?.CourseDuration}</td>
            <td className='text-lg p-2'>{coursedet?.ClassState}</td>
            <td className='text-lg p-2'>{coursedet?.CareerAfter}</td>
            <td className='text-lg p-2'>{coursedet?.CourseDetails}</td>
            <td className='text-lg p-2'>{coursedet?.CourseBenefits}</td>
            <td className='text-lg p-2'>{coursedet?.CourseContents}</td>
            <td className='text-lg p-2'>
              
              
            <NavLink to={`/admin/courses_details/${coursedet._id}`}>

               <i className="fa-solid fa-pen-to-square">
                </i>
              
              </NavLink>


              <div onClick={()=>deleteDetails(coursedet?._id)}>
                        <i className="hover:cursor-pointer fa-regular fa-trash-can text-red-700"></i>
                        </div>
                          
              
              
              
              </td>
          </tr>

        )})}


        </tbody>
      </table>
</div>


{/* Package Table End */}

      
    </div>


    </div>



    
  )
}

export default AdminCourses