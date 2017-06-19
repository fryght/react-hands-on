import React, { PureComponent } from 'react';
import './Employee.css';

class Employee extends PureComponent {
    render() {
        const {name, image, title} = this.props;
        return (
            <div className="Employee">
                <div className="name">{name}</div>
                <div className="image"><img src={image} alt={name}/></div>
                <div className="title">{title}</div>
            </div>
        );
    }
}

export default Employee;