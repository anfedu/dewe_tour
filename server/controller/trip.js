const { Country, Trip } = require("../models");

// <------ start Trip schema
exports.readTrip = async (req, res) => {
  try {
    const trip = await Trip.findAll({
      include: {
        model: Country,
        as: "country",
        attributes: {
          exclude: ["countryId", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["countryId", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ message: "read trip success", data: trip });
  } catch (err) {
    res.status(500).send({ message: "read trip failed" });
  }
};

exports.readOneTrip = async (req, res) => {
  try {
    const id = req.params.id;
    const trip = await Trip.findOne({
      include: {
        model: Country,
        as: "country",
        attributes: {
          exclude: ["countryId", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["countryId", "createdAt", "updatedAt"],
      },
      where: { id: id },
    });
    res
      .status(200)
      .send({ status: 200, message: "read trip success", data: trip });
  } catch (err) {
    res.status(500).send({ status: 500, message: "read trip failed" });
  }
};

exports.createTrip = async (req, res) => {
  try {
    // const { tripImage } = req.files;
    // const imageTripName = tripImage.name;
    // await tripImage.mv(`./images/${imageTripName}`);
    const {
      title,
      countryId,
      accomodation,
      transportation,
      eat,
      day,
      night,
      dateTrip,
      price,
      quota,
      description,
      image,
      screen1,
      screen2,
      screen3,
    } = req.body;

    const trip = await Trip.create({
      title,
      countryId,
      accomodation,
      transportation,
      eat,
      day,
      night,
      dateTrip,
      price,
      quota,
      description,
      image,
      screen1,
      screen2,
      screen3,
    });
    res
      .status(200)
      .send({ status: 200, message: "create trip success", data: trip });
  } catch (err) {
    res.status(500).send({ status: 500, message: "create trip failed" });
  }
};

exports.updateTrip = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      title,
      countryId,
      accomodation,
      transportation,
      eat,
      day,
      night,
      dateTrip,
      price,
      quota,
      description,
      image,
    } = req.body;
    const trip = await Trip.update(
      {
        title,
        countryId,
        accomodation,
        transportation,
        eat,
        day,
        night,
        dateTrip,
        price,
        quota,
        description,
        image,
        attributes: {
          exclude: ["createAt", "updateAt"],
        },
      },
      { where: { id: id } }
    );
    res
      .status(200)
      .send({ status: 200, message: "update trip success", data: trip });
  } catch (err) {
    res.status(500).send({ status: 500, message: "update trip failed" });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const id = req.params.id;
    const trip = await Trip.destroy({
      where: { id: id },
    });
    res.status(200).send({ status: 200, message: "delete trip success" });
  } catch (err) {
    res.status(500).send({ status: 500, message: "delete trip failed" });
  }
};
