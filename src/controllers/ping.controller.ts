import { Request, Response } from "express";
export const pingHandler = (req: Request, res: Response) => {
  res.json({
    msg: "Pong",
  });
};
