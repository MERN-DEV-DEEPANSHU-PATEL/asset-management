import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from "../errors/CustomError.js";
import Asset from "../models/Asset.js";

export const getAsset = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};

// Middleware to get a specific asset
export const getSingleAsset = async (req, res, next) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (asset == null) {
      throw new NotFoundError("Asset not found");
    }
    res.json(asset);
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};

export const addAsset = async (req, res) => {
  console.log(req.body);
  const motor = await Asset.findOne({ motorId: req.body.motorId });
  if (motor)
    throw new BadRequestError("Motor is already exists check Motor Id");
  const asset = new Asset(req.body);
  try {
    const newAsset = await asset.save();
    res.status(201).json(newAsset);
  } catch (err) {
    throw new InternalServerError(err);
  }
};

export const updateAsset = async (req, res) => {
  try {
    const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedAsset);
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};

export const deleteAsset = async (req, res) => {
  try {
    const updatedAsset = await Asset.findByIdAndDelete(req.params.id);
    res.json({ message: "Asset deleted successfully" });
  } catch (err) {
    throw new InternalServerError(err.message);
  }
};
