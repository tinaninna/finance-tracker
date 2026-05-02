import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function MainLayout() {
  const { darkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Finance</h2>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>
            {" "}
            Dashboard
          </Link>
          <Link to="/income" style={styles.link}>
            {" "}
            Add Income
          </Link>
          <Link to="/expense" style={styles.link}>
            {" "}
            Add Expense
          </Link>
          <Link to="/transactions" style={styles.link}>
            {" "}
            Transactions
          </Link>
          <Link to="/profile" style={styles.link}>
            👤 Profile
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <header style={styles.navbar}>
          {/* Search */}
          <input
            type="text"
            placeholder="Search transactions..."
            style={styles.search}
          />

          <button onClick={toggleTheme} style={styles.themeBtn}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Right side */}
          <div style={styles.right}>
            <div style={styles.profile}>Tinebeb</div>
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

const styles = {
  sidebar: {
    width: "220px",
    background: "#1e293b",
    color: "white",
    padding: "20px",
  },
  logo: {
    marginBottom: "30px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  navbar: {
    height: "60px",
    background: "#f8fafc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    borderBottom: "1px solid #ddd",
  },
  search: {
    width: "300px",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  right: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  profile: {
    cursor: "pointer",
    fontWeight: "bold",
  },
  content: {
    padding: "20px",
    background: "#f1f5f9",
    flex: 1,
    overflowY: "auto",
  },
  themeBtn: {
  padding: "6px 12px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  background: "#1e293b",
  color: "white",
},
};

export default MainLayout;
