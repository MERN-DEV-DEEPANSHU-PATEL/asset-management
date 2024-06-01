import { body, param, query } from "express-validator";

export const validateAsset = [
  body("motorId")
    .notEmpty()
    .withMessage("MotorID can not be empty")
    .isString()
    .withMessage("Motor ID must be a string"),
  body("name").isString().withMessage("Name must be a string"),
  body("description")
    .notEmpty()
    .withMessage("Description can not be empty")
    .isString()
    .withMessage("Description must be a string"),
  body("location")
    .notEmpty()
    .withMessage("location can not be empty")
    .isString()
    .withMessage("Location must be a string"),
  body("manufacturer")
    .notEmpty()
    .withMessage("manufacturer can not be empty")
    .isString()
    .withMessage("Manufacturer must be a string"),
  body("modelNumber")
    .notEmpty()
    .withMessage("model Number can not be empty")

    .isString()
    .withMessage("Model Number must be a string"),
  body("serialNumber")
    .notEmpty()
    .withMessage("serial Number can not be empty")

    .isString()
    .withMessage("Serial Number must be a string"),
  body("installationDate")
    .notEmpty()
    .withMessage("installationDate can not be empty")
    .isISO8601()
    .toDate()
    .withMessage("Installation Date must be a valid date"),
  body("lastMaintenanceDate")
    .notEmpty()
    .withMessage("lastMaintenanceDate can not be empty")

    .isISO8601()
    .toDate()
    .withMessage("Last Maintenance Date must be a valid date"),
  body("status")
    .notEmpty()
    .withMessage("Provide a valid status")

    .isString()
    .withMessage("Status must be a string"),
  body("specifications.power")
    .notEmpty()
    .withMessage("Provide a valid specification")
    .isNumeric()
    .withMessage("Power must be a number"),
  body("specifications.voltage")
    .notEmpty()
    .withMessage("Provide a valid specification")
    .isNumeric()
    .withMessage("Voltage must be a number"),
  body("specifications.current")
    .notEmpty()
    .withMessage("Provide a valid specification")
    .isNumeric()
    .withMessage("Current must be a number"),
  body("specifications.speed")
    .notEmpty()
    .withMessage("Provide a valid specification")
    .isNumeric()
    .withMessage("Speed must be a number"),
  body("specificationsValues.power")
    .notEmpty()
    .withMessage("Provide a valid specification value")
    .isBoolean()
    .withMessage("Power must be a boolean"),
  body("specificationsValues.voltage")
    .notEmpty()
    .withMessage("Provide a valid specification value")
    .isBoolean()
    .withMessage("Voltage must be a boolean"),
  body("specificationsValues.current")
    .notEmpty()
    .withMessage("Provide a valid specification value")
    .isBoolean()
    .withMessage("Current must be a boolean"),
  body("specificationsValues.speed")
    .notEmpty()
    .withMessage("Provide a valid specification value")
    .isBoolean()
    .withMessage("Speed must be a boolean"),
];

export const validateAssetId = [
  param("id").isMongoId().withMessage("Invalid Asset ID"),
];
