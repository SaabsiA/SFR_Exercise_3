import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['Boolean']>;
  readonly _gt: InputMaybe<Scalars['Boolean']>;
  readonly _gte: InputMaybe<Scalars['Boolean']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  readonly _lt: InputMaybe<Scalars['Boolean']>;
  readonly _lte: InputMaybe<Scalars['Boolean']>;
  readonly _neq: InputMaybe<Scalars['Boolean']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['Int']>;
  readonly _gt: InputMaybe<Scalars['Int']>;
  readonly _gte: InputMaybe<Scalars['Int']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  readonly _lt: InputMaybe<Scalars['Int']>;
  readonly _lte: InputMaybe<Scalars['Int']>;
  readonly _neq: InputMaybe<Scalars['Int']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['String']>;
  readonly _gt: InputMaybe<Scalars['String']>;
  readonly _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike: InputMaybe<Scalars['String']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex: InputMaybe<Scalars['String']>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like: InputMaybe<Scalars['String']>;
  readonly _lt: InputMaybe<Scalars['String']>;
  readonly _lte: InputMaybe<Scalars['String']>;
  readonly _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike: InputMaybe<Scalars['String']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "payment" */
  readonly delete_payment: Maybe<Payment_Mutation_Response>;
  /** delete single row from the table: "payment" */
  readonly delete_payment_by_pk: Maybe<Payment>;
  /** delete data from the table: "transaction" */
  readonly delete_transaction: Maybe<Transaction_Mutation_Response>;
  /** delete single row from the table: "transaction" */
  readonly delete_transaction_by_pk: Maybe<Transaction>;
  /** insert data into the table: "payment" */
  readonly insert_payment: Maybe<Payment_Mutation_Response>;
  /** insert a single row into the table: "payment" */
  readonly insert_payment_one: Maybe<Payment>;
  /** insert data into the table: "transaction" */
  readonly insert_transaction: Maybe<Transaction_Mutation_Response>;
  /** insert a single row into the table: "transaction" */
  readonly insert_transaction_one: Maybe<Transaction>;
  /** update data of the table: "payment" */
  readonly update_payment: Maybe<Payment_Mutation_Response>;
  /** update single row of the table: "payment" */
  readonly update_payment_by_pk: Maybe<Payment>;
  /** update data of the table: "transaction" */
  readonly update_transaction: Maybe<Transaction_Mutation_Response>;
  /** update single row of the table: "transaction" */
  readonly update_transaction_by_pk: Maybe<Transaction>;
};


