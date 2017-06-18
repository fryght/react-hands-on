import React, { PureComponent } from 'react';
import './Employee.css';

class Employee extends PureComponent {
    render() {
        const {name, image, title, credit} = this.props;
        let creditClass = 'credit';
        if (credit > 0) { creditClass = 'credit positive';}
        if (credit < 0) { creditClass = 'credit negative';}
        return (
            <div className="Employee">
                <div className="name">{name}</div>
                <div className="image"><img src={image} alt={name}/></div>
                <div className="title">{title}</div>
                <div className={creditClass}>{credit} euro</div>
            </div>
        );
    }
}

export default Employee;