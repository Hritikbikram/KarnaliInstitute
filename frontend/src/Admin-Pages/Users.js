import { Button, Input, Radio } from '@material-tailwind/react'
import React from 'react'
import Header from './AdComponents/Header'
// import {  useCreateUserMutation, useGetUserQuery } from './AdminApi/CourseNameApi';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import {  useDeleteUserMutation, useGetUsersQuery } from './AdminApi/CourseNameApi';
import { useRegisterUserMutation } from './AdminApi/UserApi';



const Users = () => {


  // const { data } = useGetUserQuery();
  // console.log(data);

  // const [createUserDetails]=useCreateUserMutation();
  // const [deleteUser]=useDelUserQuery();

  const {data}=useGetUsersQuery();
  console.log(data);
    // delete
    

    const [deleteData]= useDeleteUserMutation();




  const [createAdmin]=useRegisterUserMutation();

    
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

  // const userRole = "admin";
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userRole:""
    },
    validationSchema: registerSchema,

    onSubmit: async (values,resetForm) => {
      try {
        const data = {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          userRole:values.userRole,
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


  const deleteus = async (id) => {
    const result = await deleteData({ id: id }).unwrap();
    if(result)
    {
      toast.success(result.message);
      window.location.reload();
    }
    else{
      toast.error(result.message)
    }        


  };


  return (
    <>

      <div className='grid grid-cols-6 bg-teal-50'>

          <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
            <Header />
          </div>


          <div className='bg-teal-50 col-span-5 p-[2%]'>
            
            <h1  className='text-4xl font-bold pb-5'>User Dashboard</h1>



            {/* Course State */}

            <div>

                <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
                    <div className="mb-4 flex gap-6">
                      
                      <div>
                        <h1  className='text-xl font-bold pb-5 pt-[5%] '>Name</h1>

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
                      

                      <div>
                        <h1  className='text-xl font-bold pb-5 pt-[5%] '>Email</h1>

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

                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Password</h1>
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
                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Confirm Password</h1>

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



                      
                      <div>

                          <h1  className='text-xl font-bold pb-5 pt-[5%] '>User Role</h1>

                          <Radio color="red" label="Admin" name="userRole" value="Admin"
                           onChange={formik.handleChange} checked={formik.values.userRole === 'Admin'}
                          />


                          <Radio color="blue" label="Sub-Admin" name="userRole" value="Sub-Admin"  onChange={formik.handleChange} checked={formik.values.userRole === 'Sub-Admin'}/>



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
                          <th className='text-xl'>Name</th>
                          <th className='text-xl'>Username</th>
                          <th className='text-xl'>Password</th>
                          <th className='text-xl'>User Role</th>
                          <th className='text-xl'>Action</th>
                        </tr>
                      </thead>
                      <tbody>

                      {data && data.user.map((usernam)=>{

                        return (
                          <tr className='text-center' key={usernam?._id}>
                              <td className='text-lg p-2'> 1</td>
                              <td className='text-lg p-2'>
                                {usernam?.fullname}</td>
                              <td className='text-lg p-2'>
                                {usernam?.email}
                                </td>
                              <td className='text-lg p-2'>
                                {usernam?.password}</td>
                              <td className='text-lg p-2'>
                                {usernam?.userRole}
                                </td>
                              <td className='text-lg p-2'>
                                  

                                  <NavLink to={`/admin/users_update`}>

                                  <i className="fa-solid fa-pen-to-square p-4 text-blue-500 text-2xl hover:text-blue-800"></i>

                                  </NavLink>

                                  <div onClick={()=>deleteus(usernam._id)} >

                                   <i className="fa-solid fa-trash p-4 text-red-500 text-2xl hover:text-red-800"></i>

                                  </div>
                            


                            </td>
                        </tr>)
                        

                          })}
                        
                        



                      </tbody>
                    </table>
              </div>



            {/* Course State Table end */}






          </div>


      </div>


    </>
  )
}

export default Users