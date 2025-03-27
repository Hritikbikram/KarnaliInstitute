const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");





const fetchallUsers=async(req,res)=>{
  const userstate=await user.find();
  res.json({user:userstate})
}

const fetchaUsersbyid=async(req,res)=>{
  const userid=req.params.getid;
  console.log(req.params);

  const userdet=await user.findById(userid)
  res.json({user:userdet})
}





const createAdmin = async (req, res) => {
  const { fullName, email, password, userRole } = req.body;
  try {
    const adminExists = await user.find({ email });

    if (adminExists.length !== 0) {
      return res.status(200).json({
        status: "error",
        message: "Email already Registered. Use different email",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await user.create({
        fullName,
        email,
        password: hashedPassword,
        userRole,
      });

      console.log(result);
      if (result) {
        return res
          .status(201)
          .json({ status: "success", message: "User Registered" });
      } else {
        return res
          .status(200)
          .json({ status: "error", message: "Unable to Register" });
      }
    }
  } catch (e) {
    return res.status(400).json({ status: "error", message: `${e}` });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await user.find({ email });

    if (userExists.length !== 0) {
      const matchPassword = bcrypt.compareSync(
        password,
        userExists[0].password
      );
      if (matchPassword) {
        const token = jwt.sign(
          {
            userID: userExists[0]._id,
            userRole: userExists[0].userRole,
          },
          "tokencrypt"
        );
        return res.status(200).json({
          status: "success",
          users: {
            token,
          },
        });
      } else {
        return res
          .status(200)
          .json({ status: "error", message: "Invalid Login Credential" });
      }
    } else {
      return res
        .status(200)
        .json({ status: "error", message: "User is not registered" });
    }
  } catch (e) {
    return res.status(400).json({ status: "error", message: `${e}` });
  }
};


const deleteUser=async(req,res)=>{

    const  deleteid =req.body.id;
    const result= await user.findOne({_id:deleteid});
    
    if (result) {
      
        const response = await user.findOneAndDelete({ _id: deleteid });
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

module.exports = {
  fetchallUsers,
  fetchaUsersbyid,
  createAdmin,
  userLogin,
  deleteUser
};
