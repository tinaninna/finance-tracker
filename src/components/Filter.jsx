import React, { useState } from "react";
import "./Filter.css";

function Filter({ filter, setFilter }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setFilter({
      ...filter,
      search: searchInput,
    });
  };

  return (
    <div className="filter-container">

      {/* TYPE FILTER */}
      <select
        value={filter.type}
        onChange={(e) =>
          setFilter({ ...filter, type: e.target.value })
        }
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* CATEGORY FILTER */}
      <input
        type="text"
        placeholder="Filter by category"
        value={filter.category}
        onChange={(e) =>
          setFilter({ ...filter, category: e.target.value })
        }
      />

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {/* SEARCH BUTTON (NEW ONLY) */}
      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default Filter;