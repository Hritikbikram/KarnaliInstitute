//LOAD ENV
if(process.env.NODE_ENV != "production")
{
  require("dotenv").config();
}


const mongoose=require("mongoose")




async function connectdb(){
  try{
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to Database")
  }
  catch(err)
  {
    console.log(err)
  }
}

module.exports=connectdb;