import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function Dashboard() {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h2>📊 Dashboard Overview</h2>

      <div style={styles.cards}>
        <Card title="Income" value={income} color="green" />
        <Card title="Expense" value={expense} color="red" />
        <Card title="Balance" value={balance} color="blue" />
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div style={{ ...styles.card, borderLeft: `5px solid ${color}` }}>
      <h4>{title}</h4>
      <h2>${value}</h2>
    </div>
  );
}

const styles = {
  cards: {
    display: "flex",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "150px",
  },
};

export default Dashboard;