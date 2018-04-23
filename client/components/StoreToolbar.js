import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown';
import SearchBar from './SearchBar';

const StoreToolbar = ({ categories }) => (
  <div id="storeToolbar" className="row py-3 m-0 mb-3">
    <div className="col-auto mr-auto">
      <CategoryDropdown categories={categories} />
    </div>
    <div className="col-auto">
      <SearchBar />
    </div>
    <div className="col-auto">
      <Link to="/products">
        <button type="button" className="btn btn-secondary">
          All Products
        </button>
      </Link>
    </div>
  </div>
);

const mapState = state => {
  const { categories } = state;
  return { categories };
};

export default connect(mapState)(StoreToolbar);
