import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Credit from './Credit';
import Employee from './Employee/Employee';
import './Employee/Employee.css';
import {getNoCreditIds} from '../reducers/creditReducer';
import {getEmployeeById} from '../reducers/employeesReducer';

class HallOfShame extends PureComponent {
    render() {
        console.log(this.props.employees.toJS());
        const {employees} = this.props;
        return (
            <div className="HallOfShame">
                <h1>Hall of Shame</h1>
                <div className="Employee-List">
                    {employees.map(employee => (
                        <div key={employee.name}>
                            <Employee
                                name={employee.name}
                                image={employee.image}
                                title={employee.title}
                            />
                            <Credit credit={employee.credit}/>
                        </div>
                    )).toArray()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        employees: getNoCreditIds(state.credit).map(
            (value, id) => {
                return {...getEmployeeById(state.employees, id), credit: value};
            }
        )
    }
}

export default connect(mapStateToProps)(HallOfShame);
