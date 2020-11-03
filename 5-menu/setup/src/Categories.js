import React from "react";

const Categories = ({filter, categories}) => {
  const categoryButtons = categories.map((category, index) => (
    <button key={index} className="filter-btn" onClick={() => filter(category)}>
      {category}
    </button>
  ));

  return (
    <div className="btn-container">
      <button onClick={() => filter("all")} className="filter-btn">
        All
      </button>
      {categoryButtons}
    </div>
  );
};

export default Categories;
