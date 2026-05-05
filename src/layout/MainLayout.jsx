import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { TransactionContext } from "../context/TransactionContext";

function MainLayout() {
  const { darkMode, toggleTheme } = React.useContext(ThemeContext);
  const { search, setSearch } = React.useContext(TransactionContext);

  // Dynamic styles based on darkMode
  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100vw", // Changed from 100vw to 100%
    },
    sidebar: {
      width: "220px",
      background: darkMode ? "#1e293b" : "white",
      color: darkMode ? "#e2e8f0" : "#1e293b",
      padding: "20px",
      transition: "all 0.3s ease",
      boxShadow: darkMode ? "none" : "2px 0 8px rgba(0,0,0,0.05)",
    },
    logo: {
      marginBottom: "30px",
      fontSize: "24px",
      fontWeight: "bold",
      color: darkMode ? "#f1f5f9" : "#0f172a",
    },
    nav: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    link: {
      color: darkMode ? "#cbd5e1" : "#475569",
      textDecoration: "none",
      padding: "8px 12px",
      borderRadius: "8px",
      transition: "all 0.2s ease",
      display: "block",
    },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    navbar: {
      height: "60px",
      background: darkMode ? "#1e293b" : "white",
      color: darkMode ? "white" : "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      borderBottom: darkMode ? "1px solid #334155" : "1px solid #e2e8f0",
      transition: "all 0.3s ease",
      gap: "20px",
    },
    search: {
      flex: 1,
      maxWidth: "400px",
      padding: "8px 12px",
      borderRadius: "8px",
      border: darkMode ? "1px solid #475569" : "1px solid #cbd5e1",
      background: darkMode ? "#0f172a" : "#f8fafc",
      color: darkMode ? "#e2e8f0" : "black",
      outline: "none",
      transition: "all 0.2s ease",
    },
    right: {
      display: "flex",
      gap: "15px",
      alignItems: "center",
    },
    profile: {
      cursor: "pointer",
      fontWeight: "bold",
      color: darkMode ? "#e2e8f0" : "#1e293b",
      padding: "8px",
      borderRadius: "8px",
    },
    content: {
      padding: "20px",
      flex: 1,
      overflowY: "auto",
      transition: "all 0.3s ease",
    },
    themeBtn: {
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      background: darkMode ? "#f1f5f9" : "#1e293b",
      color: darkMode ? "#1e293b" : "white",
      fontWeight: "bold",
      transition: "all 0.2s ease",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>💰 Finance</h2>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>
            📊 Dashboard
          </Link>
          <Link to="/income" style={styles.link}>
            💵 Add Income
          </Link>
          <Link to="/expense" style={styles.link}>
            💸 Add Expense
          </Link>
          <Link to="/transactions" style={styles.link}>
            📝 Transactions
          </Link>
          <Link to="/profile" style={styles.link}>
            👤 Profile
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div style={styles.mainContent}>
        {/* Navbar */}
        <header style={styles.navbar}>
          <input
            type="text"
            placeholder="🔍 Search by name, category, date, amount..."
            style={styles.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={toggleTheme} style={styles.themeBtn}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          <div style={styles.right}>
            <div style={styles.profile}>👤 Tinebeb</div>
          </div>
        </header>

        {/* Page Content */}
        <main style={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;