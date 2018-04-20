import React from 'react';

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
        {Object.keys(categories).map(id => {
          const name = categories[id].name;
          return (
            <a
              key={id}
              className="dropdown-item"
              href={`/products/?category=${name}`}
            >
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDropdown;
