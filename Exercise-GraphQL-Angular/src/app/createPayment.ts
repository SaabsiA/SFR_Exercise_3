export class CreatePayment {

  constructor(amount: number, description: string, from: string, to: string) {
    this.amount = amount;
    this.description = description;
    this.from = from;
    this.to = to;
  }

  amount: number;
  description: string;
  from: string;
  to: string
}