/** mutation root */
export type Mutation_RootDelete_PaymentArgs = {
  where: Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_PaymentArgs = {
  objects: ReadonlyArray<Payment_Insert_Input>;
  on_conflict: InputMaybe<Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_OneArgs = {
  object: Payment_Insert_Input;
  on_conflict: InputMaybe<Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: ReadonlyArray<Transaction_Insert_Input>;
  on_conflict: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentArgs = {
  _inc: InputMaybe<Payment_Inc_Input>;
  _set: InputMaybe<Payment_Set_Input>;
  where: Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_By_PkArgs = {
  _inc: InputMaybe<Payment_Inc_Input>;
  _set: InputMaybe<Payment_Set_Input>;
  pk_columns: Payment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc: InputMaybe<Transaction_Inc_Input>;
  _set: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc: InputMaybe<Transaction_Inc_Input>;
  _set: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "payment" */
export type Payment = {
  readonly amount: Scalars['Int'];
  readonly completed: Scalars['Boolean'];
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly paymentFrom: Scalars['String'];
  readonly paymentTo: Scalars['String'];
  /** An array relationship */
  readonly transactions: ReadonlyArray<Transaction>;
  /** An aggregate relationship */
  readonly transactions_aggregate: Transaction_Aggregate;
};


/** columns and relationships of "payment" */
export type PaymentTransactionsArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "payment" */
export type PaymentTransactions_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "payment" */
export type Payment_Aggregate = {
  readonly aggregate: Maybe<Payment_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Payment>;
};

/** aggregate fields of "payment" */
export type Payment_Aggregate_Fields = {
  readonly avg: Maybe<Payment_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max: Maybe<Payment_Max_Fields>;
  readonly min: Maybe<Payment_Min_Fields>;
  readonly stddev: Maybe<Payment_Stddev_Fields>;
  readonly stddev_pop: Maybe<Payment_Stddev_Pop_Fields>;
  readonly stddev_samp: Maybe<Payment_Stddev_Samp_Fields>;
  readonly sum: Maybe<Payment_Sum_Fields>;
  readonly var_pop: Maybe<Payment_Var_Pop_Fields>;
  readonly var_samp: Maybe<Payment_Var_Samp_Fields>;
  readonly variance: Maybe<Payment_Variance_Fields>;
};


/** aggregate fields of "payment" */
export type Payment_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<ReadonlyArray<Payment_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Payment_Avg_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "payment". All fields are combined with a logical 'AND'. */
export type Payment_Bool_Exp = {
  readonly _and: InputMaybe<ReadonlyArray<Payment_Bool_Exp>>;
  readonly _not: InputMaybe<Payment_Bool_Exp>;
  readonly _or: InputMaybe<ReadonlyArray<Payment_Bool_Exp>>;
  readonly amount: InputMaybe<Int_Comparison_Exp>;
  readonly completed: InputMaybe<Boolean_Comparison_Exp>;
  readonly description: InputMaybe<String_Comparison_Exp>;
  readonly id: InputMaybe<Int_Comparison_Exp>;
  readonly paymentFrom: InputMaybe<String_Comparison_Exp>;
  readonly paymentTo: InputMaybe<String_Comparison_Exp>;
  readonly transactions: InputMaybe<Transaction_Bool_Exp>;
};

/** unique or primary key constraints on table "payment" */
export enum Payment_Constraint {
  /** unique or primary key constraint */
  PaymentAmountDescriptionPaymentFromPaymentToKey = 'payment_amount_description_paymentFrom_paymentTo_key',
  /** unique or primary key constraint */
  PaymentPkey = 'payment_pkey'
}

/** input type for incrementing numeric columns in table "payment" */
export type Payment_Inc_Input = {
  readonly amount: InputMaybe<Scalars['Int']>;
  readonly id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "payment" */
export type Payment_Insert_Input = {
  readonly amount: InputMaybe<Scalars['Int']>;
  readonly completed: InputMaybe<Scalars['Boolean']>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['Int']>;
  readonly paymentFrom: InputMaybe<Scalars['String']>;
  readonly paymentTo: InputMaybe<Scalars['String']>;
  readonly transactions: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Payment_Max_Fields = {
  readonly amount: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly paymentFrom: Maybe<Scalars['String']>;
  readonly paymentTo: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Payment_Min_Fields = {
  readonly amount: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly paymentFrom: Maybe<Scalars['String']>;
  readonly paymentTo: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "payment" */
export type Payment_Mutation_Response = {
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Payment>;
};

/** input type for inserting object relation for remote table "payment" */
export type Payment_Obj_Rel_Insert_Input = {
  readonly data: Payment_Insert_Input;
  /** upsert condition */
  readonly on_conflict: InputMaybe<Payment_On_Conflict>;
};

/** on_conflict condition type for table "payment" */
export type Payment_On_Conflict = {
  readonly constraint: Payment_Constraint;
  readonly update_columns: ReadonlyArray<Payment_Update_Column>;
  readonly where: InputMaybe<Payment_Bool_Exp>;
};

/** Ordering options when selecting data from "payment". */
export type Payment_Order_By = {
  readonly amount: InputMaybe<Order_By>;
  readonly completed: InputMaybe<Order_By>;
  readonly description: InputMaybe<Order_By>;
  readonly id: InputMaybe<Order_By>;
  readonly paymentFrom: InputMaybe<Order_By>;
  readonly paymentTo: InputMaybe<Order_By>;
  readonly transactions_aggregate: InputMaybe<Transaction_Aggregate_Order_By>;
};

/** primary key columns input for table: payment */
export type Payment_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "payment" */
export enum Payment_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Completed = 'completed',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentFrom = 'paymentFrom',
  /** column name */
  PaymentTo = 'paymentTo'
}

/** input type for updating data in table "payment" */
export type Payment_Set_Input = {
  readonly amount: InputMaybe<Scalars['Int']>;
  readonly completed: InputMaybe<Scalars['Boolean']>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['Int']>;
  readonly paymentFrom: InputMaybe<Scalars['String']>;
  readonly paymentTo: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Payment_Stddev_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Payment_Stddev_Pop_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Payment_Stddev_Samp_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Payment_Sum_Fields = {
  readonly amount: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
};

/** update columns of table "payment" */
export enum Payment_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Completed = 'completed',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentFrom = 'paymentFrom',
  /** column name */
  PaymentTo = 'paymentTo'
}

/** aggregate var_pop on columns */
export type Payment_Var_Pop_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Payment_Var_Samp_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Payment_Variance_Fields = {
  readonly amount: Maybe<Scalars['Float']>;
  readonly id: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  /** fetch data from the table: "payment" */
  readonly payment: ReadonlyArray<Payment>;
  /** fetch aggregated fields from the table: "payment" */
  readonly payment_aggregate: Payment_Aggregate;
  /** fetch data from the table: "payment" using primary key columns */
  readonly payment_by_pk: Maybe<Payment>;
  /** fetch data from the table: "transaction" */
  readonly transaction: ReadonlyArray<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  readonly transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  readonly transaction_by_pk: Maybe<Transaction>;
};


export type Query_RootPaymentArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Payment_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Payment_Order_By>>;
  where: InputMaybe<Payment_Bool_Exp>;
};


export type Query_RootPayment_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Payment_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Payment_Order_By>>;
  where: InputMaybe<Payment_Bool_Exp>;
};


export type Query_RootPayment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTransactionArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  /** fetch data from the table: "payment" */
  readonly payment: ReadonlyArray<Payment>;
  /** fetch aggregated fields from the table: "payment" */
  readonly payment_aggregate: Payment_Aggregate;
  /** fetch data from the table: "payment" using primary key columns */
  readonly payment_by_pk: Maybe<Payment>;
  /** fetch data from the table: "transaction" */
  readonly transaction: ReadonlyArray<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  readonly transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  readonly transaction_by_pk: Maybe<Transaction>;
};


export type Subscription_RootPaymentArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Payment_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Payment_Order_By>>;
  where: InputMaybe<Payment_Bool_Exp>;
};


export type Subscription_RootPayment_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Payment_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Payment_Order_By>>;
  where: InputMaybe<Payment_Bool_Exp>;
};


export type Subscription_RootPayment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTransactionArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "transaction" */
export type Transaction = {
  readonly id: Scalars['Int'];
  /** An object relationship */
  readonly payment: Payment;
  readonly payment_id: Scalars['Int'];
  readonly transactionFrom: Scalars['String'];
  readonly transactionTo: Scalars['String'];
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  readonly aggregate: Maybe<Transaction_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  readonly avg: Maybe<Transaction_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max: Maybe<Transaction_Max_Fields>;
  readonly min: Maybe<Transaction_Min_Fields>;
  readonly stddev: Maybe<Transaction_Stddev_Fields>;
  readonly stddev_pop: Maybe<Transaction_Stddev_Pop_Fields>;
  readonly stddev_samp: Maybe<Transaction_Stddev_Samp_Fields>;
  readonly sum: Maybe<Transaction_Sum_Fields>;
  readonly var_pop: Maybe<Transaction_Var_Pop_Fields>;
  readonly var_samp: Maybe<Transaction_Var_Samp_Fields>;
  readonly variance: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  readonly avg: InputMaybe<Transaction_Avg_Order_By>;
  readonly count: InputMaybe<Order_By>;
  readonly max: InputMaybe<Transaction_Max_Order_By>;
  readonly min: InputMaybe<Transaction_Min_Order_By>;
  readonly stddev: InputMaybe<Transaction_Stddev_Order_By>;
  readonly stddev_pop: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  readonly stddev_samp: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  readonly sum: InputMaybe<Transaction_Sum_Order_By>;
  readonly var_pop: InputMaybe<Transaction_Var_Pop_Order_By>;
  readonly var_samp: InputMaybe<Transaction_Var_Samp_Order_By>;
  readonly variance: InputMaybe<Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Transaction_Insert_Input>;
  /** upsert condition */
  readonly on_conflict: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  readonly id: Maybe<Scalars['Float']>;
  readonly payment_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  readonly _and: InputMaybe<ReadonlyArray<Transaction_Bool_Exp>>;
  readonly _not: InputMaybe<Transaction_Bool_Exp>;
  readonly _or: InputMaybe<ReadonlyArray<Transaction_Bool_Exp>>;
  readonly id: InputMaybe<Int_Comparison_Exp>;
  readonly payment: InputMaybe<Payment_Bool_Exp>;
  readonly payment_id: InputMaybe<Int_Comparison_Exp>;
  readonly transactionFrom: InputMaybe<String_Comparison_Exp>;
  readonly transactionTo: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint */
  TransactionPkey = 'transaction_pkey'
}

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  readonly id: InputMaybe<Scalars['Int']>;
  readonly payment_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  readonly id: InputMaybe<Scalars['Int']>;
  readonly payment: InputMaybe<Payment_Obj_Rel_Insert_Input>;
  readonly payment_id: InputMaybe<Scalars['Int']>;
  readonly transactionFrom: InputMaybe<Scalars['String']>;
  readonly transactionTo: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  readonly id: Maybe<Scalars['Int']>;
  readonly payment_id: Maybe<Scalars['Int']>;
  readonly transactionFrom: Maybe<Scalars['String']>;
  readonly transactionTo: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
  readonly transactionFrom: InputMaybe<Order_By>;
  readonly transactionTo: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  readonly id: Maybe<Scalars['Int']>;
  readonly payment_id: Maybe<Scalars['Int']>;
  readonly transactionFrom: Maybe<Scalars['String']>;
  readonly transactionTo: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
  readonly transactionFrom: InputMaybe<Order_By>;
  readonly transactionTo: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Transaction>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  readonly constraint: Transaction_Constraint;
  readonly update_columns: ReadonlyArray<Transaction_Update_Column>;
  readonly where: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment: InputMaybe<Payment_Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
  readonly transactionFrom: InputMaybe<Order_By>;
  readonly transactionTo: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction */
export type Transaction_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  TransactionFrom = 'transactionFrom',
  /** column name */
  TransactionTo = 'transactionTo'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  readonly id: InputMaybe<Scalars['Int']>;
  readonly payment_id: InputMaybe<Scalars['Int']>;
  readonly transactionFrom: InputMaybe<Scalars['String']>;
  readonly transactionTo: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  readonly id: Maybe<Scalars['Float']>;
  readonly payment_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  readonly id: Maybe<Scalars['Float']>;
  readonly payment_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  readonly id: Maybe<Scalars['Float']>;
  readonly payment_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  readonly id: Maybe<Scalars['Int']>;
  readonly payment_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  TransactionFrom = 'transactionFrom',
  /** column name */
  TransactionTo = 'transactionTo'
}

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  readonly id: Maybe<Scalars['Float']>;
  readonly payment_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  readonly id: Maybe<Scalars['Float']>;
  readonly payment_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  readonly id: Maybe<Scalars['Float']>;
  readonly payment_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly payment_id: InputMaybe<Order_By>;
};

export type GetAllTransactionsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTransactionsQueryQuery = { readonly transaction: ReadonlyArray<{ readonly id: number, readonly transactionFrom: string, readonly transactionTo: string, readonly payment: { readonly amount: number, readonly description: string | null } }> };

export type GetAllPaymentsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPaymentsQueryQuery = { readonly payment: ReadonlyArray<{ readonly amount: number, readonly completed: boolean, readonly description: string | null, readonly id: number, readonly paymentFrom: string, readonly paymentTo: string }> };

export type GetPaymentIdByAmountAndDescriptionQueryVariables = Exact<{
  amount: Scalars['Int'];
  desc: Scalars['String'];
}>;


export type GetPaymentIdByAmountAndDescriptionQuery = { readonly payment: ReadonlyArray<{ readonly id: number }> };

export type CreateNewPaymentMutationMutationVariables = Exact<{
  amount: Scalars['Int'];
  description: Scalars['String'];
  paymentFrom: Scalars['String'];
  paymentTo: Scalars['String'];
}>;


export type CreateNewPaymentMutationMutation = { readonly insert_payment: { readonly returning: ReadonlyArray<{ readonly id: number }> } | null };

export type CreateTransactionMutationVariables = Exact<{
  payment_id: Scalars['Int'];
  from: Scalars['String'];
  to: Scalars['String'];
}>;


export type CreateTransactionMutation = { readonly insert_transaction: { readonly affected_rows: number, readonly returning: ReadonlyArray<{ readonly id: number }> } | null };

export type UpdatePaymentMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UpdatePaymentMutationMutation = { readonly update_payment_by_pk: { readonly id: number, readonly completed: boolean } | null };

export type PaymentSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PaymentSubscriptionSubscription = { readonly payment: ReadonlyArray<{ readonly amount: number, readonly description: string | null, readonly completed: boolean }> };

export type TransactionSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TransactionSubscriptionSubscription = { readonly transaction: ReadonlyArray<{ readonly transactionFrom: string, readonly transactionTo: string, readonly payment: { readonly amount: number, readonly description: string | null } }> };

export const GetAllTransactionsQueryDocument = gql`
    query GetAllTransactionsQuery {
  transaction {
    id
    transactionFrom
    transactionTo
    payment {
      amount
      description
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllTransactionsQueryGQL extends Apollo.Query<GetAllTransactionsQueryQuery, GetAllTransactionsQueryQueryVariables> {
    override document = GetAllTransactionsQueryDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllPaymentsQueryDocument = gql`
    query GetAllPaymentsQuery {
  payment {
    amount
    completed
    description
    id
    paymentFrom
    paymentTo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllPaymentsQueryGQL extends Apollo.Query<GetAllPaymentsQueryQuery, GetAllPaymentsQueryQueryVariables> {
    override document = GetAllPaymentsQueryDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPaymentIdByAmountAndDescriptionDocument = gql`
    query GetPaymentIdByAmountAndDescription($amount: Int!, $desc: String!) {
  payment(where: {amount: {_eq: $amount}, _and: {description: {_eq: $desc}}}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPaymentIdByAmountAndDescriptionGQL extends Apollo.Query<GetPaymentIdByAmountAndDescriptionQuery, GetPaymentIdByAmountAndDescriptionQueryVariables> {
    override document = GetPaymentIdByAmountAndDescriptionDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateNewPaymentMutationDocument = gql`
    mutation createNewPaymentMutation($amount: Int!, $description: String!, $paymentFrom: String!, $paymentTo: String!) {
  insert_payment(
    objects: {amount: $amount, description: $description, paymentFrom: $paymentFrom, paymentTo: $paymentTo}
  ) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNewPaymentMutationGQL extends Apollo.Mutation<CreateNewPaymentMutationMutation, CreateNewPaymentMutationMutationVariables> {
    override document = CreateNewPaymentMutationDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($payment_id: Int!, $from: String!, $to: String!) {
  insert_transaction(
    objects: {payment_id: $payment_id, transactionFrom: $from, transactionTo: $to}
  ) {
    affected_rows
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTransactionGQL extends Apollo.Mutation<CreateTransactionMutation, CreateTransactionMutationVariables> {
    override document = CreateTransactionDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePaymentMutationDocument = gql`
    mutation UpdatePaymentMutation($id: Int!) {
  update_payment_by_pk(pk_columns: {id: $id}, _set: {completed: true}) {
    id
    completed
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePaymentMutationGQL extends Apollo.Mutation<UpdatePaymentMutationMutation, UpdatePaymentMutationMutationVariables> {
    override document = UpdatePaymentMutationDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PaymentSubscriptionDocument = gql`
    subscription PaymentSubscription {
  payment {
    amount
    description
    completed
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaymentSubscriptionGQL extends Apollo.Subscription<PaymentSubscriptionSubscription, PaymentSubscriptionSubscriptionVariables> {
    override document = PaymentSubscriptionDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TransactionSubscriptionDocument = gql`
    subscription TransactionSubscription {
  transaction {
    transactionFrom
    transactionTo
    payment {
      amount
      description
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TransactionSubscriptionGQL extends Apollo.Subscription<TransactionSubscriptionSubscription, TransactionSubscriptionSubscriptionVariables> {
    override document = TransactionSubscriptionDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
