import React from 'react'
import Header from './AdComponents/Header'
import { Button, Input, Textarea } from '@material-tailwind/react';
import { useFormik } from 'formik';
import { useCreateBlogsMutation, useDeleteBlogdataMutation, useGetBlogQuery } from './AdminApi/CourseNameApi';
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";


const AdminBlog = () => {


  const {data}=useGetBlogQuery();
  console.log(data);

  const [createBlogsDat]=useCreateBlogsMutation();

  const [blogDat]=useDeleteBlogdataMutation();

  const deleteBlogs=async(id)=>{
    const result =await blogDat({id:id}).unwrap();

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
      blogti: "",
      blogau: "",
      blogda: "",
      blogcon: "",
      blogimage: ""
    },
    // validationSchema: registerSchema,

    onSubmit: async (values,resetForm) => {
      try {



        const formData = new FormData();
        formData.append('blogti', values?.blogti);
        formData.append('blogau', values.blogau);
        formData.append('blogda', values.blogda);
        formData.append('blogcon', values.blogcon);
        formData.append('blogimage', values.blogimage);
        console.log(values);
     

        const result = await createBlogsDat(formData).unwrap();
        formik.resetForm();
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


           <h1  className='text-4xl font-bold pb-5'>Blogs</h1>


            <div>

              <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
                  <div className="mb-4 flex gap-6">
                    
                    <div>
                    <h1  className='text-xl font-bold pb-5 pt-[5%] '>Blog Title</h1>

                        <Input type='text' size="lg" name='blogti' label="Course"  onChange={formik.handleChange} value={formik.values.blogti}  />
                    </div>


                    <div>
                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Blog Author</h1>

                      <Input type='text' size="lg" label="Name" name='blogau' onChange={formik.handleChange} value={formik.values.blogau}  />
                    </div>
                    

                    <div>
                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Blog Date</h1>

                      <Input type='date' size="lg" name='blogda' onChange={formik.handleChange} value={formik.values.blogda}  />

                    </div>


                    <div>
                    <h1  className='text-xl font-bold pb-5 pt-[5%] '>Blog Image</h1>
                    

                      {
                        formik.values.imagePreview && <img className="w-[60%] h-[150px]  mb-6  object-cover" src={
                          `${formik.values.imagePreview}`
                        } />
                      }

                      <Input required type='file'
                        label='Testimonial Image' name='blogimage'
                        accept='image/*'
                        onChange={
                          (e)=>{
                            const blogto=e.target.files[0];
                            formik.setFieldValue('blogimage',blogto);

                            const res=['image/png','image/jpg','image/jpeg'].includes(blogto.type);
                            if(res)
                            {
                              const reader=new FileReader();
                              reader.readAsDataURL(blogto);
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
                        formik.errors.blogimage && formik.touched.blogimage && <h2 className='pt-2'>
                          {
                            formik.errors.blogimage
                          }
                        </h2>
                      }

                  
                    </div>

                    
                  </div>

                  
                  <div>

                    <h1  className='text-xl font-bold pb-5 '>Blog Content</h1>


                    <Textarea label='Description' className='w-full  bg-white' name='blogcon' onChange={formik.handleChange} value={formik.values.blogcon} ></Textarea>

                  </div>

                  <Button type='submit' className='mt-5'>Submit</Button>

              </form>


            </div>

          
          {/* Blog Table */}

              <h1  className='text-4xl font-bold py-5'>Blogs List</h1>


              <div className='pt-5'>
                    <table className="table-auto w-full">
                      <thead>
                        <tr>
                          <th className='text-xl'>S.No</th>
                          <th className='text-xl'>Title</th>
                          <th className='text-xl'>Author</th>
                          <th className='text-xl'>Date</th>
                          <th className='text-xl'>Content</th>
                          <th className='text-xl'>Image</th>
                          <th className='text-xl'>Action</th>
                        </tr>
                      </thead>
                      <tbody>

                      {data && data.blog.map((blogtdet)=>{
                                return(

                        
                        
                        <tr className='text-center' key={blogtdet?._id}>
                          <td className='text-lg p-2'>Place 1</td>
                          <td className='text-lg p-2'>{blogtdet?.BlogName}</td>
                          <td className='text-lg p-2'>{blogtdet?.BlogAuthor}</td>
                          <td className='text-lg p-2'>{blogtdet?.BlogDate}</td>
                          <td className='text-lg p-2'>{blogtdet?.BlogContent}</td>
                          <td className='text-lg p-2'>{blogtdet?.BlogImage}</td>
                          <td className='text-lg p-2'>
                            
                          <NavLink to={`/admin/blog_update/${blogtdet._id}`}>
                                      <i className="fa-solid fa-pen-to-square">
                                    </i>
                                      </NavLink>

                        <div onClick={()=>deleteBlogs(blogtdet?._id)}>
                        <i className="hover:cursor-pointer fa-regular fa-trash-can text-red-700"></i>
                        </div>
                          
                            
                            </td>
                        </tr>

                                )})}



                      </tbody>
                    </table>
              </div>


          {/* Blog Table End */}
          



          
        </div>


    </div>



    
  )
}

export default AdminBlog