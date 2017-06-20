import employees from '../data/employeesImmutable';
const employeesInitialState = employees;

const employeesReducer = (state = employeesInitialState, action) => {
    return state;
};

export default employeesReducer;

export const filterBySlug = (employees, query) => employees.filter(employee => employee.name.toLowerCase().split(' ').join('-') === query);
export const filterByName = (employees, query) => employees.filter(employee => employee.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
export const filterByTitle = (employees, query) => employees.filter(employee => employee.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
export const getNoCreditEmployees = employees => employees.filter(employee => employee.credit < 0).sort((a,b) => a.credit - b.credit);
export const getEmployeeById = (employees, id) => employees.get(id.toString());