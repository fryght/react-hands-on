import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {filterByName} from '../../reducers/employeesReducer';
import Employee from './Employee';
import './Employee.css';

class EmployeeList extends PureComponent {
    render() {
        const {employees} = this.props;
        return (
            <div className="Employee-List">
                {employees.map(employee => (
                    <Employee
                        key={employee.name}
                        name={employee.name}
                        image={employee.image}
                        title={employee.title}
                        credit={employee.credit || 0}
                    />
                ))}
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
