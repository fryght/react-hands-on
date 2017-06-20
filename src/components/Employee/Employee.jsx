import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './Employee.css';

class Employee extends PureComponent {
    render() {
        const {name, image, title} = this.props;
        let link = name.toLowerCase();
        link = link.split(' ').join('-');
        return (
            <div className="Employee">
                <Link key={name} to={`/employees/${link}`}>
                    <div className="name">{name}</div>
                    <div className="image"><img src={image} alt={name}/></div>
                    <div className="title">{title}</div>
                </Link>
            </div>
        );
    }
}

export default Employee;