import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListConatiner extends Component {
    state ={
        gifs: []
    }

    componentDidMount(){
        this.fetchGifs()
    }

    fetchGifs = () => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => {
         this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
        }) 
    }

    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
                
            </div>
        )
    }
}

export default GifListConatiner;