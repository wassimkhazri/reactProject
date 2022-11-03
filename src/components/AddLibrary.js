import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
// import "./AddLibrary.css";
const url = "http://localhost:9000/api/addLibrary";
const url1 = "http://localhost:9000/api/library";
export default class AddLibrary extends Component {
    constructor(props){
        super(props);
        this.state={
            library:{
                name:"",
                adress:""
            }
        }
    }
    handleName = (e) => {
        this.setState({
            library: {
                ...this.state.library,
                name:e.target.value
            }
        })
    }
    handleAdress = (e) => {
        this.setState({
            library: {
                ...this.state.library,
                adress:e.target.value
            }
        })
    }
    handleSubmit = () => {
        axios.post(url, this.state.library).then((response) => axios.get(url1)
        )

    }
    getName() {
        // if(this.state.id === '_add'){
        return <h3 className="text-center">Add Library</h3>
        // }else{
        //     return <h3 className="text-center">Update Author</h3>
        // }
    }
    render() {
        return (
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
                                    <input placeholder="Name" name="name" className="form-control" required
                                        value={this.state.library.name} onChange={this.handleName} />
                                </div>
                                <div className="form-group">
                                    <label> Adress: </label>
                                    <input placeholder="Adress" name="adress" className="form-control" required
                                        value={this.state.library.adress} onChange={this.handleAdress} />
                                </div>
                                <br />
                                <Link style={{ marginLeft: "12px" }} to="/library" className="btn btn-outline-primary" onClick={this.handleSubmit}>Send</Link>
                                <Link className="btn btn-outline-danger mx-2" style={{ marginLeft: "12px" }} to="/library">Cancel</Link>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}