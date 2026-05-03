import React, { useContext } from "react";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const { search, setSearch } = useContext(TransactionContext);

  return (
    <div className="navbar">

      {/* LEFT (EMPTY - removed name) */}
      <div className="nav-left"></div>

      {/* CENTER SEARCH */}
      <div className="nav-search">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* RIGHT DARK MODE */}
      <div className="nav-right">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

    </div>
  );
}

export default Navbar;