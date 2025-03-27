const about=require("../models/AboutPage");
const fs =require("fs");


const fetchAbout=async (req,res)=>{
  //Find About
  const aboutState = await about.find()
  //Respond
  res.json({about:aboutState})
}

//FetchById

const aboutByid=async (req,res)=>{
  //get id by url
  const aboutid=req.params.getId;

  console.log(req.params);

  //find the coursestate by id
  const aboutus=await about.findById(aboutid) 
  

  //respond
  res.json({about: aboutus })
}



//Create Data

const createAbout=async (req,res)=>{
   
  //GET DATA SENT
  // const abouttitle= req.body.abttitle;
  // const aboutbody=req.body.abtdescription;
  // const aboutimage=req.body.abtimage;

  const {
    abouttitle,
    aboutdescription,
  } = req.body;

console.log(req.body)
  //GET Course State
  const wrabout = await about.create({
    abttitle:abouttitle,
    abtdescription:aboutdescription,
    abtimage:req.CImage,
  });

  //Respond with new course state
  res.json({about:wrabout})


  

}

//Update
const aboutUpdate = async (req, res) => {
  const { abouttitle, abtdescription } = req.body;
  //Updated Data
  const id = req.params.id;
  console.log(id);

  try {
    const result = await about.findOne({ _id: id });
    if (result) {
      result.abttitle = abouttitle || result.abttitle;
      result.abtdescription = abtdescription || result.abtdescription;
      result.abtimage = req.CImage || result.abtimage;
      result.save();
      return res
        .status(200)
        .json({ status: "success", message: " About Updated" });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "Unable to update" });
    }
  } catch (e) {
    return res.status(400).json({ status: "error", message: `${e}` });
  }
};


//Delete

const deleteaboutbyid=async(req,res)=>{
  //get id by url
  const deleteabout=req.params.id;

  //Delete the data
  const result = await about.findOne({ _id: deleteabout });

  if (result) {
    fs.unlink("." + result.abtimage, async function (err) {
      if (err)
        return res
          .status(200)
          .json({ status: "error", message: "Unable to Delete" });
      const response = await about.findOneAndDelete({ _id: deleteabout });
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


 const deletedata=async(req,res)=>{
  
    const  deleteid =req.body.id;
    const result= await about.findOne({_id:deleteid});
    
    if (result) {

      fs.unlink("." + result.abtimage, async function (err) {
        if (err)
          return res
            .status(200)
            .json({ status: "error", message: "Unable to Delete" });
      

        const response = await about.findOneAndDelete({ _id: deleteid });
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
  fetchAboutdata:fetchAbout,
  fetchAboutdataById:aboutByid,
  createAboutdata:createAbout,
  updateAboutdata:aboutUpdate,
  deleteAboutdata:deleteaboutbyid,
  deletedata
}