import React from 'react';
import { connect } from 'react-redux';
import { postCategory } from '../../store/categories';

const mapDispatch = dispatch => ({
  postCategory: formData => dispatch(postCategory(formData))
});

class AdminCategoryAdd extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    await this.props.postCategory({ name: this.state.name });
    this.props.history.push('/admin/categories');
  }

  render() {
    return (
      <div className="container">
        <h3>Add a Category</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary float-right mt-3">
                Add Category
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatch)(AdminCategoryAdd);
