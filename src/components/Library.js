import axios from "axios";
import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddLibrary from "./AddLibrary";
import EmployeeList from "./EmployeeList";
import UpdateLibrary from "./UpdateLibrary";

const url = "http://localhost:9000/api/libraries";
// const url1 = "http://localhost:9000/api/addLibrary";
const url2 = "http://localhost:9000/api/libraries/";
export default class Library extends Component{
constructor(props){
    super(props);
    this.state={
        employees:[],
        libraries:[],
        library:{
            name:undefined,
            adress:undefined

        }
    }
}
componentDidMount(){
    axios.get(url).then((response)=>this.setState({libraries:response.data}))
}
componentDidUpdate() {

    axios.get(url).then((response) => this.setState({ libraries: response.data }))
}
shouldComponentUpdate() {
    return true
}

componentWillUnmount() {

}
handleName = (e)=>{
    this.setState({
        library:{
            ...this.state.library,
            name:e.target.value
        }
    })
}
handleAdress=(e)=>{
    this.setState({
        library:{
        ...this.state.library,
        adress: e.target.value
    }
    })
}
// componentDidUpdate() {

//     axios.get(url).then((response) => this.setState({ libraries: response.data }))
// }
// shouldComponentUpdate() {
//     return true
// }

// componentWillUnmount() {

// }
viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`);
}

editLibrary(id){
    this.props.history.push(`/add-library/${id}`);
}
render(){
    return(
        <div >
        <div  className="container">
<div className="row">
<div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">

          <Routes>
            <Route path="/add-library/_add" exact element={<AddLibrary/>}></Route>
            <Route path = "/update-library/:id" exact element = {<UpdateLibrary/>}></Route>
            <Route path = "/view-employee/:id" exact element = {<EmployeeList/>}></Route>
        </Routes>
        <h2 className="text-center m-4">Libraries List</h2><br />
        <Link className="col-md-3 offset-md-1 border rounded  mt-2 shadow btn btn-outline-success" to="/add-library">Add New Library</Link>
        <br /><br />
        <table className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
            <tr>
                <th>Name</th>
                <th>Adress</th>
                <th></th>
            </tr>
            {this.state.libraries.map((item, index) =>
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.adress}</td>  
                    <td>
                    <button className="btn btn-outline-danger" onClick={() => axios.delete(url2 + item.id)} >Delete</button>
                    <Link style={{ marginLeft: "12px" }} className="btn btn-outline-warning" to={`/update-library/${item.id}`}>Edit</Link>
                    <Link className="btn btn-outline-danger" onClick={() => this.viewEmployee(item.id)} >Employees</Link>
                    <Link to={`/view-employee/${item.id}`} style={{marginLeft: "10px"}}  className="btn btn-info">Employee List </Link>
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