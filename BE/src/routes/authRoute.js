const express = require("express");
const Controller = require("../controllers/auth.controller");
const SchemaValidate = require("../validators/auth.validator");
const Validate = require("../validators");
const jwtServices = require("../services/jwt.services");
const router = express.Router();

router.get("/getAuth", jwtServices.verify, Controller.getAuth);
router.get("/verify/:email", Controller.verify);
// router.get('/getAllUser', Controller.getAllUsers)
router.post(
  "/changePassword",
  jwtServices.verify,
  Validate.body(SchemaValidate.changePassword),
  Controller.changePassword
);
router.post("/login", Validate.body(SchemaValidate.login), Controller.login);
router.post(
  "/registerStudent",
  Validate.body(SchemaValidate.register),
  Controller.registerCustomer
);
router.post(
  "/registerEnterprise",
  Validate.body(SchemaValidate.register),
  Controller.registerEnterprise
);
router.post("/updateProfile/:id", Controller.updateProfile)
router.get('/getAllUser', Controller.getAllUsers)

module.exports = router;
