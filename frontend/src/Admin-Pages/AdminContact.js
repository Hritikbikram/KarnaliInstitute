import React from 'react'
import Header from './AdComponents/Header'
import { useDeleteContactsMutation, useGetContactDetailQuery } from './AdminApi/CourseNameApi';
import { toast } from "react-toastify";


const AdminContact = () => {

  
  const {data}=useGetContactDetailQuery();

  const [contactDatas]=useDeleteContactsMutation();

  const deleteContactDetail=async(id)=>{
    const result =await contactDatas({id:id}).unwrap();

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

<h1  className='text-4xl font-bold py-5'>Contact Table </h1>


<div className='pt-5'>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className='text-xl'>S.No</th>
            <th className='text-xl'>Contact Name</th>
            <th className='text-xl'>Email</th>
            <th className='text-xl'>Number</th>
            <th className='text-xl'>Subject</th>
            <th className='text-xl'>Message</th>
            <th className='text-xl'>Action</th>
          </tr>
        </thead>
        <tbody>

          
        {data && data.ContactDetails.map((Contactdet)=>{
                  return(
          
          
          
          <tr className='text-center' key={Contactdet?._id}>
            <td className='text-lg p-2'>Place 1</td>
            <td className='text-lg p-2'>{Contactdet?.ContactName}</td>
            <td className='text-lg p-2'>{Contactdet?.ContactEmail}</td>
            <td className='text-lg p-2'>{Contactdet?.ContactNumber}</td>
            <td className='text-lg p-2'>{Contactdet?.ContactSubject}</td>
            <td className='text-lg p-2'>{Contactdet?.ContactMessage}</td>
            
            <td>
            <div onClick={()=>deleteContactDetail(Contactdet?._id)}>
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

export default AdminContact