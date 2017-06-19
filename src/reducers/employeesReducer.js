import employees from '../data/employees';
const employeesInitialState = employees;

const employeesReducer = (state = employeesInitialState, action) => {
    return state;
};

export default employeesReducer;

export const filterByName = (employees, query) => employees.filter(employee => employee.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
export const filterByTitle = (employees, query) => employees.filter(employee => employee.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
export const getNoCreditEmployees = employees => employees.filter(employee => employee.credit < 0).sort((a,b) => a.credit - b.credit);
