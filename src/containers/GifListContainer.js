import React, { Component } from 'react'
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    state = {
        image_urls: []
    }
    handleSearch = (e)=>{
        e.preventDefault()
        const searchStr = e.target.search.value
        console.log('searchStr', searchStr)

        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => {
            if(!resp.ok){
                throw resp.status
            }
            //console.log('resp', resp.json())
            return resp.json() })
        .then(data => {
            const urls = data.data.map((img)=>img.images.original.url)
            this.setState({image_urls: urls})
            console.log('data', data)
        })

        e.target.reset()
    }
    render() {
        return (
            <div className="row">
                <GifList image_urls={this.state.image_urls} />
                <GifSearch formAction={this.handleSearch} />
            </div>
    )
  }
}
