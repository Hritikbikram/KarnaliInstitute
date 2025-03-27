const enquiry=require("../models/QueriesPage")

const fetchdoubt=async(req,res)=>{

    //Find Questions
    const queries=await enquiry.find()
    //response
    res.json({enquiry:queries})
}

const fetchdoubtbyid=async(req,res)=>{
  //get id by url
  const doubtid=req.params.id;

  //find doubt by id
  const doubts = await enquiry.findById(doubtid)

  //respond
  res.json({doubtinfo: doubts})
}


const recordDoubts= async(req,res)=>{
  const {
    conname,
    conmail,
    conphone,
    altconphone,
    conscl,
    consub,
    conmsg,
  } = req.body;

  console.log(req.body)

  //GET DoubtState
  
  try{
    
    const wrdoubt=await enquiry.create({
      Name:conname,
      Email:conmail,
      Mobile:conphone,
      AltMob:altconphone,
      Institute:conscl,
      Course:consub,
      Message:conmsg,
    })

    
    if (wrdoubt) {
      return res
        .status(201)
        .json({ status: "success", message: "Enquiry Sent" });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "Unable to sent enquiry" });
    }
    
    
    }
    catch(e)
    {
      return res.status(400).json({ status: "error", message: `${e}` });
    }





}



const deleteQueries=async(req,res)=>{

  const  deleteid =req.body.id;
  const result= await enquiry.findOne({_id:deleteid});
  
  if (result) {
    
      const response = await enquiry.findOneAndDelete({ _id: deleteid });
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
  fetchQueriess:fetchdoubt,
  fetchQueriesbyid:fetchdoubtbyid,
  createquerr:recordDoubts,
  deleteQueries
}