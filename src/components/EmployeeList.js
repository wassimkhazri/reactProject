import axios from "axios";
import { Component } from "react";


// const url = "http://localhost:9000/api/libraries/{2}/employees";
export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            id: this.props.match.params.id,
            employee: {
                id: null,
                name: undefined,
                adress: undefined,
                cin: 0
                // ,
                // library:{
                //     id:null,
                //     name:"",
                //     adress:""
                // }
            }
        }
    }

    componentDidMount() {
        const url = `http://localhost:9000/api/libraries/${this.state.id}/employees`;
        console.log(this.state.id);
        // EmployeeService.getEmployeeByLibrary(this.state.id)
        //     .then((response) => this.setState({ employees: response.data }));

        axios.get(url).then((response)=>this.setState({employees:response.data}))
    }
    render() {
        const { employees } = this.state;
        return (
            <div>
                <br></br>
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
                            {/* <button className="btn btn-outline-danger" onClick={() => axios.delete(url2 + item.id)} >Delete</button>
                            <Link style={{ marginLeft: "12px" }} className="btn btn-outline-warning" to={`/update-employee/${item.id}`}>Edit</Link> */}
                            
                            {/* <Link style={{ marginLeft: "12px" }} className="btn btn-outline-success" to={`/view-author/${item.id}`}>View</Link> */}
                            {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewAuthor(item.id)} className="btn btn-info">View </button> */}
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}