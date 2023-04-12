import jwt, { JsonWebTokenError, JwtPayload, Secret } from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";

export function JwtVerfiy(req: Request, res: Response, next: NextFunction) {
  let token: Secret = req.header("x-auth-token")!;
  try {
    const decoded = jwt.verify(token, process.env.JWT_PASS!) as JwtPayload;
    req.user = decoded.id;
    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      let { message }: JsonWebTokenError = error;
      res.status(400).send(message);
    }
  }
}
