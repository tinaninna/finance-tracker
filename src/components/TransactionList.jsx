import React from "react";
import "./TransactionList.css";

const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      amount: 500,
      type: "income",
      category: "Salary",
      date: "2026-04-20",
    },
    {
      id: 2,
      amount: 150,
      type: "expense",
      category: "Food",
      date: "2026-04-21",
    },
    {
      id: 3,
      amount: 80,
      type: "expense",
      category: "Transport",
      date: "2026-04-22",
    },
  ];

  return (
    <div className="list-container">
      <h2>Transactions</h2>

      {transactions.map((tx) => (
        <div key={tx.id} className={`transaction-item ${tx.type}`}>
          <div>
            <p className="category">{tx.category}</p>
            <p className="date">{tx.date}</p>
          </div>

          <div className="amount">
            {tx.type === "income" ? "+" : "-"} ${tx.amount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;