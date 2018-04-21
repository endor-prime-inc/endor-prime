import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  adminSearch: state.adminSearch
});

const AdminSearchbar = () => (
  <input type="text" className="form-control" placeholder="enter a search term" />
);

export default connect(mapState)(AdminSearchbar);
