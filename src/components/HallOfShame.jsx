import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Employee from './Employee/Employee';
import './Employee/Employee.css';
import {getNoCreditEmployees} from '../reducers/employeesReducer';

class HallOfShame extends PureComponent {
    render() {
        const {employees} = this.props;
        return (
            <div className="HallOfShame">
                <h1>Hall of Shame</h1>
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
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        employees: getNoCreditEmployees(state.employees),
    }
}

export default connect(mapStateToProps)(HallOfShame);
