import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { map, Observable, tap } from 'rxjs';
import {
  GetAllPaymentsQueryGQL,
  GetAllPaymentsQueryQuery,
  GetAllTransactionsQueryGQL,
  GetAllTransactionsQueryQuery,
  PaymentSubscriptionGQL,
  PaymentSubscriptionSubscription,
  TransactionSubscriptionGQL,
  TransactionSubscriptionSubscription,
  CreateNewPaymentMutationGQL,
  CreateTransactionGQL,
  GetPaymentIdByAmountAndDescriptionGQL,
  GetPaymentIdByAmountAndDescriptionQuery,
  CreateNewPaymentMutationMutation,
  CreateTransactionMutation,
  UpdatePaymentMutationGQL
} from './_generated';
import {MutationResult} from "apollo-angular";

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(
    private getAllPayments: GetAllPaymentsQueryGQL,
    private getPaymentIdByAmountAndDesc: GetPaymentIdByAmountAndDescriptionGQL,
    private getAllTransactions: GetAllTransactionsQueryGQL,
    private createPayment: CreateNewPaymentMutationGQL,
    private createTransaction: CreateTransactionGQL,
    private paymentsSubscription: PaymentSubscriptionGQL,
    private transactionSubscription: TransactionSubscriptionGQL,
    private updatePayment: UpdatePaymentMutationGQL
  ) {}

  public GetAllPayments(): Observable<
    ApolloQueryResult<GetAllPaymentsQueryQuery>
    > {
    return this.getAllPayments
      .watch()
      .valueChanges.pipe(tap((result) => console.log(result)));
  }

  public GetPaymentId(amount: number, desc: string): Observable<ApolloQueryResult<GetPaymentIdByAmountAndDescriptionQuery>> {
    return this.getPaymentIdByAmountAndDesc
      .watch({amount: amount, desc: desc})
      .valueChanges.pipe(
        tap((result) => console.log(result))
        //map((m) => m.data.payment)
      );
  }

  public GetAllTransactions(): Observable<
    ApolloQueryResult<GetAllTransactionsQueryQuery>
    > {
    return this.getAllTransactions
      .watch()
      .valueChanges.pipe(tap((result) => console.log(result)));
  }

  public CreateTransaction(payment_id: number, from: string, to: string): Observable<MutationResult<CreateTransactionMutation>> {
    return this.createTransaction
      .mutate({
        payment_id: payment_id,
        from: from,
        to: to
      });
  }

  public UpdatePayment(id: number): void {
    this.updatePayment
      .mutate({
        id: id
      })
      .pipe(tap((result) => console.log(result)))
      .subscribe();
  }

  public CreatePayment(amount: number, description: string, from: string, to: string): Observable<MutationResult<CreateNewPaymentMutationMutation>> {
    return this.createPayment
      .mutate({
        amount: amount,
        description: description,
        paymentFrom: from,
        paymentTo: to
      });
  }

  public SubscribePayments(): Observable<PaymentSubscriptionSubscription | null | undefined> {
    return this.paymentsSubscription
      .subscribe()
      .pipe(
        tap((result) => console.log(result)),
        map((result) => result.data)
      );
  }

  public SubscribeTransaction(): Observable<TransactionSubscriptionSubscription | null | undefined> {
    return this.transactionSubscription
      .subscribe()
      .pipe(
        tap((result) => console.log(result)),
        map((result) => result.data)
      );
  }
}
