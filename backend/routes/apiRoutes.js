import { getMessages, saveMessage } from "../controllers/apiController.js";
import { Router } from "express";

const router = Router();

router.get("/get", getMessages);
router.post("/save", saveMessage);

export default router;
