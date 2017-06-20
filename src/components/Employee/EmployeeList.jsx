import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {filterByName} from '../../reducers/employeesReducer';
import Employee from './Employee';
import './Employee.css';
import {toggleLunchDate} from '../../actions/lunch';

class EmployeeList extends PureComponent {
    handleToggleLunch(id) {
        this.props.toggleLunch(id);
    }
    renderEmployee(employee, id) {
        return (
            <div key={id}>
                <Employee
                    name={employee.name}
                    image={employee.image}
                    title={employee.title}
                />
                <button onClick={() => this.handleToggleLunch(id)}>Toggle Lunch for today</button>
            </div>
        );
    }

    render() {
        const {employees} = this.props;
        return (
            <div className="Employee-List">
                {employees.map((employee, id) => this.renderEmployee(employee, id)).toArray()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: filterByName(state.employees, state.searchFilter),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return {
        
        toggleLunch: id => {
            dispatch(toggleLunchDate(id, today))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
