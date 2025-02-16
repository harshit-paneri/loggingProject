import express from "express";
import logger from "../logger.js"; // Import logger

const router = express.Router();

router.get("/", (req, res) => {
    logger.info("Accessed the /logs route"); // Log this action
    res.send("Logging route accessed!");
});

export default router;
