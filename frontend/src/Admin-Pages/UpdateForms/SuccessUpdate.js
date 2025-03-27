import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import {  useUpdateSuccessMutation } from '../AdminApi/CourseNameApi';
import { useFormik } from 'formik';
import { baseurls } from '../AdminApi/BaseUrl';

const SuccessUpdate = ({ data }) => {

  console.log(data);
  const [updateSuccess]=useUpdateSuccessMutation();

  
  const formik = useFormik({
    initialValues: {
      storyperson: data.SuccessStory.SuccessName,
      storyjob: data.SuccessStory.SuccessJob,
      storyplace: data.SuccessStory.SuccessPlace,
      storydate: data.SuccessStory.SuccessDate,
      storyimage: data.SuccessStory.SuccessImage,
    },

    onSubmit: async (values) => {
      try {

        const formData = new FormData();
        formData.append('storyperson', values?.storyperson);
        formData.append('storyjob', values.storyjob);
        formData.append('storyplace', values.storyplace);
        formData.append('storydate', values.storydate);
        formData.append('storyimage', values.storyimage);
        console.log(values);

        
        const submittedData = {
          formData,
          id: data.SuccessStory._id,
        };
     

        const result = await updateSuccess(submittedData).unwrap();
        console.log(result)
        formik.resetForm();
      } catch (e) {
        // toast.error(`${e}`);
      }
    }
  });


  return (
      
    <div>

        <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}
      >
            <div className="mb-4 flex gap-6">
              
              <div>
              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Name</h1>

                  <Input
                    type='text'
                    size="lg"
                    label="Name" 
                    name='storyperson'
                    onChange={formik.handleChange}
                    value={formik.values.storyperson}
                  />
              </div>


              <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Job Role</h1>

                <Input 
                  type='text' 
                  size="lg" 
                  label="Job" 
                  name='storyjob'
                  onChange={formik.handleChange}
                  value={formik.values.storyjob} />

              </div>


              <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Work Place</h1>

                <Input 
                  type='text' 
                  size="lg" 
                  label="Place" 
                  name='storyplace'              
                  onChange={formik.handleChange}
                  value={formik.values.storyplace} />

              </div>




              <div>
                <h1  className='text-xl font-bold pb-5 pt-[5%] '>Date</h1>

                <Input 
                  type='date' 
                  size="lg"  
                  name='storydate'
                  onChange={formik.handleChange}
                  value={formik.values.storydate} />

              </div>





              <div>

              <h1  className='text-xl font-bold pb-5 pt-[5%] '>Select Image</h1>              
              

        {/* Image */}
                <div>

                  

                  {
                    formik.values.imagePreview == null ? (
                      <img
                        className="w-[60%] h-[150px] mb-6 object-cover"
                        src={`${baseurls}${data.SuccessStory.SuccessImage}`} 
                      />
                    ):(
                      <img
                        className="w-[60%] h-[150px] mb-6 object-cover"
                        src={`${formik.values.imagePreview}`}
                       />
                    )
                  }



                  <Input 
                    type='file' 
                    label='Success Image' 
                    name="storyimage" 
                    accept='image/*' 
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
                        formik.setFieldValue('imagePreview',data.SuccessStory.SuccessImage)
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



  )
}

export default SuccessUpdate