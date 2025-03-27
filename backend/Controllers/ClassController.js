const classes=require("../models/Class");
const detailinfos=require("../models/CourseDetails");
const fs =require("fs");

const fetchClassCourse=async(req,res)=>{

  //findclass
  const classStates=await classes.find()
  res.json({ClassesCourses:classStates})
}

const fetchClassCoursebyId=async(req,res)=>{
  //get id by url
  const classid=req.params.getid;

  //find class by id
  const classCour=await classes.findById(classid)
  res.json({ClassesCourses:classCour})
}


const fetchclcodetbyid=async(req,res)=>{
  const corid=req.params.algetid;

  const ClassesDetails=await classes.findById(corid);
  console.log(ClassesDetails);
  
  const CoursesDetails=await detailinfos.findOne({CourseName:ClassesDetails.ClassName, ClassState:ClassesDetails.ClassState});

  res.json({CoursesInformation:CoursesDetails});
  
}

const createClass=async(req,res)=>{

  const{
    classtitle,
    classtime,
    classst,
    classdat
  }=req.body;

  console.log(req.body)

  try{
    const result = await classes.findOne({ClassName:classtitle,ClassState:classst});
    if(result)
    {
      
      return res.status(200).json({
        status: "error",
        message: "The Class and Class Status Already Exists",
      });

    }
    else{
      

  const wrClassCo= await classes.create({

    ClassName:classtitle,
    ClassDuration:classtime,
    ClassState:classst,
    ClassDate:classdat,
    ClassImage:req.CImage,


  })

  
  if (wrClassCo) {
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


const updateClasses=async(req,res)=>{
  
  const{
    classtitle,
    classtime,
    classst,
    classdat
  }=req.body;

  const id=req.params.id;
  console.log(id)
  

  try{
    const result=await classes.findOne({_id:id});

    if(result)
    {
      result.ClassName=classtitle || result.ClassName;
      result.ClassDuration=classtime || result.ClassDuration;
      result.ClassDate=classdat || result.ClassDate;
      result.ClassState=classst || result.ClassState;
      result.ClassImage=req.CImage || result.ClassImage;
      result.save();
      return res
      .status(200)
      .json({ status: "success", message: " Class Updated" });
      } else {
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

const deleteSelected=async(req,res)=>{

  const  deleteid =req.body.id;
    const result= await classes.findOne({_id:deleteid});
    
    if (result) {

      fs.unlink("." + result.ClassImage, async function (err) {
        if (err)
          return res
            .status(200)
            .json({ status: "error", message: "Unable to Delete" });
      

        const response = await classes.findOneAndDelete({ _id: deleteid });
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
      
    });
   } else {
      return res
        .status(200)
        .json({ status: "error", message: "Unable to find data" });
    }

}


module.exports={
  gtclass:fetchClassCourse,
  gtclassid:fetchClassCoursebyId,
  ctclass:createClass,
  uptclass:updateClasses,
  fetchclcodetbyid,
  deleteSelected
}