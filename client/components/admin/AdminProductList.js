import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../ProductList';

const mapState = ({ products }) => ({ products });

const AdminProductList = ({ products }) => {
  return Object.keys(products).length ? (
    <div className="container">
      <div className="row">
        <div className="col-2">Quantity</div>
        <div className="col-8">Listing</div>
        <div className="col-1" />
        <div className="col-1">Price</div>
        <ProductList
          filteredProducts={Object.keys(products).map(id => products[id])}
          listView={true}
          adminView={true}
        />
      </div>
    </div>
  ) : (
    <div />
  );
};
export default connect(mapState)(AdminProductList);
