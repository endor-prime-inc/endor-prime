import React from 'react';
import { connect } from 'react-redux';

import { getProduct } from '../store/products';
import { postReview } from '../store/reviews';

class ReviewProduct extends React.Component {
  state = {
    rating: 1,
    content: ''
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  handleSubmit = async (event) => {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.rating}
          />
          <textarea
            name="content"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button className="btn btn-primary" type="submit">Leave Review</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.match.params.id],
  history: ownProps.history
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: id => dispatch(getProduct(id)),
  postReview: data => dispatch(postReview(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewProduct);
