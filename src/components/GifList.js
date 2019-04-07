import React from 'react'

const GifList = ({ gifs }) => (
  <div className="gif-list">
    { gifs.map(gif => <img src={gif.url} alt={gif.title}></img>)}
  </div>
)

export default GifList