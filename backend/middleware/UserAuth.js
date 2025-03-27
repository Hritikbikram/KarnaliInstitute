const jwt = require("jsonwebtoken");
module.exports.checkUserRole = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  try {
    if (token) {
      const decode = jwt.decode(token, "tokencrypt");
      if (decode) {
        req.decode = decode;
        return next();
      } else {
        return res
          .status(400)
          .json({ status: "error", message: "You are not authorized" });
      }
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "You are not authorized" });
    }
  } catch (e) {
    return res.status(400).json({ status: "error", message: `${e}` });
  }
};
