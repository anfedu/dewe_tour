const { Country, Trip } = require("../models");

// <----- start Country schema
exports.readAllCountry = async (req, res) => {
  try {
    const countrys = await Country.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      status: 200,
      message: "read Country success",
      data: countrys,
    });
  } catch (err) {
    res.status(500).send({ status: 500, message: "read Country failed" });
  }
};

exports.readDetailCountry = async (req, res) => {
  try {
    const id = req.params.id;
    const country = await Country.findOne({
      where: { id: id },
    });
    res.status(200).send({
      status: 200,
      message: "read detail country success",
      data: country,
    });
  } catch (err) {
    res
      .status(500)
      .send({ status: 500, message: "read detail country failed" });
  }
};

exports.createCountry = async (req, res) => {
  try {
    const { name } = req.body;
    const country = await Country.create({
      name,
    });
    res.status(200).send({
      status: 200,
      message: "create Country success",
      data: country,
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: "create Country failed",
    });
  }
};

exports.updateCountry = async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const country = await Country.update(
      {
        name,
      },
      { where: { id: id } }
    );
    res
      .status(200)
      .send({ status: 200, message: "update country success", data: country });
  } catch (err) {
    res.status(500).send({ status: 200, message: "update country failed" });
  }
};

exports.deleteCountry = async (req, res) => {
  try {
    const id = req.params.id;
    const country = await Country.destroy({
      where: { id: id },
    });
    res
      .status(200)
      .send({ status: 200, message: "delete country success", data: country });
  } catch (err) {
    res.status(500).send({ status: 500, message: "delete country failed" });
  }
};
// end country -->
// --------------------------------------------------------------------------->
