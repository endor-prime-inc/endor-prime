import React from 'react';
import querystring from 'querystring';
import { connect } from 'react-redux';
import ProductList from './ProductList';

const Products = props => {
  let listView = false;
  const { products } = props;
  const { search } = props.location;
  const filters = querystring.parse(search.slice(1));
  const allProducts = Object.keys(products).map(id => products[id]);

  const categoryFilteredProducts = filters.category
    ? allProducts.filter(product => {
        return product.categories.find(category => {
          return category.name === filters.category;
        });
      })
    : allProducts;

  const searchFilteredProducts = filters.search
    ? categoryFilteredProducts.filter(product => {
        return product.name
          .toLowerCase()
          .includes(filters.search.toLowerCase());
      })
    : categoryFilteredProducts;

  return (
    <ProductList
      filteredProducts={searchFilteredProducts}
      listView={listView}
    />
  );
};

const mapState = state => {
  const { products } = state;
  return { products };
};

export default connect(mapState)(Products);
