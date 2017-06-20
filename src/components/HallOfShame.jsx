import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Credit from './Credit';
import Employee from './Employee/Employee';
import './Employee/Employee.css';
import {getEmployeeById} from '../reducers/employeesReducer';

class HallOfShame extends PureComponent {
    render() {
        const {employees} = this.props;
        return (
            <div className="HallOfShame">
                <h1>Hall of Shame</h1>
                <div className="Employee-List">
                    {employees.map((employee, id) => (
                        <div key={employee.name}>
                            <Employee
                                name={employee.name}
                                image={employee.image}
                                title={employee.title}
                            />
                            <Credit credit={employee.credit} id={id}/>
                        </div>
                    )).toArray()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const employeesTotalCredit = state.credit.map((payments, id) => payments.reduce((a,b) => a+b, 0));
    const employeesTotalDue = state.lunch.map((lunchDates, id) => lunchDates.size * 2.5);
    const paymentDue = employeesTotalCredit.filter((credit, id) => (credit - employeesTotalDue.get(id)) < 0);
    const employees = paymentDue.map(
        (value, id) => {
            return {...getEmployeeById(state.employees, id), credit: value - employeesTotalDue.get(id)};
        }
    ).sort((a, b) => a.credit - b.credit);

    return {
        employees,
    }
}

export default connect(mapStateToProps)(HallOfShame);
