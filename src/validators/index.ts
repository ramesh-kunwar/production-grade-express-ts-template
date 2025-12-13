import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod/v3";

/**
 *
 * @param schema  - zod schema to validate the request body
 * @returns  - middleware function to validate the request body
 */

export const validateRequestBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("This body is valid");
      next();
    } catch (error) {
      // if validation fails
      res.status(400).json({
        success: false,
        message: "Invalid request body",
      });
    }
  };
};

export const validateQueryParams = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.query);
      console.log("This query is valid");
      next();
    } catch (error) {
      // if validation fails
      res.status(400).json({
        success: false,
        message: "invalid query params",
      });
    }
  };
};
