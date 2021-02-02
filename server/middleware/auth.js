const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.auth = (req, res, next) => {
  let header, token;
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  )
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
  let header, token;
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  )
    return res.status(401).send({
      error: { message: "Access denied" },
    });
  try {
    const verified = jwt.verify(token, process.env.JWT_SCREET);
    const user = await User.findOne({ where: { id: verified.id } });
    if (user.role !== "Admin")
      return res
        .status(400)
        .send({ status: 400, message: "invalid operation" });
    next();
  } catch (err) {
    res.status(400).send({
      error: { message: "Invalid token" },
    });
  }
};
