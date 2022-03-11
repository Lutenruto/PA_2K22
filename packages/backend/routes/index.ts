import {Express} from "express";
import sellRouter from './sell.route';

export function buildRoutes(app: Express) {
    app.use("/sell", sellRouter);
}