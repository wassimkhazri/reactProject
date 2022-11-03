
import axios from "axios";

import { Component } from "react";
import { Link } from "react-router-dom";
 import BookService from "../services/BookService";

 const url = "http://localhost:9000/api/authors/15/tags";
// const url = "http://localhost:9000/api/addBook";
// const url1 = "http://localhost:9000/api/books";
const url1 = "http://localhost:9000/api/tags";
const url2 = "http://localhost:9000/api/authors";
export default class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            tag: {
                name: "",
                // page: 0,
                author: {
                    id:null,
                    name:"",
                    adress:"",
                    phonenumber:0
                }
            }
        }
    }
    componentDidMount() {
        axios.get(url2).then((response) => this.setState({ authors: response.data }))
    }
    handleName = (e) => {
        this.setState({
            tag: {
                ...this.state.tag,
                name: e.target.value
            }
        })

    }
    // handlePage = (e) => {
    //     this.setState({
    //         book: {
    //             ...this.state.book,
    //             page: e.target.value
    //         }
    //     })
    // }
    handleAuthor = (e) => {
        this.setState({
            tag: {
                ...this.state.tag,
                author:this.state.authors[e.target.value]
            }
        })

    }

    // handleSubmit=()=>{
    //    BookService.createBook(this).then((response) => axios.get(url1));

    // }
    // handleSubmit = () => {
    //    // const url = `http://localhost:9000/api/authors/${this.state.tag.author.id}/tags`;
    //     axios.post(url, this.state.tag).then((response) => axios.get(url1)
    //     );

    // }
    handleSubmit=()=>{
        const url = `http://localhost:9000/api/authors/${this.state.tag.author.id}/tags`;
        axios.post(url, this.state.tag).then((response)=>axios.get(url1))
    }
    getName = () => {
        return <h3 className="text-center">Add Book</h3>
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
                                        value={this.state.tag.name} onChange={this.handleName} />
                                </div>
                                {/* <div className="form-group">
                                    <label> Page: </label>
                                    <input placeholder="Page" name="page" className="form-control"
                                        value={this.state.book.page} onChange={this.handlePage} />
                                </div> */}
                                <div className="form-group">
                                    <label> Author: </label>
                                    <select  className="form-select form-select-lg mb-3"   style={{marginLeft:"12px"}}
                                    
                                    value={this.state.value} 
                                    onChange={this.handleAuthor} >
                                    <option selected>Open this select menu</option>
                                    {this.state.authors.map((author,index) => (
                                    <option value={index}>{author.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <br />
                                <Link style={{ marginLeft: "12px" }} to="/book" className="btn btn-outline-primary" onClick={this.handleSubmit}>Send</Link>
                                <Link className="btn btn-outline-danger mx-2" style={{ marginLeft: "12px" }} to="/book">Cancel</Link>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}