import React from 'react';
import contact from '../Images/contact.png';
import { Breadcrumbs, Button, Input, Textarea } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { useCreateContactMutation } from '../Admin-Pages/AdminApi/CourseNameApi';
import { useFormik } from 'formik';


const Contact = () => {
  
  const [createContactForms]=useCreateContactMutation()

  const formik = useFormik({
    initialValues: {
      conname: "",
      conmail: "",
      conphone: "",
      consub: "",
      conmsg: "",
    },
    // validationSchema: registerSchema,

    onSubmit: async (values) => {
      try {



        const formData = new FormData();
        formData.append('conname', values?.conname);
        formData.append('conmail', values.conmail);
        formData.append('conphone', values.conphone);
        formData.append('consub', values.consub);
        formData.append('conmsg', values.conmsg);
        console.log(values);
     

        const result = await createContactForms(formData).unwrap();
        formik.resetForm();
        // if ((result.status) === 'success') {
        //   toast.success(result.message);
        //   nav('/login');
        // } else {
        //   toast.error(result.message);
        // }
      } catch (e) {
        // toast.error(`${e}`);
      }
      
    }
  });
  
  return (

    <>



        <div className='bg-gray-100'>


            <div className=' py-[6%] pl-[12%]'>

              <h1 className='text-3xl font-bold pb-5'>Contact Us</h1>
              
              
              
              <Breadcrumbs>
                <NavLink href="#" className="opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </NavLink>
                <NavLink href="#" className="opacity-60">
                  <span>Pages</span>
                </NavLink>
                <NavLink href="#">Contact Us</NavLink>
              </Breadcrumbs>

            </div>


        </div>




        <div className='px-[10%]'>

            <div className='grid grid-cols-2 md:grid md:grid-cols-1 gap-5'>

                <div className='py-5'>
                  <h1 className='text-2xl font-bold py-5'>Information About Us</h1>
                  <p className='text-lg '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem voluptas sequi in, minus, recusandae laboriosam mollitia blanditiis ex amet ullam maxime porro nobis labore sint. Totam voluptatum est libero numquam?</p>
                </div>

                <div className='py-5'>

                  <h1 className='text-2xl font-bold py-5'>Contact Way</h1>

                  <div className='grid grid-cols-2 md:grid md:grid-cols-1'>

                    <div className='text-lg text-gray-700'>

                        <div>
                          <p>Tel : 083-123456</p>
                          <p>Email : abc@gmail.com</p>                          
                        </div>

                        <div>
                          <p>Birendranagar, Surkhet</p>
                            
                        </div>

                    </div>


                    

                    <div className='text-lg text-gray-700'>

                        <div>
                          <p>Support Forum</p>
                          <p>10 A.M - 10 P.M</p>                          
                        </div>

                        <div>
                          <p>Free QNA Session</p>                             
                        </div>

                    </div>




                  </div>

                </div>

            </div>

        </div>




    {/* Contact form */}



    <div className='px-[10%] py-[5%]'>

        <div className='grid grid-cols-2 md:grid md:grid-cols-1'>

            <div className='px-[8%] py-[2%] rounded-xl bg-gray-100'>


                  <h1 className='text-3xl font-bold py-5'>Get In Touch</h1>
                  <p className='text-lg '>Please fill up the form to submit your queries and get in touch with us ! ! !</p>

                  <form className='py-[2%]' onSubmit={formik.handleSubmit}>


                    <div className='py-5'>
                      <Input label="Your Name" name="conname" className='rounded-3xl py-10' type='text' onChange={formik.handleChange} value={formik.values.conname} />
                    </div>


                    <div className='py-5'>
                      <Input label="Your Email" name="conmail" className='rounded-3xl py-10' type='email' onChange={formik.handleChange} value={formik.values.conmail} />
                    </div>


                    <div className='py-5'>
                      <Input label="Phone Number" name="conphone" className='rounded-3xl py-10' type='number' onChange={formik.handleChange} value={formik.values.conphone}  />
                    </div>


                    <div className='py-5'>
                      <Input label="Subject" name="consub" className='rounded-3xl py-10' type='text' onChange={formik.handleChange} value={formik.values.consub} />
                    </div>


                    <div className='py-5'>

                      <Textarea  label="Your Message" name="conmsg" className='rounded-3xl py-10' type='text' onChange={formik.handleChange} value={formik.values.conmsg}  ></Textarea>
                    </div>

                    <Button type='submit'>Submit</Button>


                  </form>

            </div>



            <div>

                <img src={contact} alt="contactus" />

            </div>

        </div>

    </div>

    </>

  )
}

export default Contact