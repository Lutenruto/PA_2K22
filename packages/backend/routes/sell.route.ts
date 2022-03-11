import express from 'express';
import {DatabaseUtils} from "../database";
import {SellController} from "../controllers";

const router = express.Router();

router.get("/", async function(req, res)  {
    const connection = await DatabaseUtils.getConnection();
    const sellController = new SellController(connection);
    const sellsList = await sellController.getAll();
    res.json(sellsList);
});

router.get("/:user", async function(req, res) {
    const user = req.params.id;
    const connection = await DatabaseUtils.getConnection();
    const sellController = new SellController(connection);
    const sells = await sellController.getUserSells(user);
    res.json(sells);
});

router.post("/", async function(req, res) {
    const id = req.body.id;
    const seller = req.body.seller;
    const date = new Date(req.body.date);
    const item = req.body.item;
    const price = req.body.price;

    if (
      id === undefined ||
      seller === undefined ||
      date === undefined ||
      item === undefined ||
      price === undefined
    ) {
      res.status(400).end();
      return;
    }

    const connection = await DatabaseUtils.getConnection();
    const sellController = new SellController(connection);
    const sell = await sellController.create({
        id,
        seller,
        date,
        item,
        price
    });
    if(sell === null) {
        res.status(500).end();
    } else {
        res.status(201);
        res.json(sell);
    }
});

router.delete("/", async function(req, res) {
    const id = req.body.id;

    if(id === undefined) {
        res.status(400).end();
        return;
    }

    const connection = await DatabaseUtils.getConnection();
    const sellController = new SellController(connection);
    const sell = await sellController.deleteOne(id);
    if(!sell) {
        res.status(500).end();
    } else {
        res.status(204);
        res.json(sell);
    }
});

export default router;
