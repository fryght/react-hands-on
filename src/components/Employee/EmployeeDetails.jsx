import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import './Employee.css';
import {filterBySlug} from '../../reducers/employeesReducer';

class EmployeeDetails extends PureComponent {
    render() {
        const {name, image, title} = this.props;
        return (
            <div className="Employee-Details">
                <div className="name">{name}</div>
                <div className="image"><img src={image} alt={name}/></div>
                <div className="title">{title}</div>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    const employee = filterBySlug(state.employees, props.match.params.name);
    return {
        name: employee.name,
        image: employee.image,
        title: employee.title,
    }
}

export default connect(mapStateToProps)(EmployeeDetails);
