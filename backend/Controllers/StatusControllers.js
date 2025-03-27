const course=require("../models/coursestate")

const fetchstatus= async (req,res)=>{
  //Find CourseStatus
  const coursestate = await course.find()
  //Respond
  res.json({course:coursestate})

}


const fetchstatusbyid=async (req,res)=>{
  //get id by url
  const stateid=req.params.getid;

  //find the coursestate by id
  const status=await course.findById(stateid) 

  //respond
  res.json({courstatus: status })
}

const recordstatus=async(req,res)=>{

  //GET DATA SENT
  // const title= req.body.title;
  // const body=req.body.body;

  const {
    detnum,
    runclass,
    courseTotal,
    teacherTotal,
    studentTotal
  } = req.body;

  //GET Course State

  try{
    
    const result = await course.findOne({ detnum });

    if (result) {
            return res.status(200).json({
              status: "error",
              message: "You can only edit the data",
            });
    }
    else{

      const courses = await course.create({
        detnum,
        runclass,
        courseTotal,
        teacherTotal,
        studentTotal
      });
      
    
    
      if (courses) {
        return res
          .status(201)
          .json({ status: "success", message: "Course Created" });
      } else {
        return res
          .status(400)
          .json({ status: "error", message: "Unable to create course" });
      }
    
      
    
    }
    
    
    }
    catch(e)
    {
      return res.status(400).json({ status: "error", message: `${e}` });
    }






  //Respond with new course state
  // res.json({course:courses})

}

const updatestatusbyid=async (req,res)=>{
  //get id by url
  const statusid=req.params.id;

  //getdatabyreqbody

  const {
    runclass,
    courseTotal,
    teacherTotal,
    studentTotal
  } = req.body;


  const upid=req.params.id;

  //find record to update
  try{

    const wstatus=await course.findOne({_id:upid});

  //Updated Data

  if(wstatus){

    wstatus.runclass=runclass || wstatus.runclass;
    wstatus.courseTotal=courseTotal || wstatus.courseTotal;
    wstatus.teacherTotal=teacherTotal || wstatus.teacherTotal;
    wstatus.studentTotal=studentTotal || wstatus.studentTotal;

    wstatus.save();
    return res
      .status(200)
      .json({ status: "success", message: " Class Updated" });
  }
  else
  {
    return res
    .status(400)
    .json({ status: "error", message: "Unable to update" });

  }

  }
  catch(e)
  {
    return res.status(400).json({ status: "error", message: `${e}` });

  }
  


}

const deletestatusbyid=async(req,res)=>{
  //get id by url
  const  deleteid =req.body.id;
  const result= await course.findOne({_id:deleteid});


  if (result) {

      const response = await course.findOneAndDelete({ _id: deleteid });
      console.log(response);
      if (response) {
        return res
          .status(200)
          .json({ status: "success", message: "Deleted Successfully" });
      } else {
        return res
          .status(200)
          .json({ status: "error", message: "Unable to Delete" });
      }
    
  } else {
    return res
      .status(200)
      .json({ status: "error", message: "Unable to find data" });
  }
}


module.exports={
  fetchStatus:fetchstatus,
  singlestatus:fetchstatusbyid,
  createStatus:recordstatus,
  updateStatus:updatestatusbyid,
  deleteStatus:deletestatusbyid
}
