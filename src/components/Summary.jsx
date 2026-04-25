import React from "react";
import "./summery.css";

function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="summary-container">
      <div className="summary-card income">
        <h3>Income</h3>
        <p className="income-text">+ {income} Birr</p>
      </div>

      <div className="summary-card expense">
        <h3>Expense</h3>
        <p className="expense-text">- {expense} Birr</p>
      </div>

      <div className="summary-card balance">
        <h3>Balance</h3>
        <p className={balance >= 0 ? "income-text" : "expense-text"}>
          {balance} Birr
        </p>
      </div>
    </div>
  );
}

export default Summary;