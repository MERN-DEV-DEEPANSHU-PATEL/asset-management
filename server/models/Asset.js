// models/Asset.js
import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  motorId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  manufacturer: { type: String },
  modelNumber: { type: String },
  serialNumber: { type: String },
  installationDate: { type: Date },
  lastMaintenanceDate: { type: Date },
  status: { type: String, default: "Operational" },
  specifications: {
    power: { type: Number },
    voltage: { type: Number },
    current: { type: Number },
    speed: { type: Number },
  },
  specificationsValues: {
    power: { type: Boolean },
    voltage: { type: Boolean },
    current: { type: Boolean },
    speed: { type: Boolean },
  },
});

const Asset = mongoose.model("Assets", assetSchema);
export default Asset;
