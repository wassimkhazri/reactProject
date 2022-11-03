import axios from "axios";
// import e from "cors";
import { Component } from "react";
import { Link } from "react-router-dom";


  //const url = "http://localhost:9000/api/addEmployee";


const url1 = "http://localhost:9000/api/employees";
const url2 = "http://localhost:9000/api/libraries";
export default class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            libraries: [],
            employee: {
                name: "",
                adress: "",
                cin: 0,
                library:{
                    id:null,
                    name:"",
                    adress:""
                }
            }

        }

    }

    componentDidMount() {
        axios.get(url2).then((response) => this.setState({ libraries: response.data }))
    }
    handleName=(e)=>{
        this.setState({
            employee:{
                ...this.state.employee,
                name:e.target.value
            }
        })
    }
    handleAdress=(e)=>{
        this.setState({
            employee:{
                ...this.state.employee,
                adress:e.target.value
            }
        })
    }
    handleCin=(e)=>{
        this.setState({
            employee:{
                ...this.state.employee,
                cin:e.target.value
            }
        })
    }
    handleLibrary = (e) => {
        console.log(e.target.value)
        this.setState({
            employee: {
                ...this.state.employee,
                library: this.state.libraries[e.target.value]
            }
        })
    }
    componentDidUpdate() {

    }
    getName(){
        return <h3 className="text-center">Add Employee</h3>
    }
    handleSubmit=()=>{
        const url = `http://localhost:9000/api/libraries/${this.state.employee.library.id}/employees`;
        axios.post(url, this.state.employee).then((response)=>axios.get(url1))
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                            {
                                this.getName()
                            }
                            <form>

                                <div className="form-group">
                                    <label> Name: </label>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.employee.name} onChange={this.handleName} />
                                </div>
                                <div className="form-group">
                                    <label> Adress: </label>
                                    <input placeholder="Adress" name="adress" className="form-control"
                                        value={this.state.employee.adress} onChange={this.handleAdress} />
                                </div>
                                <div className="form-group">
                                    <label> CIN Number: </label>
                                    <input placeholder="CIN Number" name="cin" className="form-control"
                                        value={this.state.employee.cin} onChange={this.handleCin} />
                                </div>
                                <div className="form-group">
                                    <label> Library: </label>
                                    {/* <select options={ this.state.libraries } name="library_id"  value={this.state.employee.library_id} 
                                    onChange={(e)=>this.setState({employee:{library_id:e.value}})} /> */}

                                    <select  className="form-select form-select-lg mb-3"   style={{marginLeft:"12px"}}
                                    
                                    value={this.state.value} 
                                    onChange={this.handleLibrary} >
                                    <option selected>Open this select menu</option>
                                    {this.state.libraries.map((library,index) => (
                                    <option value={index}>{library.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <br />
                                <Link style={{ marginLeft: "12px" }} to="/employee"  className="btn btn-outline-primary" onClick={this.handleSubmit}>Send</Link>
                                <Link className="btn btn-outline-danger mx-2" style={{ marginLeft: "12px" }} to="/employee">Cancel</Link>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}