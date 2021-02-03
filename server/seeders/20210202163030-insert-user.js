"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("123456789", saltRounds);
    return queryInterface.bulkInsert("Users", [
      {
        username: "Ahmad Nuril Firdaus",
        role: "User",
        email: "firdausnurilahmad@gmail.com",
        password: hashedPassword,
        phone: "082244956781",
        address: "Jember east Java",
        profile: "image.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Admin",
        role: "Admin",
        email: "admin@admin.com",
        password: hashedPassword,
        phone: "082244956781",
        address: "Jember east Java",
        profile: "image.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
