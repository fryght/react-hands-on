import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {filterByName} from '../../reducers/employeesReducer';
import Employee from './Employee';
import './Employee.css';

class EmployeeList extends PureComponent {
    renderEmployee(employee) {
        let link = employee.name.toLowerCase();
        link = link.split(' ').join('-');
        return (
            <Link key={employee.name} to={`/employees/${link}`}>
                <Employee
                    name={employee.name}
                    image={employee.image}
                    title={employee.title}
                />
            </Link>
        );
    }

    render() {
        const {employees} = this.props;
        return (
            <div className="Employee-List">
                {employees.map(employee => this.renderEmployee(employee)).toArray()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: filterByName(state.employees, state.searchFilter),
    }
}

export default connect(mapStateToProps)(EmployeeList);
