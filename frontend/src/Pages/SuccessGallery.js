import { Breadcrumbs, Card, CardBody, Typography} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useGetSuccessQuery } from '../Admin-Pages/AdminApi/CourseNameApi';
import { baseurls } from '../Admin-Pages/AdminApi/BaseUrl';

const SuccessGallery = () => {

  const {data}=useGetSuccessQuery();
  console.log(data);

  return (
    <>
                        
      <div className='sug'>


<div className=' py-[6%] pl-[12%]'>

  <h1 className='text-4xl text-white font-extrabold  pb-5'>Our Success Stories</h1>
  
  <div className='pt-[10%]'>  
  
      <Breadcrumbs>
        <NavLink href="#" className="opacity-60 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </NavLink>
        <NavLink href="#" className="opacity-60 font-bold">
          <span>Pages</span>
        </NavLink>
        <NavLink href="#" className="font-bold">Success Gallery</NavLink>
      </Breadcrumbs>

  </div>

</div>


</div>


{/* Our Success Gallery */}

<div className='px-[10%] py-12'>








<div className='grid grid-cols-3  md:grid md:grid-cols-1 md:grid-lg-2 gap-7'>


{data && data.SuccessStory.map((allsuccess)=>{
  return(

    
      <div key={allsuccess?._id}>
          <Card className="w-full max-w-[26rem] shadow-lg border-2">
          

              <div className='p-3'>  
                
                <img
                  src={`${baseurls}${allsuccess?.SuccessImage}`}
                  alt="ui/ux review check" className='rounded-[100%] w-[30%]'
                />

              </div>
                
              <CardBody>

                <Typography color="gray">
                    Working on:
                </Typography>

                <Typography className="font-semibold">
                {allsuccess?.SuccessPlace}
                </Typography>


              <div className='py-3'>

                <Typography>
                {allsuccess?.SuccessName}
                </Typography>


                <Typography>
                {allsuccess?.SuccessJob}
                </Typography>

              </div>

              <div>
                <Typography>

                {allsuccess?.SuccessDate}

                </Typography>
              </div>


                
                
                
                
              </CardBody>

              
              
          </Card>          
      </div>

  )
})}



              





              
  
</div>






</div>



{/* Our Success Gallery End */}


    
    </>
  )
}

export default SuccessGallery