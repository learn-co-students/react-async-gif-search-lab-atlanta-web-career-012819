import React from 'react'

export default function GifSearch(props) {
    return (
        <div>
            <form onSubmit={props.formAction}>
                <label htmlFor="search">Enter a Search Term:</label> <br />
                <input type="text" name="search" /> <br />
                <input type="submit" value="Find Gifs" />
            </form>
        </div>
  )
}
