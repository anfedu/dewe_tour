const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.auth = (req, res, next) => {
  let header, token;

  // check if user sending token
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  )
    // reject request and send response access denied
    return res.status(401).send({
      error: { message: "Access denied" },
    });
  try {
    const verified = jwt.verify(token, process.env.JWT_SCREET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({
      error: { message: "Invalid token" },
    });
  }
};

exports.authAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    if (user.role !== "Admin")
      return res
        .status(400)
        .send({ status: 400, message: "invalid operation" });
    next();
  } catch (err) {
    res.status(400).send({ status: 400, message: "Invalid token" });
  }
};
