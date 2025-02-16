import express from "express";
import logRouter from "./routers/logRouter.js";
import logger from "./logger.js";

const app =express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url} - ${req.ip}`);
    next();
});

app.use("/api/logs",logRouter);

app.get("/about", (req, res) => {
    res.send("Hello, Node.js Server is Running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
