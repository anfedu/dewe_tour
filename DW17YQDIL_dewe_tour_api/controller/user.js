const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { User } = require("../models");

exports.register = async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;

    const schema = joi.object({
      username: joi.string().min(3).required(),
      email: joi.string().email().min(10).required(),
      password: joi.string().min(8).required(),
      phone: joi.string().min(8).max(20).required(),
      address: joi.string().min(8).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(500).send({
        status: 500,
        error: {
          message: error.details[0].message,
        },
      });
    }

    const checkEmail = await User.findOne({
      where: {
        email,
      },
    });

    if (checkEmail) {
      return res.status(500).send({
        status: 500,
        error: {
          status: 500,
          message: "email already been existed",
        },
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      role: "User",
      profile: "image.png",
    });

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SCREET
    );

    res.status(200).send({
      status: 200,
      message: "you have been registered",
      data: {
        id: user.id,
        username,
        email,
        phone,
        address,
        role: user.role,
        profile: user.profile,
        token,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const schema = joi.object({
      email: joi.string().email().min(10).required(),
      password: joi.string().min(8).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(500).send({
        status: 500,
        error: {
          message: error.details[0].message,
        },
      });
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user)
      return res.status(500).send({
        status: 500,
        error: {
          message: "Email or password invalid",
        },
      });

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass)
      return res.status(500).send({
        status: 500,
        error: {
          message: "Email or password invalid",
        },
      });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SCREET);

    res.status(200).send({
      status: 200,
      message: "login success",
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        address: user.address,
        profile: user.profile,
        role: user.role,
        token,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.readUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      status: 200,
      message: "get data users success",
      data: users,
    });
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
};

exports.readUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({
      where: { id: id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    return res.status(200).json({
      message: "get data User success",
      data: user,
    });
  } catch (err) {
    res.status(500).send({ status: 500, message: "get data User failed" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({ status: 200, message: "delete user success" });
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { profileImage } = req.files;
    const imageProfileName = profileImage.name;
    await profileImage.mv(`./images/${imageProfileName}`);

    const user = await User.update(
      {
        profile: imageProfileName,
      },
      {
        where: { id },
      }
    );

    if (user) {
      const userResult = await User.findOne({
        where: { id },
        attributes: { exclude: ["createdAt", "updatedAt", "password"] },
      });
      return res.status(200).send({
        data: userResult,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
