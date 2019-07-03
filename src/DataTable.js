import React, {Component} from 'react'

const roles = {
    student: "Student",
    teacher: "Teacher",
    administrator: "Administrator",
}

const filters = {
    all(){
        return true
    },
    student(person){
        return person.role === "student"
    },
    teacher(person){
        return person.role === "teacher"
    },
    administrator(person){
        return person.role === "administrator"
    }
}

export default class DataTable extends Component {
    state = {
        currentSort: "",
    }
    getDisplayedPeople = () => {
        return this.props.people
            .filter(filters[this.props.currentFilter])
            .filter(person => {
                if (!this.props.searchTerm){
                    return true
                } else {
                    return person.firstName.toLowerCase().includes(this.props.searchTerm.toLowerCase())
                    || person.lastName.toLowerCase().includes(this.props.searchTerm.toLowerCase())
                }
            }).sort((a, b) => {
                if (!this.state.currentSort){
                    return 0
                } else {
                    return a[this.state.currentSort] >= b[this.state.currentSort]
                        ? 1
                        : -1
                }
            })
    }
    updateSort = sortKey => {
        this.setState({
            currentSort: sortKey
        })
    }
    render(){
        return (
            <table className="data-table">
                <thead>
                    <tr>
                        <th>First <button className={this.state.currentSort === "firstName" ? "active-sort" : undefined} onClick={() => this.updateSort("firstName")}><i className="fa fa-caret-down"></i></button></th>
                        <th>Last <button className={this.state.currentSort === "lastName" ? "active-sort" : undefined} onClick={() => this.updateSort("lastName")}><i className="fa fa-caret-down"></i></button></th>
                        <th>Role <button className={this.state.currentSort === "role" ? "active-sort" : undefined} onClick={() => this.updateSort("role")}><i className="fa fa-caret-down"></i></button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.getDisplayedPeople().map(person => {
                            return (
                                <tr>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{roles[person.role]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

