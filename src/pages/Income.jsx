import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { toast } from "react-toastify";
import "./Income.css";

function Income() {
  const { addTransaction } = useContext(TransactionContext);

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ VALIDATION (must come first)
    if (!amount || !category) {
      toast.error("Please fill all required fields");
      return;
    }

    if (Number(amount) <= 0) {
      toast.error("Amount must be greater than 0");
      return;
    }

    // ✅ ADD TRANSACTION
    addTransaction({
      id: Date.now(),
      type: "income",
      amount: Number(amount),
      category,
      description,
    });

    // ✅ SUCCESS TOAST
    toast.success("Income added successfully!");

    // ✅ CLEAR FORM
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="income-container">
      <div className="income-card">
        <h2>💰 Add Income</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="salary">Salary</option>
            <option value="freelance">Freelance</option>
            <option value="business">Business</option>
            <option value="investment">Investment</option>
            <option value="gift">Gift</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Add Income</button>
        </form>
      </div>
    </div>
  );
}

export default Income;