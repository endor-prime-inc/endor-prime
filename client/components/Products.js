import React, { Component } from 'react';
import querystring from 'querystring';
import { connect } from 'react-redux';
import { getProducts } from '../store/products';
import RenderProducts from './RenderProducts';

class Products extends Component {
  componentDidMount = () => {
    this.props.getProducts();
  };

  render() {
    let listView = false;
    const { products } = this.props;
    const { search } = this.props.location;
    const filters = querystring.parse(search.slice(1));
    const allProducts = Object.keys(products).map(id => products[id]);

    const filteredProducts = filters.category
      ? allProducts.filter(product => {
          return product.categories.find(category => {
            return category.name === filters.category;
          });
        })
      : allProducts;

    return (
      <RenderProducts filteredProducts={filteredProducts} listView={listView} />
    );
  }
}

const mapState = state => {
  const { products } = state;
  return { products };
};

const mapDispatch = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    }
  };
};

export default connect(mapState, mapDispatch)(Products);
