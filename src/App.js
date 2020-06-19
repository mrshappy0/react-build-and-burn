import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import AddNew from './AddNew'
import DataTable from './DataTable'
import Search from './Search'
import Filter from './Filter'
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
  } from 'semantic-ui-react';
 
const apiUrl = "https://react-build-and-burn.herokuapp.com/"

class App extends Component {
    state = {
        searchTerm: "",
        currentFilter: "all",
        people: [],
    }
    componentDidMount() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(people => {
                this.setState({people})
            })
    }
    addPerson = newPerson => {
        this.setState(state => {
            state.people = [...this.state.people, newPerson]
            return state
        })
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson)
        }).catch(error => console.error(error.message))
    }
    updateSearchTerm = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    updateFilter = event => {
        this.setState({
            currentFilter: event.target.value
        })
    }
    render(){
      return (
        <div className="app">
          <header className="header">
            <h1>School Roster</h1>
            <div className="search-and-filter">
                <Search searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
                <Filter currentFilter={this.state.currentFilter} updateFilter={this.updateFilter} />
            </div>
          </header>
          <main>
            <DataTable people={this.state.people} searchTerm={this.state.searchTerm} currentFilter={this.state.currentFilter} />
            <AddNew addPerson={this.addPerson} />
          </main>
        </div>
      );
    }
}

export default App;
