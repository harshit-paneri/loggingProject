import { createLogger, format, transports } from "winston";
import path from "path";

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.printf(({ level, message, timestamp }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new transports.Console(), // Log to console
        new transports.File({ filename: path.join("src", "app.log") }) // Log to file
    ]
});

export default logger;
