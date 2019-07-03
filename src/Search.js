import React from 'react'

export default function Search(props) {
    return (
        <form className="search">
            <input onChange={props.updateSearchTerm} name="search-text" value={props.searchTerm} type="text" />
            <i className="fa fa-search"></i>
        </form>
    )
}


