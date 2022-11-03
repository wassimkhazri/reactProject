import axios from "axios";
const LIBRARY_URL ="http://localhost:9000/api/libraries/";
const EMPLOYEE_API_BASE_URL = "http://localhost:9000/api/employees";
class EmployeeService {
getEmployees(){
    axios.get(EMPLOYEE_API_BASE_URL)
}
createEmployee(employee){
    axios.post(EMPLOYEE_API_BASE_URL,employee)
}
getEmployeeById(employeeId){
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}

updateEmployee(employee, employeeId){
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
}

deleteEmployee(employeeId){
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}

getEmployeeByLibrary=(employeeId)=>{
    return  axios.get(LIBRARY_URL + employeeId + "/employees");
  
}
} 
export default new EmployeeService() 