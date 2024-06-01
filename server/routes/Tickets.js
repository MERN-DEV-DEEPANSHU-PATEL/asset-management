// routes/tickets.js
import express from "express";
import {
  addTicket,
  deleteTicket,
  getMotorId,
  getTicket,
  getTickets,
  updateTicket,
} from "../controller/MaintenanceTicket.js";
const ticketRouter = express.Router();

// Get all maintenance tickets
ticketRouter.get("/", getTickets);
// Get all motorIDs
ticketRouter.get("/motorId", getMotorId);
// Get single maintenance tickets
ticketRouter.get("/:id", getTicket, (req, res) => {
  res.json(res.ticket);
});

// Create a new maintenance ticket
ticketRouter.post("/", addTicket);

// Update a maintenance ticket
ticketRouter.patch("/:id", getTicket, updateTicket);

// Delete a maintenance ticket
ticketRouter.delete("/:id", deleteTicket);

// Middleware to get a specific maintenance ticket

export default ticketRouter;
