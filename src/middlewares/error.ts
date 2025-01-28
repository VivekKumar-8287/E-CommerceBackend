import { NextFunction, Request, RequestHandler, Response } from "express";
import ErrorHandler from "../utils/utility-class.js";
import { ControllerType } from "../types/types.js";

export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;

  return res.status(400).json({
    success: true,
    message: err.message,
  });
};


// export const TryCatch = (func:ControllerType)=>(req: Request, res: Response, next: NextFunction)=>{
//   return Promise.resolve(func(req, res, next)).catch(next);
// };


// Wrap the controller function
export const TryCatch = (func: ControllerType): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next); // Forward errors to Express's error handler
  };
};