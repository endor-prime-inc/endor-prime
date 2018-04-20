import React, { Component } from 'react';
import querystring from 'querystring';
import { connect } from 'react-redux';
import { getCategories } from '../store';
import CategoryDropdown from './CategoryDropdown';

class StoreNav extends Component {
  componentDidMount = () => {
    this.props.getCategories();
  };

  render() {
    const { categories, potatoes } = this.props;

    return (
      <div className="row">
        <div className="col-3">
          <CategoryDropdown categories={categories} />
        </div>
        <div className="col-6">
          <CategoryDropdown categories={categories} />
        </div>
        <div className="col-3">
          <CategoryDropdown categories={categories} />
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

export default connect(mapState, mapDispatch)(Products);
