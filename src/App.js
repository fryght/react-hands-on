import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import HallOfShame from './components/HallOfShame';
import './App.css';
import employees from './data/employees';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {filter: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({filter: event.target.value});
  }

  render() {
    const filterByName = query => employees.filter(employee => employee.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    const filterByTitle = query => employees.filter(employee => employee.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
    const NoCreditEmployees = employees.filter(employee => employee.credit < 0).sort((a,b) => a.credit - b.credit);

    return (
      <div className="App">
        <SearchBar updateValue={this.handleChange}/>
        <HallOfShame employees={NoCreditEmployees}/>
      </div>
    );
  }
}

export default App;
