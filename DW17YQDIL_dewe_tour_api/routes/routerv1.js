const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { auth, authAdmin } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
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
router.post("/country", auth, createCountry);
router.patch("/country/:id", auth, updateCountry);
router.delete("/country/:id", auth, deleteCountry);

// routing trip
router.get("/trip", readTrip);
router.get("/trip/:id", readOneTrip);
router.post("/trip", auth, createTrip);
router.patch("/trip/:id", auth, updateTrip);
router.delete("/trip/:id", auth, deleteTrip);

// routing Transaction
router.get("/transaction", readAllTransaction);
router.get("/transaction/:id", readOneTransaction);
router.post("/transaction", auth, createTransaction);
router.patch("/transaction/:id", auth, updateTransaction);
router.delete("/transaction/:id", auth, deleteTransaction);

module.exports = router;
