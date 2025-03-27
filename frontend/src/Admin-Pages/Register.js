import React from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { useRegisterUserMutation } from './AdminApi/UserApi';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { toast } from "react-toastify";
import { useCreateUserMutation } from './AdminApi/CourseNameApi';



const Register = () => {
  
  const [createAdmin, { isLoading }] = useRegisterUserMutation();
 
  // const [createAdmin, { isLoading }] = useCreateUserMutation();

  const nav = useNavigate();

  
  const registerSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Required")
      .min(3, "Too Short !!!")
      .max(50, "Too long !!!"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(3, "Too Short !!!")
      .max(50, "Too long !!!"),
    confirmPassword: Yup.mixed()
      .test(
        "Password not match",
        "Password Doesn't match",
        (value) => value && value === formik.values.password
      )
      .required("Required"),
  });

  const userRole = "admin";
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,

    onSubmit: async (values,resetForm) => {
      try {
        const data = {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          userRole,
        };

        const result = await createAdmin(data).unwrap();
        console.log(result);
        if (result.status === "success") {
          toast.success(result.message);
          // nav("/admin");
          formik.resetForm();
        } else {
          toast.error(result.message);
        }
      } catch (e) {
        toast.error(`${e}`);
      }
    },
  });


  
  return (
    <div className="pb-[3%] mb-[6%]">
      <div className=" text-center bg-gray-100 font-medium text-xl py-4">
        <h2> Register</h2>
      </div>

      <Card color="transparent" shadow={false}>
        <form
          className="pt-[2%] pb-[8px] mt-8 mb-6 w-80 max-w-screen-lg sm:w-96 mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="">
              <Input
                size="lg"
                label="Full Name"
                name="fullName"
                color="green"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                required
              />{" "}
              {formik.errors.fullName && formik.touched.fullName && (
                <h2 className="pt-2"> {formik.errors.fullName}</h2>
              )}{" "}
            </div>
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
                autoComplete="false"
                color="green"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />{" "}
              {formik.errors.password && formik.touched.password && (
                <h2 className="pt-2"> {formik.errors.password}</h2>
              )}
            </div>
            <div className="">
              <Input
                required
                type="password"
                size="lg"
                label="Password (again)"
                color="green"
                autoComplete="false"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />{" "}
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <h2 className="pt-2"> {formik.errors.confirmPassword}</h2>
                )}
            </div>
          </div>

          <Button className="mt-7" type="submit" fullWidth>
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Register