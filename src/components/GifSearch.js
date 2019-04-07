import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    search: ``
  }
  
  handleFormChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.search(this.state.search)
  }

  render() {
    return(
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text"
               name="search"
               placeholder="Search for GIFs"
               onChange={e => this.handleFormChange(e)}
               value={this.state.search}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default GifSearch
