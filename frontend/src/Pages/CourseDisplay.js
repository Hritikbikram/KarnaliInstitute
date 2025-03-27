import { Option, Select } from '@material-tailwind/react'
import React from 'react'
import { useGetClassQuery } from '../Admin-Pages/AdminApi/CourseNameApi'

const CourseDisplay = () => {

  const {data}=useGetClassQuery();
  console.log(data)

  return (
    <div>


            
      <Select variant="outlined" label="Select Course">


        <Option> Choose Any Course </Option>

            {data && data.ClassesCourses.map((admclasses)=>{

              return

                <Option id={admclasses?._id} value={admclasses?.ClassName}>{admclasses?.ClassName}</Option>
                                          
                
              
            })}



        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
            

    </div>
  )
}

export default CourseDisplay