import { Express } from "express";

import sellRouter from './sell.route';
import walletRouter from './wallet.route';

export function buildRoutes(app: Express) {
    app.use("/sell", sellRouter);
    app.use("/wallet", walletRouter);
}

