import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDropdown = props => {
  const { categories } = props;
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="categoryDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Categories
      </button>
      <div className="dropdown-menu" aria-labelledby="categoryDropdown">
        <Link className="dropdown-item" to={`/products`}>
          All Categories
        </Link>
        {Object.keys(categories).map(id => {
          const name = categories[id].name;
          return (
            <Link
              key={id}
              className="dropdown-item"
              to={`/products?category=${name}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDropdown;
