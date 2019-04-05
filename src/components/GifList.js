import React from "react";

const GifList = props => {
  return (
    <div className="col-sm-8">
      <ul>
        {props.gifs.map((gif, i) => (
          <li key={i}>
            <img src={gif.images.original.url} alt={`${i}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GifList;
