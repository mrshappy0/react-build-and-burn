import React, {Component} from 'react'

export default class AddNew extends Component {
    state = {
        newPersonForm: {
            firstName: "",
            lastName: "",
            role: "student"
        },
    }
    updateForm = event => {
        const key = event.target.name
        const value = event.target.value
        this.setState(state => {
            state.newPersonForm[key] = value
            return state
        })
    }
    addPerson = event => {
        event.preventDefault()
        const newPerson = {
            firstName: this.state.newPersonForm.firstName,
            lastName: this.state.newPersonForm.lastName,
            role: this.state.newPersonForm.role,
        }
        this.props.addPerson(newPerson)
        this.setState(state => {
            state.newPersonForm.firstName = ""
            state.newPersonForm.lastName = ""
            state.newPersonForm.role = ""
            return state
        })
    }
    render(){
        return (
            <form onSubmit={this.addPerson} className="add-new">
                <h2>Add New</h2>
                <input onChange={this.updateForm} name="firstName" type="text" required placeholder="First name" value={this.state.newPersonForm.firstName} />
                <input onChange={this.updateForm} name="lastName" type="text" required placeholder="Last name" value={this.state.newPersonForm.lastName} />
                <select onChange={this.updateForm} name="role" required value={this.state.newPersonForm.role} >
                    <option disabled>Please select a role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="administrator">Administrator</option>
                </select>
                <input type="submit" value="Add" />
            </form>
        )
    }
}
