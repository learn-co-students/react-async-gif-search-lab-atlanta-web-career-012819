import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  handleData = data => {
    let gifResponse = []
    for (let i = 0; i < 3; i++) {
      gifResponse.push({
        url: data[i].images.original.url,
        title: data[i].title
      })
    }
    this.setState({
      gifs: gifResponse
    })
  }

  handleSearch = term => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => this.handleData(data.data))
  }

  render() {
    return(
      <React.Fragment>
        < GifSearch search={this.handleSearch} />
        < GifList gifs={this.state.gifs} />
      </React.Fragment>
    )
  }
}

export default GifListContainer