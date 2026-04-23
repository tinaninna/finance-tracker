import React from "react";
import "./TransactionList.css";

const TransactionList = ({ transactions }) => {
  return (
    <div className="list-container">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p style={{ textAlign: "center" }}>No transactions yet</p>
      ) : (
        transactions.map((tx) => (
          <div key={tx.id} className={`transaction-item ${tx.type}`}>
            <div>
              <p className="category">{tx.category}</p>
              <p className="date">{tx.date}</p>
            </div>

            <div className="amount">
              {tx.type === "income" ? "+" : "-"} ${tx.amount}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;