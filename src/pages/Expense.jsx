import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { toast } from "react-toastify";
import "./Expense.css";

function Expense() {
  const { addTransaction } = useContext(TransactionContext);

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ VALIDATION
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
      type: "expense",
      amount: Number(amount),
      category,
      description,
    });

    // ✅ SUCCESS
    toast.success("Expense added successfully!");

    // ✅ CLEAR FORM
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="expense-container">
      <div className="expense-card">
        <h2>💸 Add Expense</h2>

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
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="rent">Rent</option>
            <option value="shopping">Shopping</option>
            <option value="bills">Bills</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
}

export default Expense;