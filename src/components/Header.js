import React, { useState } from "react";

const Header = ({
  setShowCategory,
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <ul className="navbar navbar-expand flex-row w-100 list-unstyled">
      <li
        className={`font-weight-bold p-3 nav-item ${
          !activeCategory ? "bg-warning" : ""
        }`}
        onClick={() => setActiveCategory("")}
      >
        All
      </li>
      {categories.map((category, index) => {
        return (
          <li
            className={`p-3 nav-item ${
              activeCategory === category.name ? "bg-warning" : ""
            }`}
            key={index}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </li>
        );
      })}

      <li
        className="font-weight-bold p-3 nav-item bg-info"
        onClick={() => setShowCategory(true)}
      >
        +
      </li>
    </ul>
  );
};

export default Header;
