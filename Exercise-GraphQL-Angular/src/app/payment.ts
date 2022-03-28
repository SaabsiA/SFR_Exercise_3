export class Payment {

  constructor(amount: number, description: string, isCompleted: string) {
    this.amount = amount;
    this.description = description;
    this.isCompleted = isCompleted;
  }

  amount: number;
  description: string;
  isCompleted: string;
}
