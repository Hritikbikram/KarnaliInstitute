import React from 'react'
import Header from './AdComponents/Header'
import { useDeleteEnquiryMutation, useGetEnquiryDetailQuery } from './AdminApi/CourseNameApi';
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";

const AdminQueries = () => {
  

  const {data}=useGetEnquiryDetailQuery();

  const [enquiryDatas]=useDeleteEnquiryMutation();

  const deleteEnquiry=async(id)=>{
    const result =await enquiryDatas({id:id}).unwrap();

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

<h1  className='text-4xl font-bold py-5'>Queries Table </h1>


<div className='pt-5'>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className='text-xl'>S.No</th>
            <th className='text-xl'>Name</th>
            <th className='text-xl'>Email</th>
            <th className='text-xl'>Mobile</th>
            <th className='text-xl'>Alternate Number</th>
            <th className='text-xl'>Institute</th>
            <th className='text-xl'>Courses</th>
            <th className='text-xl'>Message</th>
            <th className='text-xl'>Action</th>
          </tr>
        </thead>
        <tbody>
          
          
        {data && data.enquiry.map((Enquirydet)=>{
                  return(
          
          <tr className='text-center' key={Enquirydet?._id}>
            <td className='text-lg p-2'>1</td>
            <td className='text-lg p-2'>{Enquirydet?.Name}</td>
            <td className='text-lg p-2'>{Enquirydet?.Email}</td>
            <td className='text-lg p-2'>{Enquirydet?.Mobile}</td>
            <td className='text-lg p-2'>{Enquirydet?.AltMob}</td>
            <td className='text-lg p-2'>{Enquirydet?.Institute}</td>
            <td className='text-lg p-2'>{Enquirydet?.Course}</td>
            <td className='text-lg p-2'>{Enquirydet?.Message}</td>
            <td className='text-lg p-2'>
              
              
            <NavLink to={`/admin/queries_detail/${Enquirydet?._id}`}>
                        <i className="fa-solid fa-pen-to-square">
                      </i>
                        </NavLink>



                        <div onClick={()=>deleteEnquiry(Enquirydet?._id)}>
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

export default AdminQueries