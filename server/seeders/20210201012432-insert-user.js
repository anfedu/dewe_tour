"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "Ahmad Nuril Firdaus",
        role: "User",
        email: "firdausnurilahmad@gmail.com",
        password: "123456789",
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
        password: "admin",
        password: "123456789",
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
