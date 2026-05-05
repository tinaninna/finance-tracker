import React, { createContext, useState } from "react";

export const TransactionContext = createContext();

function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  // 🔍 GLOBAL SEARCH FILTER (YOUR ORIGINAL LOGIC - KEPT INTACT)
  const filteredTransactions = transactions.filter((t) => {
    const q = search.toLowerCase();

    return (
      t.amount?.toString().includes(q) ||
      t.category?.toLowerCase().includes(q) ||
      t.description?.toLowerCase().includes(q) ||
      t.type?.toLowerCase().includes(q) ||
      (t.date && t.date.includes(q)) ||
      t.name?.toLowerCase().includes(q)  // 
    );
  });

  // Optional: Save to localStorage (if you want persistence)
  // useEffect(() => {
  //   localStorage.setItem("transactions", JSON.stringify(transactions));
  // }, [transactions]);

  // Optional: Load from localStorage
  // useEffect(() => {
  //   const saved = localStorage.getItem("transactions");
  //   if (saved) setTransactions(JSON.parse(saved));
  // }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        filteredTransactions,
        addTransaction,
        search,
        setSearch,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;