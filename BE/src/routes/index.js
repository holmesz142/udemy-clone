const express = require("express");
const productRoute = require("./productRoute");
const authRoute = require("./authRoute");
const paypalRoute = require("./paypalRoute");
const classRoute = require("./classRoute")

const router = express.Router();

router.use("/product", productRoute);
router.use("/class", classRoute)
router.use("/paypal", paypalRoute);
router.use("/auth", authRoute);


module.exports = router;
