import React from 'react'

export default function GifList(props) {
  return (
    <div className="col">
      <ul>
          {props.image_urls.map(url => <li><img src={url} alt="just an image" /></li>)}
      </ul>
    </div>
  )
}

