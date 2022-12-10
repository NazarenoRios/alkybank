import React from "react";
import SkeletonLogo from "../../utils/skeleton/SkeletonLogo";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/actions/getTransactions";
import { useEffect } from "react";

const Balance = () => {
  const dispatch = useDispatch();
  let transactions = useSelector(
    (state) => state.allTransactionsReducer.transactions
  );

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  if (transactions.length == 0) {
    return <SkeletonLogo />;
  }

  const topUpTransactions = transactions
    .filter(
      (transaction) =>
        transaction.type == "topup" && transaction.amount !== null
    )
    .reduce((acc, current) => (acc += Number(current.amount)), 0);

  const paymentsTransactions = transactions
    .filter(
      (transaction) =>
        transaction.type == "payment" && transaction.amount !== null
    )
    .reduce((acc, current) => (acc += Number(current.amount)), 0);

  const balance = topUpTransactions - paymentsTransactions;

  return <div>{balance}</div>;
};

export default Balance;
