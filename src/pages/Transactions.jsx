import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { toast } from "react-toastify";
import "./Transactions.css";

function Transactions() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  const [typeFilter, setTypeFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((t) => {
    const typeMatch =
      typeFilter === "all" || t.type === typeFilter;

    const searchMatch =
      t.category?.toLowerCase().includes(search.toLowerCase()) ||
      t.description?.toLowerCase().includes(search.toLowerCase());

    return typeMatch && searchMatch;
  });

  const handleDelete = (id) => {
    deleteTransaction(id);
    toast.success("Transaction deleted");
  };

  return (
    <div className="transactions-container">
      <h2>📊 Transactions</h2>

      {/* FILTER */}
      <div className="filter-container">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          placeholder="Search category or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* LIST */}
      {filteredTransactions.length === 0 ? (
        <p className="empty">No transactions found</p>
      ) : (
        <div className="transactions-list">
          {filteredTransactions.map((t) => (
            <div key={t.id} className={`transaction-item ${t.type}`}>
              
              <div className="left">
                <h4>{t.category}</h4>
                <p>{t.description}</p>

                {/* ✅ DATE */}
                <small className="date">
                  {new Date(t.date).toLocaleString()}
                </small>
              </div>

              <div className="right">
                <p className="amount">
                  {t.type === "income" ? "+" : "-"} {t.amount}
                </p>

                <button onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Transactions;