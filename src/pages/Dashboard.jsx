import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./Dashboard.css";

function Dashboard() {
  const { transactions } = useContext(TransactionContext);

  //  TOTAL INCOME
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  //  TOTAL EXPENSE
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  //  BALANCE
  const balance = totalIncome - totalExpense;

  //  GROUP EXPENSES BY CATEGORY
  const expenseByCategory = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  //  PIE DATA (AS % OF INCOME)
  const pieData = Object.keys(expenseByCategory).map((key) => ({
    name: key,
    value: expenseByCategory[key],
    percent:
      totalIncome > 0
        ? ((expenseByCategory[key] / totalIncome) * 100).toFixed(1)
        : 0,
  }));

  // REMAINING MONEY (AS PIE SLICE)
  if (totalIncome > 0) {
    pieData.push({
      name: "Remaining",
      value: balance > 0 ? balance : 0,
      percent:
        totalIncome > 0
          ? ((balance > 0 ? balance : 0 / totalIncome) * 100).toFixed(1)
          : 0,
    });
  }

  const COLORS = [
    "#e74c3c",
    "#f39c12",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#1abc9c",
    "#e67e22",
    "#2ecc71", // remaining (green)
  ];

  //  BAR DATA
  const barData = [
    { name: "Income", amount: totalIncome },
    { name: "Expense", amount: totalExpense },
    { name: "Balance", amount: balance },
  ];

  return (
    <div className="dashboard">
      {/*  TOP CARDS */}
      <div className="cards">
        <div className="card income">Income: {totalIncome}</div>
        <div className="card expense">Expense: {totalExpense}</div>
        <div className="card balance">Balance: {balance}</div>
      </div>

      {/*  CHARTS */}
      <div className="charts">
        {/*  PIE CHART */}
        <div className="chart-box">
          <h3>Income Usage Breakdown</h3>

          {pieData.length === 0 ? (
            <p>No data available</p>
          ) : (
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label={({ name, percent }) => `${name} (${percent}%)`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/*  BAR CHART */}
        <div className="chart-box">
          <h3>Financial Overview</h3>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="amount">
                <Cell fill="#2ecc71" /> {/* Income */}
                <Cell fill="#e74c3c" /> {/* Expense */}
                <Cell fill="#3498db" /> {/* Balance */}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
