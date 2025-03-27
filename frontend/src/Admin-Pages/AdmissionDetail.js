import React from 'react'
import Header from './AdComponents/Header'
import { useDeleteAdmissionDetailsMutation, useGetAdmissionQuery } from './AdminApi/CourseNameApi';
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";

const AdmissionDetail = () => {

  const {data}=useGetAdmissionQuery();
  
  const [admissionData]=useDeleteAdmissionDetailsMutation();

  const deleteAdmision=async(id)=>{
    const result =await admissionData({id:id}).unwrap();

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

  return (
    

    <div className='grid grid-cols-6 bg-teal-50'>

    <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
      <Header />
    </div>


    <div className='bg-teal-50 col-span-5 p-[2%]'>
      
      

      
{/* Destionation Table */}

<h1  className='text-4xl font-bold py-5'>Admission Info Table </h1>


<div className='pt-5'>
      <table className="table-auto w-full">
        <thead>

          <tr>
            <th className='text-xl'>S.No</th>
            <th className='text-xl'>Name</th>
            <th className='text-xl'>Gender</th>
            <th className='text-xl'>Email</th>
            <th className='text-xl'>Phone</th>
            <th className='text-xl'>Course</th>
            <th className='text-xl'>Shift</th>
            <th className='text-xl'>Image</th>
            <th className='text-xl'>Action</th>
          </tr>
        </thead>
        <tbody>
          
        {data && data.admission.map((admidet)=>{
                  return(
          <tr className='text-center' key={admidet._id}>
           
            <td className='text-lg p-2'>Place 1</td>
            <td className='text-lg p-2'>{admidet?.Adminame}</td>
            <td className='text-lg p-2'>{admidet?.Admigend}</td>
            <td className='text-lg p-2'>{admidet?.Admimail}</td>
            <td className='text-lg p-2'>{admidet?.Adminum}</td>
            <td className='text-lg p-2'>{admidet?.Admicour}</td>
            <td className='text-lg p-2'>{admidet?.Admishif}</td>
            <td className='text-lg p-2'>{admidet?.Admiimage}</td>
            
            <td className='text-lg p-2'>
              
              
            <NavLink to={`/admin/admission_detail/${admidet._id}`}>
                        <i className="fa-solid fa-pen-to-square">
                      </i>
                        </NavLink>


                        <div onClick={()=>deleteAdmision(admidet?._id)}>
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

export default AdmissionDetail