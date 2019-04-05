import React, { Component } from "react";

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBox: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="col-sm-4">
        <form onSubmit={e => this.props.handleSearch(e, this.state.searchBox)}>
          <label htmlFor="search-box" className="control-label">
            Enter a Search Term:
          </label>
          <input
            type="text"
            id="search-box"
            name="searchBox"
            className="form-control"
            value={this.state.searchBox}
            placeholder="Search..."
            onChange={this.handleChange}
          />
          <input type="submit" value="Find GIFs" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default GifSearch;
