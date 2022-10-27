import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";



const url = "http://localhost:9000/api/addAuthor";
const url1 = "http://localhost:9000/api/author";
export default class AddAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {
                name: "",
                adress: "",
                phonenumber: 0
            }

        }

    }
    handleName = (e) => {
        this.setState({
            author: {
                ...this.state.author,
                name: e.target.value
            }
        })
    }
    handleAdress = (e) => {
        this.setState({
            author: {
                ...this.state.author,
                adress: e.target.value
            }
        })
    }
    handlePhonenumber = (e) => {
        this.setState({
            author: {
                ...this.state.author,
                phonenumber: e.target.value
            }
        })
    }
    handleSubmit = () => {
        axios.post(url, this.state.author).then((response) => axios.get(url1)
        )

    }
    componentDidUpdate() {
    }
    getName() {
        // if(this.state.id === '_add'){
        return <h3 className="text-center">Add Author</h3>
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
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.author.name} onChange={this.handleName} />
                                </div>
                                <div className="form-group">
                                    <label> Adress: </label>
                                    <input placeholder="Adress" name="adress" className="form-control"
                                        value={this.state.author.adress} onChange={this.handleAdress} />
                                </div>
                                <div className="form-group">
                                    <label> Phone Number: </label>
                                    <input placeholder="Phone Number" name="phonenumber" className="form-control"
                                        value={this.state.author.phonenumber} onChange={this.handlePhonenumber} />
                                </div>
                                <br />
                                <Link style={{ marginLeft: "12px" }} to="/author" className="btn btn-outline-primary" onClick={this.handleSubmit}>Send</Link>
                                <Link className="btn btn-outline-danger mx-2" style={{ marginLeft: "12px" }} to="/author">Cancel</Link>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )

    }

}