import React, { PureComponent } from 'react';
import Employee from './Employee';
import './Employee.css';
import employees from '../../data/employees';

class EmployeeList extends PureComponent {
    render() {
        return (
            <div className="Employee-List">
                {employees.map(employee => (
                    <Employee
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

export default EmployeeList;