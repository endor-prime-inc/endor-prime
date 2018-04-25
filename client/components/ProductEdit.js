import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putProduct } from '../store/products';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      id: ''
    };
  }

  componentDidMount = () => {
    this.setState({
      name: this.props.name,
      description: this.props.description,
      price: this.props.price,
      quantity: this.props.quantity,
      id: this.props.id
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.putProduct(this.state.id, this.state);
    this.props.history.push(`/products/${this.state.id}`);
  };

  render() {
    if (!this.state.name) {
      return <div />;
    }

    return (
      <div className="container">
        <h3>Edit {this.state.name}</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="quantity">quantity</label>
              <input
                type="number"
                min="0"
                className="form-control"
                id="quantity"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                min="0"
                className="form-control"
                id="price"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary float-right mt-3">
            Save Listing
          </button>
        </form>
      </div>
    );
  }
}

const mapState = ({ products }, ownProps) => {
  return { ...products[ownProps.match.params.id] };
};

const mapDispatch = dispatch => {
  return {
    putProduct: (id, formData) => {
      dispatch(putProduct(id, formData));
    }
  };
};

export default connect(mapState, mapDispatch)(Checkout);
