import React from "react";
import "./Dashboard.css";

import Summary from "../components/Summary";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";
import Filter from "../components/Filter";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 style={{ textAlign: "center" }}>Finance Dashboard</h1>

      <div className="section">
        {/* SEARCH will be here later */}
      </div>

      <div className="section">
        <Summary transactions={[]} />
      </div>

      <div className="section">
        <AddTransaction addTransaction={() => {}} />
      </div>

      <div className="section">
        <Filter filter={{}} setFilter={() => {}} />
      </div>

      <div className="section">
        <TransactionList transactions={[]} />
      </div>
    </div>
  );
}

export default Dashboard;