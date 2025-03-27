const testimonial=require("../models/TestimonialPage");
const fs =require("fs");


const fetchTestimonial=async(req,res)=>{

  //Find Testimonial
  const TestiState=await testimonial.find();
  //response
  res.json({testimonial:TestiState})
}

//FetchByID

const testibyid=async(req,res)=>{

  //get id by url
  const testid=req.params.getid;

  //find Testinomials by Id
  const testimo=await testimonial.findById(testid)

  //respond
  res.json({testimonial:testimo})

}


//Create Testimonials
const createTestimonial=async(req,res)=>{
  const{
    testimonialperson,
    testimonialcourse,
    testimonialdate,
    testimonialmessage    
  }=req.body;

  console.log(req.body)

  //Get Testimonial

  const wrTestimonial= await testimonial.create({
    TestiName:testimonialperson,
    TestiCourse:testimonialcourse,
    TestiDate:testimonialdate,
    TestiMsg:testimonialmessage,
    TestiImage:req.CImage,
  })

  //Response with new testimonial
  res.json({
    testimonial:wrTestimonial
  })
}



//Update Testimonial
const updateTestimonials=async(req,res)=>{

  const{
    testimonialperson,
    testimonialcourse,
    testimonialdate,
    testimonialmessage  
  }=req.body;

  //updated data

  const id =req.params.id;
  console.log(id)
  
  try{
    const result=await testimonial.findOne({_id:id});

    if(result)
    {
      result.TestiName=testimonialperson || result.TestiName;
      result.TestiCourse=testimonialcourse || result.TestiCourse;
      result.TestiDate=testimonialdate || result.TestiDate;
      result.TestiMsg=testimonialmessage || result.TestiMsg;
      result.TestiImage=req.CImage || result.TestiImage;
      result.save();
      return res
      .status(200)
      .json({ status: "success", message: " Testimonials Updated" });
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

const deleteTestimonials=async(req,res)=>{

  const  deleteid =req.body.id;
    const result= await testimonial.findOne({_id:deleteid});
    
    if (result) {

      fs.unlink("." + result.TestiImage, async function (err) {
        if (err)
          return res
            .status(200)
            .json({ status: "error", message: "Unable to Delete" });
      

        const response = await testimonial.findOneAndDelete({ _id: deleteid });
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
  fetchTestimonialData:fetchTestimonial,
  fetchTestimonialDatabyId:testibyid,
  createTestimonial:createTestimonial,
  updateTestimonies:updateTestimonials,
  deleteTestimonials
}