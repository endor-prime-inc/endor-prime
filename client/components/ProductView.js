import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthLink } from './auth';

// Welcome: a landing page for unauthenticated users
class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 3,
        name: 'Jedi Lightsaber',
        description: 'For the good guys',
        price: 20000,
        quantity: 2,
        pictures: ['/images/defaultImage.jpg'],
        reviews: [
          {
            id: 3,
            content: 'Pretty good',
            rating: 4,
            productId: 3,
            userId: 2
          },
          { id: 9, content: 'Meh', rating: 2, productId: 3, userId: 1 }
        ]
      }
      //   order: {
      //     product: {
      //           id: 3,
      //           price: 20000}
      // }
    };
  }

  render() {
    const product = this.state.product;
    const reviews = this.state.product.reviews;
    return (
      <div id="product-view" className="container-fluid">
        <div id="product-overview" className="row">
          <div id="product-images" className="col-4">
            <div className="card">
              <img
                id="selected-image"
                src={product.pictures[0]}
                className="card-img-top"
              />
            </div>
            <div id="image-gallery">
              {product.pictures.map(imgUrl => (
                <img className="product-thumbnail" key={imgUrl} src={imgUrl} />
              ))}
            </div>
          </div>
          <div id="product-info" className="col-8">
            <div id="product-title" className="row">
              <h1>{product.name}</h1>
            </div>
            <div id="product-details" className="row">
              <div id="average-rating" className="col-3">
                {product.rating}
              </div>
              <div id="product-price" className="col-3">
                {product.price} credits
              </div>
              <div id="product-purchase" className="col-6">
                <form id="order-form" className="form-inline">
                  <div className="form-group mb-6">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      type="text"
                      name="quantity"
                      id="product-order-quantity"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mb-6"
                    onClick={() => ''}
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </div>
            <div id="product-description" className="row">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div id="product-reviews" className="row">
          <div id="review-header" className="row">
            <AuthLink to={`/products/${product.id}/reviews/add`}>
              <button>Add review</button>
            </AuthLink>
            <Link to={`/products/${product.id}/reviews`}>
              <button>See all reviews</button>
            </Link>
          </div>
          <div id="review-list" className="row">
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <div className="individual-rating" />
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
export default ProductView;
