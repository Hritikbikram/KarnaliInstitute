import { useFormik } from 'formik';
import React from 'react'
import { useUpdateBlogInfoMutation } from '../AdminApi/CourseNameApi';
import { Button, Input, Textarea } from '@material-tailwind/react';
import { baseurls } from '../AdminApi/BaseUrl';

const BlogUpdate = ({data}) => {



  console.log(data);
  const [updateBlogs]=useUpdateBlogInfoMutation();

  

    
  const formik = useFormik({
    initialValues: {
      blogti: data.blog.BlogName,
      blogau: data.blog.BlogAuthor,
      blogda: data.blog.BlogDate,
      blogcon: data.blog.BlogContent,
      blogimage: data.blog.BlogImage
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
     
        
        const submittedData = {
          formData,
          id: data.blog._id,
        };

        const result = await updateBlogs(submittedData).unwrap();
        formik.resetForm();

      } catch (e) {
        // toast.error(`${e}`);
      }
    }
  });



  return (
    <>
    
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
                    formik.values.imagePreview==null?(
                      <img
                        className="w-[60%] h-[150px]  mb-6  object-cover"
                        src={`${baseurls}${data.blog.BlogImage}`} 
                      />
                    ):(
                      <img
                        className="w-[60%] h-[150px]  mb-6  object-cover"
                        src={`${formik.values.imagePreview}`} 
                      />
                    )
                  }


                <Input required type='file'
                  label='Blog Image' name='blogimage'
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
                        formik.setFieldValue('imagePreview',data.blog.BlogImage)
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


    </>
  )
}

export default BlogUpdate