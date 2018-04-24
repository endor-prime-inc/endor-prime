import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCart } from '../store/cart';

class ThankYouForYourOrder extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.changeCart({});
    }, 10000);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Thank you for your order!</h2>
            <p>Please check your inbox for more details.</p>
            <p>You will be redirected shortly.</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    changeCart: () => {
      dispatch(changeCart());
    }
  };
};

export default connect(null, mapDispatch)(ThankYouForYourOrder);
