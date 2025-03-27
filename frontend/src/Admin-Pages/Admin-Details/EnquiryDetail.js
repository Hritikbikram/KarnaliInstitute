import React from 'react'
import { useGetqueriesbyIdQuery } from '../AdminApi/CourseNameApi'
import { useParams } from 'react-router';
import HeaderUp from '../AdComponents/HeaderUp';

const EnquiryDetail = () => {
  
  const {id} = useParams();
  const {data}=useGetqueriesbyIdQuery(id);
  console.log(data);
  return (
    <div>
      

          
    <div className='grid grid-cols-6 bg-teal-50'>

        <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
          <HeaderUp />
        </div>


        <div className='bg-teal-50 col-span-5 p-[2%]'>

          {data !==undefined && 
          
          <div>
            <table className='table-auto w-full text-center'>
              <thead className='border-b border-blue-gray-100 bg-blue-gray-50 '>
                <tr className='p-10'>
                  <th className='text-3xl p-5'>Enquiry Headings</th>
                  <th className='text-3xl'>Applicant Information</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className="text-2xl p-5">Applicant Name</td>
                  <td className="text-2xl p-5">{data?.doubtinfo.Name}</td>
                </tr>
                


                
                

                <tr>
                  <td className="text-2xl p-5">Applicant Email</td>
                  <td className="text-2xl p-5">{data?.doubtinfo.Email}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Mobile Number</td>
                  <td className="text-2xl p-5">{data?.doubtinfo.Mobile}</td>
                </tr>
                
                <tr>
                  <td className="text-2xl p-5">Applicant Alternate Mobile Number</td>
                  <td className="text-2xl p-5">{data?.doubtinfo.AltMob}</td>
                </tr>            

                <tr>
                  <td className="text-2xl p-5">Applicant School/College Name</td>
                  <td className="text-2xl p-5">{data?.doubtinfo.Institute}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Course</td>
                  <td className="text-2xl p-5">{data?.doubtinfo.Course}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Message</td>
                  <td className="text-2xl p-5">{data?.doubtinfo.Message}</td>
                </tr>

              </tbody>

            </table>
          </div>
          
          }
          
          



          
        </div>


    </div>


    </div>
  )
}

export default EnquiryDetail