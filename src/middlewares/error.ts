import { NextFunction, Request, RequestHandler, Response } from "express";
import ErrorHandler from "../utils/utility-class.js";
import { ErrorRequestHandler } from "express";
import { ControllerType } from "../types/types.js";

export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = (err as any).statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

// export const errorMiddleware = (
//   err: ErrorHandler,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   err.message ||= "Internal Server Error";
//   err.statusCode ||= 500;

//   if (err.name === "CastError") err.message = "Invalid ID";

//   return res.status(err.statusCode).json({
//     success: false,
//     message: err.message,
//   });
// };

// export const TryCatch = (func:ControllerType)=>(req: Request, res: Response, next: NextFunction)=>{
//   return Promise.resolve(func(req, res, next)).catch(next);
// };

// Wrap the controller function
export const TryCatch = (func: ControllerType): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next); // Forward errors to Express's error handler
  };
};
