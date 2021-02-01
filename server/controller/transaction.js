const { Trip, Transaction, Country, User } = require("../models");

// <------ Transaction
exports.readAllTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      attributes: {
        exclude: ["tripId", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: User,
          as: "user",
        },
        {
          model: Trip,
          as: "trip",
          attributes: {
            exclude: ["countryId", "tripId", "createdAt", "updatedAt"],
          },
          include: {
            model: Country,
            as: "country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
      ],
    });
    res.status(200).send({
      status: 200,
      message: "read transaction success",
      data: transaction,
    });
  } catch (err) {
    res.status(500).send({ status: 500, message: "read transaction failed" });
  }
};

exports.readOneTransaction = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Trip,
          as: "trip",
          attributes: {
            exclude: ["countryId", "tripId", "createdAt", "updatedAt"],
          },
          include: {
            model: Country,
            as: "country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
        {
          include: {
            model: User,
            as: "user",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
      ],
    });
    res.status(200).send({
      status: 200,
      message: "read transaction success",
      data: transaction,
    });
  } catch (err) {
    res.status(500).send({ status: 500, message: "read transaction failed" });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    // const { attachmentImage } = req.file;
    // const attachmentName = attachmentImage.name;
    // await attachmentImage.mv(`./images/${attachmentName}`);

    const { counterQty, total, status, tripId, userId, attachment } = req.body;
    const transaction = await Transaction.create({
      // ...req.body,
      counterQty,
      total,
      status,
      tripId,
      userId,
      attachment,
      // attachment: imageTripName,
    });
    res.status(200).send({
      status: 200,
      message: "create transaction success",
      data: transaction,
    });
  } catch (err) {
    res.status(500).send({ status: 500, message: "create transaction failed" });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const id = req.params.id;
    const { counterQty, total, status, attachment, tripId } = req.body;
    const transaction = await Transaction.update(
      {
        counterQty,
        total,
        status,
        attachment,
        tripId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).send({
      status: 200,
      message: "update transaction success",
      data: transaction,
    });
  } catch (err) {
    res.status(500).send({ status: 500, message: "update transaction failed" });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.destroy({
      where: {
        id: id,
      },
    });
    res
      .status(200)
      .send({ status: 200, message: "delete transaction success" });
  } catch (err) {
    res.status(500).send({ status: 500, message: "delete transaction failed" });
  }
};
