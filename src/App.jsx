import React, { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

import Filter from "./components/Filter";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState({
    type: "all",
    category: "",
  });

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((t) => {
    const typeMatch =
      filter.type === "all" || t.type === filter.type;

    const categoryMatch = t.category
      .toLowerCase()
      .includes(filter.category.toLowerCase());

    return typeMatch && categoryMatch;
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Finance Tracker</h1>

     

      <AddTransaction addTransaction={addTransaction} />

      <Filter filter={filter} setFilter={setFilter} />

      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;