import React, { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Finance Tracker</h1>

      <AddTransaction addTransaction={addTransaction} />

      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;