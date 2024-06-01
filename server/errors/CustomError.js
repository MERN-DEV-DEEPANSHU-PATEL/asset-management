import { StatusCodes } from "http-status-codes";

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
class InternalServerError extends CustomAPIError {
  constructor(message, code = null) {
    super(message);
    this.name = "InternalServerError";
    this.code = code;
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

export { BadRequestError, NotFoundError, InternalServerError };
