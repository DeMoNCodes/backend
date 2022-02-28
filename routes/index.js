var express = require("express");
var router = express.Router();
import indexRoute from "./routes/indexroute.js";

router.use("", indexRoute);

// router.use("/applyjob", applyJobRoute);
export default router;
