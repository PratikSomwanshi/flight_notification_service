const router = require("express").Router();

const airplaneRoute = require("./airplane.route");

router.use("/noti", airplaneRoute);

module.exports = router;
