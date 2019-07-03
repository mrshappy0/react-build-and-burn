import React from 'react'

export default function Filter(props) {
    return (
        <form className="filter">
            <select onChange={props.updateFilter} name="filter-option" value={props.currentFilter}>
                <option disabled>Filter by...</option>
                <option value="all">Show All</option>
                <option value="student">Show Only Students</option>
                <option value="teacher">Show Only Teachers</option>
                <option value="administrator">Show Only Administrators</option>
            </select>
        </form>
    )
}
