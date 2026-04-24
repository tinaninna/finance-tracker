import React from "react";
import "./Filter.css";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      <h3>Filter</h3>

      <select
        value={filter.type}
        onChange={(e) =>
          setFilter({ ...filter, type: e.target.value })
        }
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="text"
        placeholder="Search category..."
        value={filter.category}
        onChange={(e) =>
          setFilter({ ...filter, category: e.target.value })
        }
      />
    </div>
  );
};

export default Filter;