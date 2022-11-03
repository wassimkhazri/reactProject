import axios from "axios";
import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const url = "http://localhost:9000/api/employees";
const url1 = "http://localhost:9000/api/addEmployee";
const url2 = "http://localhost:9000/api/employees/";
export default class Employee extends Component{
constructor(props){
super(props);
this.state={
    employees:[],
    employee:{
       id: null,
       name:undefined,
       adress:undefined,
       cin:0
    }
}
}
componentDidMount(){
  axios.get(url).then((response)=>this.setState({employees:response.data}))
}
// componentDidUpdate() {

//     axios.get(url).then((response) => this.setState({ employees: response.data }))
// }
shouldComponentUpdate() {
    return true
}

componentWillUnmount() {

}
render(){
    return(
        <div >
                <div  className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">

                  {/* <Routes>
                    <Route path="/add-employee/_add" exact element={<AddEmployee/>}></Route>
                    <Route path = "/update-employee/:id" exact element = {<UpdateEmployee/>}></Route>
                </Routes> */}
                <h2 className="text-center m-4">Employees List</h2><br />
                <Link className="col-md-3 offset-md-1 border rounded  mt-2 shadow btn btn-outline-success" to="/add-employee">Add New Employee</Link>
                <br /><br />
                <table className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
                    <tr>
                        <th>Name</th>
                        <th>Adress</th>
                        <th>CIN Number</th>
                        <th></th>
                    </tr>
                    {this.state.employees.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.adress}</td>
                            <td>{item.cin}</td>   
                            <td>
                            <button className="btn btn-outline-danger" onClick={() => axios.delete(url2 + item.id)} >Delete</button>
                            <Link style={{ marginLeft: "12px" }} className="btn btn-outline-warning" to={`/update-employee/${item.id}`}>Edit</Link>
                            {/* <Link style={{ marginLeft: "12px" }} className="btn btn-outline-success" to={`/view-author/${item.id}`}>View</Link> */}
                            {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewAuthor(item.id)} className="btn btn-info">View </button> */}
                            </td>
                        </tr>
                    )}
                </table>
                <br /><br />
                </div> 
                </div> 
               </div> 
            </div>
    )
}
}