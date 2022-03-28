import {Payment} from "./payment";

export class Transaction {

  constructor(amount: number, description: string, paymentFrom: string, paymentTo: string) {
    this.payment = new Payment(amount, description, "No");
    this.paymentFrom = paymentFrom;
    this.paymentTo = paymentTo;
  }

  payment: Payment;
  paymentFrom: string;
  paymentTo: string;
}
