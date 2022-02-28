import express from "express";
import { createATask, getTask, login, register, updateATask } from "../controller/controller";


var router = express.Router()

router.post("/user",login);
router.post("/user/register",register);
router.post("/job",getTask);
router.post("/job/create",createATask);
router.post("/job/update",updateATask)

export default router;