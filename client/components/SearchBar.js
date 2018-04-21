import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/products?search=${this.state.search}`);
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            className="form-control input-border-fix mt-3 mt-sm-0"
            id="search"
            name="search"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-border-fix">
          Search
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
