const detailinfos=require("../models/CourseDetails");

const classdetailin=require("../models/Class");

const fetchCourseDet=async(req,res)=>{

  //FindDetails
  const Details=await detailinfos.find();


  res.json({CourseInfo:Details})


}

const fetchDetailsbyID= async(req,res)=>{
  const detid=req.params.getid;

  

  const details=await detailinfos.findById(detid)


  res.json({CourseDetails:details})
}



const fetchcourseinfobyid=async(req,res)=>{
  
  const ClassesDetails=await classdetailin.find();
  const CoursesDetails=await detailinfos.find();
  
  
  // const info=req.params.couid;
  // console.log(info);

  // const codetails=await detailinfos.findOne();

  // const result = await detailinfos.findOne({ CourseName: couid });

  // res.json({CourseDetails:result})


}





const recordDetails=async(req,res)=>{
  const{
    corsname,
    corsfullnam,
    corsdura,
    corstate,
    corspath,
    corsdesp,
    corsben,
    corscont
  }=req.body;

  console.log(req.body)

  try{

    const result=await detailinfos.findOne({CourseName:corsname,ClassState:corstate });
    if(result)
    {
      
      return res.status(200).json({
        status: "error",
        message: "The Course and Course Status Already Exists",
      });

    }
    else
    {
      const wrcoursedet=await detailinfos.create({
        CourseName:corsname,
        CourseSkName:corsfullnam,
        CourseDuration:corsdura,
        ClassState:corstate,
        CareerAfter:corspath,
        CourseDetails:corsdesp,
        CourseBenefits:corsben,
        CourseContents:corscont
      })
  
      if (wrcoursedet) {
        return res
          .status(201)
          .json({ status: "success", message: "Details Created" });
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
}







//update
const courseDetailUpdate= async(req,res)=>{
  const{
    corsname,
    corsfullnam,
    corsdura,
    corstate,
    corspath,
    corsdesp,
    corsben,
    corscont
  }=req.body;
  
  const id = req.params.id;
  console.log(id);

  try {
    const result = await detailinfos.findOne({ _id: id });

    if(result){
      result.CourseName=corsname || result.CourseName;
      result.CourseSkName = corsfullnam || result.CourseSkName;
      result.CourseDuration = corsdura || result.CourseDuration;
      result.ClassState = corstate || result.ClassState;
      result.CareerAfter = corspath || result.CareerAfter;
      result.CourseDetails = corsdesp || result.CourseDetails;
      result.CourseBenefits = corsben || result.CourseBenefits;
      result.CourseContents = corscont|| result.CourseContents;
      result.save()
      return res
      .status(200)
      .json({ status: "success", message: " Course Details Updated" });
      } else {
        return res
          .status(400)
          .json({ status: "error", message: "Unable to update" });
      }
    } catch (e) {
      return res.status(400).json({ status: "error", message: `${e}` });
    }
}



const deleteCourseDetailsDatas= async(req,res)=>{
  const  deleteid =req.body.id;
    const result= await detailinfos.findOne({_id:deleteid});
    
    if (result) {

        const response = await detailinfos.findOneAndDelete({ _id: deleteid });
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
  fetchCourseDet,
  fetchDetailsbyID,
  fetchcourseinfobyid,
  recordDetails,
  courseDetailUpdate,
  deleteCourseDetailsDatas
}