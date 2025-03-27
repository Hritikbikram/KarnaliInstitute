import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React from 'react'

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { addUserDetail } from './AdFeatures/userSlice';
import { useLoginUserMutation } from './AdminApi/UserApi';


const AdminLogin = () => {

  const [login]=useLoginUserMutation();

  const nav=useNavigate();
  const dispatch=useDispatch();


  const loginSchema = Yup.object().shape({
    UserName: Yup.string()
    .required("Required")
    .min(3, "Too Short !!!")
    .max(50, "Too long !!!"),
    UserPassword: Yup.string()
      .required("Required")
      .min(3, "Too Short !!!")
      .max(50, "Too long !!!"),
  });


  const formik = useFormik({
    initialValues: {
      UserName: "",
      UserPassword: "",
    },
    validationSchema: loginSchema,

    onSubmit: async (values,resetForm) => {
      // try {
      //   const result = await login(values).unwrap();
      //   console.log(result);
      //   // if (result.status === "success") {
      //   // console.log(result);
      //   // dispatch(addUserDetail(result.users));
      //   // if (result.users.token && result.isEmployee) {
      //   //   nav("/admin");
      //   // } else {
      //   //   nav("/");
      //   // }
      //   // } else {
      //   //   toast.error(result.message);
      //   // }
      //   formik.resetForm();
      // } catch (e) {
      //   toast.error(`${e}`);
      // }

      try {
        const result = await login(values).unwrap();

        if (result.status === "success") {
          dispatch(addUserDetail(result.users));
          nav("/admin/home");
        } else {
          toast.error(result.message);
        }
      } catch (e) {
        toast.error(`${e}`);
      }
    },
  });


  return (
    <>

    
              
      <div >

          <div className='px-[10%] py-[5%]'>

          
            <div>

              <div className='px-[30%] p-10'>
                <h1 className='text-center text-3xl font-bold pb-5'>Login</h1>
                <p className='text-center text-gray-500 pb-10'>Please login using account detail below</p>



{/*                 
                  <form>

                    <div className='py-4 text-lg'>
                      <Input label='Username' className='rounded-lg' 
                      type='name' name='logusername'/>
                    </div>

                    <div className='py-4'>
                      <Input label='Password' className='rounded-lg' type='password' name='UserPassword'  />
                    </div>

                    
                    <p className=' text-gray-500'>Forgot Your Password???</p>

                    <Button type='submit' className='p-4 mt-4 rounded-lg w-[100%]'>Login</Button>


                  </form> */}

                            
                <Card color="transparent" shadow={false}>
                  <form
                    className="pt-[2%] mt-9 mb-6 w-80 max-w-screen-lg sm:w-96 mx-auto"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="mb-4 flex flex-col gap-6">
                      <div className="">
                        <Input
                          required
                          size="lg"
                          label="UserName"
                          color="green"
                          name="UserName"
                          onChange={formik.handleChange}
                          value={formik.values.UserName}
                        />{" "}
                        {formik.errors.UserName && formik.touched.UserName && (
                          <h2 className="pt-2"> {formik.errors.UserName}</h2>
                        )}{" "}
                      </div>

                      <div className="">
                        <Input
                          required
                          type="password"
                          size="lg"
                          label="Password"
                          color="green"
                          name="UserPassword"
                          onChange={formik.handleChange}
                          value={formik.values.UserPassword}
                        />{" "}
                        {formik.errors.UserPassword && formik.touched.UserPassword && (
                          <h2 className="pt-2"> {formik.errors.UserPassword}</h2>
                        )}
                      </div>
                    </div>

                    <Button className="mt-7 " type="submit" fullWidth>
                      Login
                    </Button>

                    <Typography
                      color="gray"
                      className="mt-3  mb-[2px] text-center font-normal"
                    >

                    </Typography>
                  </form>
                </Card>
                          
                

              </div>

            </div>

          
          </div>
      </div>



{/* 

<div className="pb-[3%]  mb-[15%] pt-[2px] ">
      <div className=" text-center bg-gray-100 font-medium text-xl py-4">
        <h2>Login</h2>
      </div>

      <Card color="transparent" shadow={false}>
        <form
          className="pt-[2%] mt-9 mb-6 w-80 max-w-screen-lg sm:w-96 mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="">
              <Input
                required
                size="lg"
                label="UserName"
                color="green"
                name="UserName"
                onChange={formik.handleChange}
                value={formik.values.UserName}
              />{" "}
              {formik.errors.UserName && formik.touched.UserName && (
                <h2 className="pt-2"> {formik.errors.UserName}</h2>
              )}{" "}
            </div>

            <div className="">
              <Input
                required
                type="password"
                size="lg"
                label="Password"
                color="green"
                name="UserPassword"
                onChange={formik.handleChange}
                value={formik.values.UserPassword}
              />{" "}
              {formik.errors.UserPassword && formik.touched.UserPassword && (
                <h2 className="pt-2"> {formik.errors.UserPassword}</h2>
              )}
            </div>
          </div>

          <Button className="mt-7 " type="submit" fullWidth>
            Login
          </Button>

          <Typography
            color="gray"
            className="mt-3  mb-[2px] text-center font-normal"
          >
            Not a member?{" "}
            <NavLink
              to={"/admin/register"}
              className="font-medium text-green-500 transition-colors hover:text-green-700"
            >
              Register
            </NavLink>
          </Typography>
        </form>
      </Card>
    </div>
           */}
    
    </>
  )
}

export default AdminLogin