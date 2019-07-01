import React, {Component} from 'react'

class GifSearch extends Component {
    state={
        text:''
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.fetchGifs(this.state.text)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.text} onChange={e => this.setState({text: e.target.value})}>
                
                </input>
                </form>
                </div>
        )
    }
}

export default GifSearch;