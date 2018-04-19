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
          <div id="product-images" className="col-sm-4 col-12">
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
          <div id="product-info" className="col-sm-8 col-12">
            <div className="row">
              <div id="product-title" className="col-12">
                <h1>{product.name}</h1>
              </div>
              <div id="average-rating" className="col-sm-3 col-6">
                {product.rating}
              </div>
              <div id="product-price" className="col-sm-3 col-6">
                {product.price} credits
              </div>
              <div id="product-purchase" className="col-sm-6 col-12">
                <form id="order-form" className="form-inline">
                  <div className="form-group mb-2">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      id="product-order-quantity"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    onClick={() => ''}
                  >
                    Add to Cart
                  </button>
                </form>
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
              <button>Add review</button>
            </AuthLink>
            <Link to={`/products/${product.id}/reviews`}>
              <button>See all reviews</button>
            </Link>
          </div>
          <div id="review-list" className="col-12">
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
