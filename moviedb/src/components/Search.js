import React from 'react'

const Search = ({ handleInput, search }) => {
    return ( <
        div className = "searchbox-wrap" >
        <
        input type = "text"
        placeholder = "Search for movies"
        className = "searchbox"
        onChange = { handleInput }
        onKeyPress = { search }
        /> <
        /div>
    )
}

export default Search