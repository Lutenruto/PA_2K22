import express from 'express';

import { WalletController } from "../controllers";

const router = express.Router();

router.get("/get-wallet", async function(req, res)  {
    var controller = new WalletController();
    const wallet = await controller.getWallet();
    console.log(wallet)
    res.json({wallet : wallet});
});


export default router;