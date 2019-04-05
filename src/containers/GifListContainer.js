import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      search: ""
    };
  }

  handleSearch = (e, search) => {
    e.preventDefault();
    // console.log(search);
    this.setState({
      search: search
    });

    e.target.reset();
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <GifList gifs={this.state.gifs} />
          <GifSearch handleSearch={this.handleSearch} />
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    const API = `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`;

    fetch(API)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.slice(0, 3)
        });
        // console.log(data.slice(0,3))
      });
  }
}
