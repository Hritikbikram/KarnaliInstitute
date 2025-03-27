import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import Header from './AdComponents/Header'
import { useCreateSuccessMutation, useDeletesuccessdataMutation, useGetSuccessQuery } from './AdminApi/CourseNameApi'
import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom'
import { toast } from "react-toastify";


const AdminSuccess = () => {

  const {data}=useGetSuccessQuery();
  console.log(data);

  const [createSuccessStories]=useCreateSuccessMutation();

  const [successDa]=useDeletesuccessdataMutation();

  const deleteSuccess=async(id)=>{
    const result =await successDa({id:id}).unwrap();

    if(result)
    {
      toast.success(result.message);
      window.location.reload()
    }
    else
    {
      toast.error(result.message)
    }
  }


  
  const formik = useFormik({
    initialValues: {
      storyperson: "",
      storyjob: "",
      storyplace: "",
      storydate: "",
      storyimage: "",
    },
    // validationSchema: registerSchema,

    onSubmit: async (values) => {
      try {



        const formData = new FormData();
        formData.append('storyperson', values?.storyperson);
        formData.append('storyjob', values.storyjob);
        formData.append('storyplace', values.storyplace);
        formData.append('storydate', values.storydate);
        formData.append('storyimage', values.storyimage);
        console.log(values);
     

        const result = await createSuccessStories(formData).unwrap();
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
  


  return (
    
    <div className='grid grid-cols-6 bg-teal-50'>

    <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
      <Header />
    </div>


    <div className='bg-teal-50 col-span-5 p-[2%]'>
      
      <h1  className='text-4xl font-bold pb-5'>Success Stories</h1>


      {/* Add Blogs */}

      <div>

          <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
              <div className="mb-4 flex gap-6">
                
                <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Name</h1>

                    <Input type='text' size="lg" label="Name" name='storyperson' onChange={formik.handleChange} value={formik.values.storyperson} />
                </div>


                <div>
                  <h1  className='text-xl font-bold pb-5 pt-[5%] '>Job Role</h1>

                  <Input type='text' size="lg" label="Job" name='storyjob' onChange={formik.handleChange} value={formik.values.storyjob} />

                </div>


                <div>
                  <h1  className='text-xl font-bold pb-5 pt-[5%] '>Work Place</h1>

                  <Input type='text' size="lg" label="Place" name='storyplace' onChange={formik.handleChange} value={formik.values.storyplace} />

                </div>




                <div>
                  <h1  className='text-xl font-bold pb-5 pt-[5%] '>Date</h1>

                  <Input type='date' size="lg"  name='storydate' onChange={formik.handleChange} value={formik.values.storydate} />

                </div>





                <div>

                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Image</h1>
                

          {/* Image */}
                  <div>

                    {
                      formik.values.imagePreview && <img className="w-[60%] h-[150px]  mb-6  object-cover" src={
                        `${formik.values.imagePreview}`
                      }/>
                    }
                    <Input required type='file' label='Success Image' name="storyimage" accept='image/*' 
                    onChange={
                      (e)=>{
                        const succ=e.target.files[0];
                        formik.setFieldValue('storyimage',succ);

                        const res=['image/png','image/jpg','image/jpeg'].includes(succ.type);
                        if(res){
                          const reader=new FileReader();
                          reader.readAsDataURL(succ);
                          reader.addEventListener('load',()=>{
                            formik.setFieldValue('imagePreview',reader.result)
                          })
                        }
                        else{
                          formik.setFieldValue('imagePreview',null)
                        }
                      }
                    }
                    
                    />{
                      formik.errors.storyimage && formik.touched.storyimage && <h2 className='pt-2'>
                        {
                          formik.errors.storyimage
                        }
                      </h2>
                    }


                  </div>
                


          {/* ImageEnd */}

                </div>





                
              </div>

              

              <Button type='submit' className='mt-5'>Submit</Button>

          </form>


      </div>

{/* Add Blogs End */}


{/* Destionation Table */}

<h1  className='text-4xl font-bold py-5'>Success Stories List</h1>


<div className='pt-5'>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className='text-xl'>S.No</th>
            <th className='text-xl'>Name</th>
            <th className='text-xl'>Job Role</th>
            <th className='text-xl'>WorkPlace</th>
            <th className='text-xl'>Date</th>
            <th className='text-xl'>Image</th>
            <th className='text-xl'>Action</th>
          </tr>
        </thead>
        <tbody>
          
          
        {data && data.SuccessStory.map((Successdet)=>{
                  return(

          
          <tr className='text-center' key={Successdet?._id}>
            <td className='text-lg p-2'>Place 1</td>
            <td className='text-lg p-2'>{Successdet?.SuccessName}</td>
            <td className='text-lg p-2'>{Successdet?.SuccessJob}</td>
            <td className='text-lg p-2'>{Successdet?.SuccessPlace}</td>
            <td className='text-lg p-2'>{Successdet?.SuccessDate}</td>
            <td className='text-lg p-2'>{Successdet?.SuccessImage}</td>
            <td className='text-lg p-2'>
              
            <NavLink to={`/admin/careers_update/${Successdet._id}`}>
                        <i className="fa-solid fa-pen-to-square">
                      </i>
                        </NavLink>

                        <div onClick={()=>deleteSuccess(Successdet?._id)}>
                        <i className="hover:cursor-pointer fa-regular fa-trash-can text-red-700"></i>
                        </div>
              
            </td>
          </tr>
                  )})}




        </tbody>
      </table>
</div>


{/* Blogs Table End */}

      
    </div>


    </div>


  )
}

export default AdminSuccess