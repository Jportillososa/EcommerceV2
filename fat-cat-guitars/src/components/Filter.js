import React from "react";

function Filter() {
  return (
    <div className="filter">
      <div className="filter-result">Products</div>
      <div className="filter-sort">
        Order
        <select>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-type">
        Filter
        <select>
          <option value="">All</option>
          <option value="Acoustic">Acoustic</option>
          <option value="Electric">Electric</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
