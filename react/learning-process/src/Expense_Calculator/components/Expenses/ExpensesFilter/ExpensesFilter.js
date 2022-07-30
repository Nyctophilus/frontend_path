import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ selected, onSelectYear }) => {
  const yearHandler = (e) => {
    onSelectYear(e.target.value);
  };

  let dates = [];
  let currYear = new Date().getFullYear();

  for (let i = 10; i > 0; i--) {
    dates.push(currYear - i);
  }

  for (let i = 0; i < 10; i++) {
    dates.push(currYear + i);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          onChange={yearHandler}
          defaultValue={selected}
        >
          {dates.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
