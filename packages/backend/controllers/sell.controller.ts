import { MongoClient, Db, Collection } from 'mongodb';
import { Sell, ISellProps } from '../models/sell.model';

export class SellController {
  private database: Collection<Document>;

  constructor(connection: MongoClient) {
    this.database = connection.db("projet_annuel").collection("sell");
  }

  async getAll(): Promise<Sell[]> {
    let sells: any = await this.database.find().toArray();
    let returnSells: Sell[] = [];
    for (let i = 0; i < sells.length; i++) {
      returnSells.push({
        id: sells[i].id,
        seller: sells[i].seller,
        date: sells[i].date,
        price: sells[i].price,
        item: sells[i].item,
      });
    }
    return returnSells;
  }

  async getUserSells(user: string): Promise<Sell[]> {
    const filter = {
      seller: user,
    };
    let sells: any = await this.database.find(filter).toArray();
    let returnSells: Sell[] = [];
    for (let i = 0; i < sells.length; i++) {
      returnSells.push({
        id: sells[i].id,
        seller: sells[i].seller,
        date: sells[i].date,
        price: sells[i].price,
        item: sells[i].item,
      });
    }
    return returnSells;
  }

  async create(sell: ISellProps): Promise<Sell | null> {
    let returnSell = await this.database.insertOne(sell as unknown as Document);
    return new Sell(sell);
  }

  async deleteOne(idNbr: number): Promise<Boolean> {
    const filter = { id: parseInt(idNbr.toString()) };
    let bid = await this.database.deleteOne(filter);
    return bid.deletedCount > 0;
  }
  
}