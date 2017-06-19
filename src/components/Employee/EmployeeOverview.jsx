import React from 'react'
import SearchBar from '../SearchBar';
import EmployeeList from './EmployeeList';

export const EmployeeOverview = (props) => {
    return(
        <div className="Employee-Overview">
            <SearchBar/>
            <EmployeeList/>
        </div>
    )
}

export default EmployeeOverview;