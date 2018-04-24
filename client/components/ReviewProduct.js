import React from 'react';
import { connect } from 'react-redux';

import { getProduct } from '../store/products';
import { postReview } from '../store/reviews';

class ReviewProduct extends React.Component {
  state = {
    rating: 5,
    content: ''
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  handleSubmit = async event => {
    event.preventDefault();
    const { postReview, product } = this.props;
    await postReview({
      rating: this.state.rating,
      content: this.state.content,
      productId: product.id
    });
    this.props.history.push(`/products/${product.id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>{this.props.product.name} Review</h2>
          </div>
          <div className="col-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.rating}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="content"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.content}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Leave Review
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.match.params.id],
  history: ownProps.history
});

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getProduct(id)),
  postReview: data => dispatch(postReview(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewProduct);
