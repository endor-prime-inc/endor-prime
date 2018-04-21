import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../store/categories';
import { Link } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown';
import SearchBar from './SearchBar';

class StoreToolbar extends Component {
  componentDidMount = () => {
    this.props.getCategories();
  };

  render() {
    const { categories } = this.props;

    return (
      <div className="row py-3 m-0 mb-3" style={{ backgroundColor: '#F0F0F0' }}>
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
  }
}

const mapState = state => {
  const { categories } = state;
  return { categories };
};

const mapDispatch = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
};

export default connect(mapState, mapDispatch)(StoreToolbar);
