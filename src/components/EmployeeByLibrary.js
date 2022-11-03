import axios from "axios";

import { Component } from "react";

// import { Link } from "react-router-dom";
const url = "http://localhost:9000/api/libraries";
export default class EmployeeLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            libraries: [],
            employees: [],
            employee: {
                id: null,
                name: undefined,
                adress: undefined,
                cin: 0,
                library:{
                    id:null,
                    name:"",
                    adress:""
                }
            }
        }
    }
    componentDidMount()
    {
        axios.get(url).then((response)=>this.setState({libraries:response.data}))
    }
    // constructor(props) {
    //     super(props);
    //     this.onChangeSearchLibrary = this.onChangeSearchLibrary.bind(this);
    //     this.retrieveEmployees = this.retrieveEmployees.bind(this);
    //     this.refreshList = this.refreshList.bind(this);
    //     this.setActiveEmployee = this.setActiveEmployee.bind(this);
    //     this.removeAllEmployees = this.removeAllEmployees.bind(this);
    //     this.searchLibrary = this.searchLibrary.bind(this);

    //     this.state = {
    //         employees: [],
    //         currentEmployee: null,
    //         currentIndex: -1,
    //         searchLibrary: ""
    //     };
    // }

    // componentDidMount() {
    //     this.retrieveEmployees();
    // }

    // onChangeSearchLibrary(e) {
    //     const searchLibrary = e.target.value;

    //     this.setState({
    //         searchLibrary: searchLibrary
    //     });
    // }

    // retrieveEmployees() {
    //     EmployeeLibraryService.getAll()
    //         .then(response => {
    //             this.setState({
    //                 employees: response.data
    //             });
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    // refreshList() {
    //     this.retrieveEMployeess();
    //     this.setState({
    //         currentEmployee: null,
    //         currentIndex: -1
    //     });
    // }

    // setActiveEmployee(employee, index) {
    //     this.setState({
    //         currentEmployee: employee,
    //         currentIndex: index
    //     });
    // }

    // removeAllEmployees() {
    //     EmployeeLibraryService.deleteAll()
    //         .then(response => {
    //             console.log(response.data);
    //             this.refreshList();
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    // searchLibrary() {
    //     this.setState({
    //         currentEmployee: null,
    //         currentIndex: -1
    //     });

    //     EmployeeLibraryService.findByLibrary(this.state.searchLibrary)
    //         .then(response => {
    //             this.setState({
    //                 emplyees: response.data
    //             });
    //             console.log(response.data);
    //             this.refreshList();
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
          console.log(`Option selected:`, this.state.selectedOption)
        );
      };
    render() {
        const { searchLibrary, employees, currentEmployee, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <select className="form-select"
                        value={this.state.value}
                        name={this.state.name}
                        onChange={this.state.handleChange} // assigning the function, so it can be trigged with all argument
                    >
                        {
                            this.state.libraries.map((item, index) => {
                                return <option value={index}>{item.name}
                     
                                </option>
                                
                               //libraries/{libraryId}/employees
                            })
                        }
                        
                    </select>
                    <button className="btn btn-outline-danger" onClick={() => axios.get(`http://localhost:9000/api/libraries/2/employees`).then((response)=>this.setState({employees:response.data}))} >Search</button>
                    
                    {/* <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by library"
                            value={searchLibrary}
                            onChange={this.onChangeSearchLibrary}
                        />


                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchLibrary}
                            >
                                Search
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="col-md-6">
                    <h4>Employees List</h4>

                    <ul className="list-group">
                        {employees &&
                            employees.map((employee, index) => (
                                <li value={index} > {employee.name} </li>
                            ))}
                    </ul>


                </div>

            </div>
        );
    }

}