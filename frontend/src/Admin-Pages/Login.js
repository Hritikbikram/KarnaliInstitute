import React from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useLoginUserMutation } from './AdminApi/UserApi';
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { addUserDetail } from './AdFeatures/userSlice';
import loginimg from '../Images/login.webp';




const Login = () => {
  const [login, { isLoading }] = useLoginUserMutation();

  const nav = useNavigate();
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(3, "Too Short !!!")
      .max(50, "Too long !!!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,

    onSubmit: async (values) => {
      try {
        const result = await login(values).unwrap();

        if (result.status === "success") {
          dispatch(addUserDetail(result.users));
          nav("/admin");
        } else {
          toast.error(result.message);
        }
      } catch (e) {
        toast.error(`${e}`);
      }
    },
  });


  return (
    <div className="p-[5%]">







      
    <div className=''>
        <div className="bg-teal-50 grid grid-cols-2 gap-0 md:grid-cols-1 mt-6 ml-[11%] mr-[9%] rounded-3xl ">

          <div className="cakeimg  pr-0">

            <img className='rounded-tl-3xl md:rounded-t-3xl md:rounded-b-none w-[100%]' src={loginimg} alt="Login Image" />

          </div>

          <div className="info p-10 pl-[10%] pt-[15%]">



              <div className='text-center text-3xl font-bold'>
                <h1>Login</h1>
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
                        label="Email Address"
                        color="green"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />{" "}
                      {formik.errors.email && formik.touched.email && (
                        <h2 className="pt-2"> {formik.errors.email}</h2>
                      )}{" "}
                    </div>

                    <div className="">
                      <Input
                        required
                        type="password"
                        size="lg"
                        label="Password"
                        color="green"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />{" "}
                      {formik.errors.password && formik.touched.password && (
                        <h2 className="pt-2"> {formik.errors.password}</h2>
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

        </div>

    </div>

    </div>
  );
}

export default Login