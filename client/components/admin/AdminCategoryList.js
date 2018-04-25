import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AdminCategoryRow from './AdminCategoryRow';

const mapState = state => ({
  categories: state.categories
});

const AdminCategoryList = ({ categories }) => (
  <div>
    {Object.values(categories).map(category => (
      <AdminCategoryRow key={category.id} category={category} />
    ))}
    <Link to="/admin/categories/add">Add a Category</Link>
  </div>
);

export default connect(mapState)(AdminCategoryList);
