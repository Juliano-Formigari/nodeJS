import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

export const autenticacaoMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        next(createHttpError(401, "Não autorizado!"))
        return
    }

    try {
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "");

        res.locals.id = payload.sub;
    } catch (error) {
        next(createHttpError(401, "Não autorizado!"))
        return
    }
    next();
}