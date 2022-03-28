import {Component} from '@angular/core';
import {GraphqlService} from "./@graphql/graphql.service";
import {Payment} from "./payment";
import {Transaction} from "./transaction";
import {CreatePayment} from "./createPayment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise-GraphQL-Angular';

  payments: Payment[] = [];
  transactions: Transaction[] = [];
  paymentToCreate: CreatePayment = new CreatePayment(0, "", "", "");
  payment_id: number = -1;

  constructor(private graphQlService: GraphqlService) {
    this.graphQlService
      .SubscribePayments()
      .subscribe(
        (result) => {
          if (result != null) {
            this.payments = result.payment.map((m) => new Payment(m.amount, m.description != null ? m.description : "", m.completed ? "Yes" : "No"))
          }
        }
      );

    this.graphQlService
      .SubscribeTransaction()
      .subscribe(
        (result) => {
          if (result != null) {
            this.transactions = result.transaction.map((m) => new Transaction(m.payment.amount, m.payment.description != null ? m.payment.description : "", m.transactionFrom, m.transactionTo))
          }
        }
      );
  }

  createNewPayment(): void {
    console.log(this.paymentToCreate);
    this.graphQlService.CreatePayment(this.paymentToCreate.amount, this.paymentToCreate.description, this.paymentToCreate.from, this.paymentToCreate.to)
      .subscribe(res => {
        console.log(res);
        let data = res.data?.insert_payment?.returning;
        if (data != undefined && data.length == 1) {
          this.graphQlService.CreateTransaction(data[0].id, this.paymentToCreate.from, this.paymentToCreate.to)
            .subscribe(res => {
              console.log(res);
              if (data) {
                this.graphQlService.UpdatePayment(data[0].id);
              }
          });
        }
        else {
          console.log("Something went wrong, please try again");
        }
      });
  }

}
