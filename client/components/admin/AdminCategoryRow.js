import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  categories: state.categories
});

const AdminCategoryRow = ({ category }) => (
  <div key={category.id} className="row my-1">
    <div className="col-4">
      {category.name}
    </div>
  </div>
);

export default connect(mapState)(AdminCategoryRow);