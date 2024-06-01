import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from "../errors/CustomError.js";
import Asset from "../models/Asset.js";
import MaintenanceTicket from "../models/MaintenanceTicket.js";

export const getMotorId = async (req, res) => {
  try {
    const assets = await Asset.find().select("motorId");
    res.json(assets);
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await MaintenanceTicket.find();
    res.json(tickets);
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};

export const getTicket = async (req, res, next) => {
  try {
    const ticket = await MaintenanceTicket.findById(req.params.id);
    res.ticket = ticket;
    if (ticket == null) {
      throw new NotFoundError("Maintenance ticket not found");
    }
  } catch (err) {
    throw new InternalServerError(err.message);
  }
  next();
};

export const addTicket = async (req, res) => {
  if (!req.body.assetId || !req.body.issueDescription) {
    throw new BadRequestError("Please provide all fields");
  }
  const ticket = new MaintenanceTicket({
    assetId: req.body.assetId,
    issueDescription: req.body.issueDescription,
  });

  try {
    const newTicket = await ticket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};

export const updateTicket = async (req, res) => {
  if (req.body.issueDescription) {
    res.ticket.issueDescription = req.body.issueDescription;
  }
  if (req.body.status) {
    res.ticket.status = req.body.status;
  }
  try {
    const updatedTicket = await res.ticket.save();
    res.json(updatedTicket);
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    await MaintenanceTicket.findByIdAndDelete(req.params.id);
    res.json({ message: "Maintenance ticket deleted successfully" });
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};

export const getDashboardData = async (req, res) => {
  try {
    // Total Motors
    const totalMotorsCount = await Asset.countDocuments();
    const recentData = await Asset.find()
      .limit(10)
      .sort({ installationDate: -1 });
    // Active Motors
    const activeMotorsCount = await Asset.countDocuments({ status: "active" });

    // Maintenance Tickets
    const maintenanceTicketsCount = await MaintenanceTicket.countDocuments();

    // Overdue Maintenance
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const overdueMaintenanceCount = await MaintenanceTicket.countDocuments({
      status: "Open",
      dateRaised: { $lt: oneMonthAgo },
    });

    res.json({
      totalMotors: totalMotorsCount,
      activeMotors: activeMotorsCount,
      maintenanceTickets: maintenanceTicketsCount,
      overdueMaintenance: overdueMaintenanceCount,
      recentData,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
