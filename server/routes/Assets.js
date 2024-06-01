import express from "express";
import {
  addAsset,
  deleteAsset,
  getAsset,
  getSingleAsset,
  updateAsset,
} from "../controller/Assets.js";
import { validateAsset, validateAssetId } from "../validation/Assets.js";
import { validate } from "../middleware/validate.js"; // This middleware handles validation results

const assetRouter = express.Router();

// Get all assets
assetRouter.get("/", getAsset);

// Get a specific asset
assetRouter.get("/:id", validateAssetId, validate, getSingleAsset);

// Create a new asset
assetRouter.post("/", validateAsset, validate, addAsset);

// Update an asset
assetRouter.patch(
  "/:id",
  validateAssetId,
  validateAsset,
  validate,
  updateAsset
);

// Delete an asset
assetRouter.delete("/:id", validateAssetId, validate, deleteAsset);

export default assetRouter;
