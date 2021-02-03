const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { auth, authAdmin } = require("../middleware/auth");
const {
  register,
  login,
  readUsers,
  readUser,
  deleteUser,
  updateUser,
} = require("../controller/user");
const {
  readAllCountry,
  readDetailCountry,
  createCountry,
  updateCountry,
  deleteCountry,
} = require("../controller/country");
const {
  readTrip,
  readOneTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("../controller/trip");
const {
  readAllTransaction,
  readOneTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controller/transaction");

// authentication routes
router.post("/register", register);
router.post("/login", login);

// user routes
router.get("/user/:id", auth, readUser);
router.delete("/user/:id", auth, deleteUser);
router.get("/users", auth, readUsers);
router.patch("/user/:id", auth, fileUpload(), updateUser);

// routing country
router.get("/country", readAllCountry);
router.get("/country/:id", readDetailCountry);
router.post("/country", authAdmin, createCountry);
router.patch("/country/:id", authAdmin, updateCountry);
router.delete("/country/:id", authAdmin, deleteCountry);

// routing trip
router.get("/trip", readTrip);
router.get("/trip/:id", readOneTrip);
router.post("/trip", authAdmin, fileUpload(), createTrip);
router.patch("/trip/:id", authAdmin, updateTrip);
router.delete("/trip/:id", authAdmin, deleteTrip);

// routing Transaction
router.get("/transaction", readAllTransaction);
router.get("/transaction/:id", readOneTransaction);
router.post("/transaction", fileUpload(), createTransaction);
router.patch("/transaction/:id", authAdmin, updateTransaction);
router.delete("/transaction/:id", authAdmin, deleteTransaction);

module.exports = router;
