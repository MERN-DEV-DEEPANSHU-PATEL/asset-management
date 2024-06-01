// models/MaintenanceTicket.js
import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  assetId: { type: String, required: true },
  issueDescription: { type: String, required: true },
  dateRaised: { type: Date, default: Date.now },
  status: { type: String, default: "Open" },
});

const MaintenanceTicket = mongoose.model("MaintenanceTicket", ticketSchema);
export default MaintenanceTicket;
