import React from "react";

function SummaryCard({ title, amount, color, icon }) {
  return (
    <div style={{ ...styles.card, borderLeft: `6px solid ${color}` }}>
      <div>
        <h4 style={styles.title}>{title}</h4>
        <h2 style={styles.amount}>{amount}</h2>
      </div>

      <div style={{ fontSize: "30px" }}>
        {icon}
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    minWidth: "220px",
  },
  title: {
    margin: 0,
    color: "#64748b",
    fontSize: "14px",
  },
  amount: {
    margin: "5px 0 0 0",
    fontSize: "22px",
  },
};

export default SummaryCard;