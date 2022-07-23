import express from 'express';

import { WalletController } from "../controllers";

const router = express.Router();

router.get("/get-wallet", async function(req, res)  {
    var controller = new WalletController();
    const wallet = await controller.getWallet();
    console.log(wallet)
    res.json({wallet : wallet});
});

router.get("/get-wallet-balance", async function (req, res) {
  var controller = new WalletController();
  const balance = await controller.getWalletBalance();
  res.json({ balance: balance + " SOL" });
});


export default router;