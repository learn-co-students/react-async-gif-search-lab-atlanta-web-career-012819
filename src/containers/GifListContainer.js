import React, { Component } from 'react'
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    state = {
        image_urls: []
    }
    handleSearch = (e)=>{
        e.preventDefault()
        const searchStr = e.target.search.value
        console.log('searchStr', searchStr)
        e.target.reset()
    }
    render() {
        return (
            <div>
                <GifSearch formAction={this.handleSearch} />
            </div>
    )
  }
}
