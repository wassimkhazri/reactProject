import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";


//const url2 = "http://localhost:9000/api/tags";
// const url = "http://localhost:9000/api/authors";
const url = "http://localhost:9000/api/addAuthor";
const url1 = "http://localhost:9000/api/authors";
const url2 = "http://localhost:9000/api/books";
export default class AddAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            author: {
                name: "",
                adress: "",
                phonenumber: 0,
                book: {
                    id: null,
                    name: "",
                    page:0
                }
            }

        }

    }
    componentDidMount() {
         axios.get(url2).then((response) => this.setState({ books: response.data }))
        // axios.get(url2).then((response) => this.setState({ tags: response.data }))
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
    handleBook = (e) => {
        console.log(e.target.value)
        this.setState({
            author: {
                ...this.state.author,
                book: this.state.books[e.target.value]
            }
        })
    }
    // handleTag = (e) => {
    //     console.log(e.target.value)
    //     this.setState({
    //         author: {
    //             ...this.state.author,
    //             tag: this.state.tags[e.target.value]
    //         }
    //     })
    // }
    handleSubmit = () => {
        axios.post(url, this.state.author).then((response) => axios.get(url)
      // .then(axios.post(`http://localhost:9000/api/authors/${15}/tags`))
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
                                <div className="form-group">
                                    <label> Book: </label>
                                    {/* <select options={ this.state.libraries } name="library_id"  value={this.state.employee.library_id} 
                                    onChange={(e)=>this.setState({employee:{library_id:e.value}})} /> */}

                                    <select  className="form-select form-select-lg mb-3"   style={{marginLeft:"12px"}}
                                    
                                    value={this.state.value} 
                                    onChange={this.handleBook} >
                                    <option selected>Open this select menu</option>
                                    {this.state.books.map((book,index) => (
                                    <option value={index}>{book.name}</option>
                                        ))}
                                    </select>

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