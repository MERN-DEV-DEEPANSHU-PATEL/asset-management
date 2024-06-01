// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
import notFoundMiddleWare from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import assetRouter from "./routes/Assets.js";
import ticketRouter from "./routes/Tickets.js";
import dotenv from "dotenv";
import { getDashboardData } from "./controller/MaintenanceTicket.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/assets", assetRouter);
app.use("/api/tickets", ticketRouter);
app.get("/api/dashboard", getDashboardData);
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

// Start the server
// Connect to MongoDB
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
