import React from 'react'
import HeaderUp from '../AdComponents/HeaderUp'
import { useParams } from 'react-router'
import { useGetAdmissionbyIdQuery } from '../AdminApi/CourseNameApi';
import { baseurls } from '../AdminApi/BaseUrl';

const AdmissionInf = () => {

  const {id}=useParams();
  const {data}=useGetAdmissionbyIdQuery(id);
  console.log(data)
  
  return (

    
    


    
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
                  <th className='text-3xl'>Admission Headings</th>
                  <th className='text-3xl'>Applicant Information</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className='text-2xl'>Applicant Image</td>
                  <td>
                     <img
                        className="w-full h-60 object-cover" src={`${baseurls}${data?.admission.Admiimage}`}/>
                  </td>
                </tr>

                <tr>
                  <td className="text-2xl p-5">Applicant Name</td>
                  <td className="text-2xl p-5">{data?.admission.Adminame}</td>
                </tr>
                

                <tr>
                  <td className="text-2xl p-5">Applicant Gender</td>
                  <td className="text-2xl p-5">{data?.admission.Admigend}</td>
                </tr>


                
                

                <tr>
                  <td className="text-2xl p-5">Applicant Email</td>
                  <td className="text-2xl p-5">{data?.admission.Admimail}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Mobile Number</td>
                  <td className="text-2xl p-5">{data?.admission.Adminum}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Permanent Address</td>
                  <td className="text-2xl p-5">{data?.admission.Admipadd}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Temporary Address</td>
                  <td className="text-2xl p-5">{data?.admission.Admitadd}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Date of Birth</td>
                  <td className="text-2xl p-5">{data?.admission.Admidate}</td>
                </tr>


                
                <tr>
                  <td className="text-2xl p-5">Applicant Guardian Name</td>
                  <td className="text-2xl p-5">{data?.admission.Admiguan}</td>
                </tr>
                

                
                <tr>
                  <td className="text-2xl p-5">Applicant Guardian Contact</td>
                  <td className="text-2xl p-5">{data?.admission.Admiguap}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Academic Level</td>
                  <td className="text-2xl p-5">{data?.admission.Admileve}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant School/College Name</td>
                  <td className="text-2xl p-5">{data?.admission.Admischo}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Course</td>
                  <td className="text-2xl p-5">{data?.admission.Admicour}</td>
                </tr>

                
                <tr>
                  <td className="text-2xl p-5">Applicant Shift</td>
                  <td className="text-2xl p-5">{data?.admission.Admishif}</td>
                </tr>

              </tbody>

            </table>
          </div>
          
          }
          
          



          
        </div>


    </div>



  )
}

export default AdmissionInf