import React from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Finance Tracker
      </h1>

      <AddTransaction />
      <TransactionList />
    </div>
  );
}

export default App;