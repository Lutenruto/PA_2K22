
export interface ISellProps {
  id: number;
  seller: string;
  date: Date;
  price: number;
  item: any;
}

export class Sell implements ISellProps {
  id: number;
  seller: string;
  date: Date;
  price: number;
  item: any;

  constructor(props: ISellProps) {
    this.id = props.id;
    this.seller = props.seller;
    this.item = props.item;
    this.price = props.price;
    this.date = props.date;
  }
}