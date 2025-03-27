const admission=require("../models/Admission")
const fs =require("fs");


const fetchadmission=async(req,res)=>{

  const AdmiState= await admission.find();
  res.json({admission:AdmiState})
}

//fetch by id
const admissionbyid=async(req,res)=>{

  //get id by url
  const admid=req.params.getid;

  //find Testinomials by Id
  const admimo=await admission.findById(admid)

  //respond
  res.json({admission:admimo})

}


//Create Testimonials
const createAdmission=async(req,res)=>{
  const{
    admissionname,
    admissiongender,
    admissionmail,
    admissionphone,
    admissionpeadd,
    admissionteadd,
    admissiondob,
    admissiongudnam,
    admissiongudco,
    admissionlev,
    admissionscl,
    admissionsub,
    admissionshift

  }=req.body;

  console.log(req.body)

  //Get Testimonial

  const wradmi= await admission.create({
    Adminame:admissionname,
    Admigend:admissiongender,
    Admimail:admissionmail,
    Adminum:admissionphone,
    Admipadd:admissionpeadd,
    Admitadd:admissionteadd,
    Admidate:admissiondob,
    Admiguan:admissiongudnam,
    Admiguap:admissiongudco,
    Admileve:admissionlev,
    Admischo:admissionscl,
    Admicour:admissionsub,
    Admishif:admissionshift,
    Admiimage:req.CImage,

  })

  
  if (wradmi) {
    return res
      .status(201)
      .json({ status: "success", message: "Admission Form Filled" });
  } else {
    return res
      .status(400)
      .json({ status: "error", message: "Error in Admission Submission" });
  }
  
}



const deleteAdmission=async(req,res)=>{

  const  deleteid =req.body.id;
    const result= await admission.findOne({_id:deleteid});
    
    if (result) {

      fs.unlink("." + result.Admiimage, async function (err) {
        if (err)
          return res
            .status(200)
            .json({ status: "error", message: "Unable to Delete" });
      

        const response = await admission.findOneAndDelete({ _id: deleteid });
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
  fetchAdmissionData:fetchadmission,
  fetchAdmissionDataById:admissionbyid,
  createAdmission,
  deleteAdmission
}