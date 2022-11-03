import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:9000/api/employees";
class EmployeeLibraryService{

    getAll() {
        return axios.get(EMPLOYEE_API_BASE_URL);
      }
      deleteAll() {
        return axios.delete(EMPLOYEE_API_BASE_URL);
      }

    findByLibrary(library) {
        return axios.get(`http://localhost:9000/api/employees?library=${library}`);
      }

}
export default new EmployeeLibraryService();