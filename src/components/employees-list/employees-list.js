import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

const elements = data.map(item => {

    const {id, ...ItemProps} = item;

    return (
        <EmployeesListItem key={id} {...ItemProps}/>
)
})

    return (
        <ul className="app-list list-group test">
            {elements}
        </ul>
    )
}

export default EmployeesList;