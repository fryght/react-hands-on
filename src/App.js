import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'react-router-redux';
import {
  Route,
  Link
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'
import store from './createStore';
import EmployeeDetails from './components/Employee/EmployeeDetails';
import EmployeeOverview from './components/Employee/EmployeeOverview';
import HallOfShame from './components/HallOfShame';
import './App.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

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
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/employees">Employees</Link></li>
              <li><Link to="/hall-of-shame">Hall of Shame</Link></li>
            </ul>
            <Route path="/employees/:name" component={EmployeeDetails}/>
            <Route exact path="/employees" component={EmployeeOverview}/>
            <Route path="/hall-of-shame" component={HallOfShame}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
