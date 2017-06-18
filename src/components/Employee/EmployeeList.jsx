import React, { PureComponent } from 'react';
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

export default EmployeeList;