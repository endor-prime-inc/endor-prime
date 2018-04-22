import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AuthLink } from './auth';
import { getProduct } from '../store/products';
import AddToCartButton from './AddToCartButton';

class ProductView extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const product = this.props.product;
    console.log(this.props.getProduct);
    return !product ? (
      <div />
    ) : (
      <div id="product-view" className="container my-2">
        <div id="product-overview" className="row">
          <div id="product-images card" className="col-sm-4 col-12">
            <img
              id="selected-image"
              src={product.pictures[0]}
              className="card-img-top"
            />
            <div id="image-gallery" className="card-body">
              {product.pictures.map(imgUrl => (
                <img className="product-thumbnail" key={imgUrl} src={imgUrl} />
              ))}
            </div>
          </div>
          <div id="product-info" className="col-sm-8 col-12">
            <div className="row">
              <div id="product-title" className="col-12">
                <h1>{product.name}</h1>
              </div>
              <div id="product-ratings" className="col-sm-3 col-6">
                {product.ratingsAvg} ⭐s from {product.ratingsCount} reviews
              </div>
              <div id="product-price" className="col-sm-3 col-6">
                {product.price} credits
              </div>
              <div id="product-purchase" className="col-sm-6 col-12">
                <AddToCartButton productId={product.id} />
              </div>
              <div id="product-description" className="col-12">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="product-reviews" className="row">
          <div id="review-header" className="col-12">
            <AuthLink to={`/products/${product.id}/reviews/add`}>
              <button className="btn btn-link">Add review</button>
            </AuthLink>
            <Link to={`/products/${product.id}/reviews`}>
              <button className="btn btn-secondary">See all reviews</button>
            </Link>
          </div>
          <div id="review-list" className="col-12 my-2">
            <ul className="list-group">
              {product.reviews &&
                product.reviews.map(review => (
                  <li className="list-group-item" key={review.id}>
                    <div className="individual-rating">{review.rating} ⭐s</div>
                    <p>{review.user.email}’s review:</p>
                    <p>{review.content}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
