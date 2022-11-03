import axios from "axios";
import { Component } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import BookService from "../services/BookService";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";

const url ="http://localhost:9000/api/books";
const url1 ="http://localhost:9000/api/deleteBook/";

export default class Tag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            tag: {
                id: null,
                name: undefined
                
              
            }
        }
    }
componentDidMount(){
    BookService.getBooks().then((response) => this.setState({ books:response.data }))
}
// componentDidUpdate() {

//     BookService.getBooks().then((response) => this.setState({ books:response.data }))
// }
deleteBook=()=>{
        axios.get(url).then((response) => this.setState({ authors: response.data }))
}
    render() {
        return (
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">

                            <Routes>
                                <Route path="/add-book/_add" exact element={<AddBook />}></Route>
                                <Route path="/update-book/:id" exact element={<UpdateBook />}></Route>
                            </Routes>
                            <h2 className="text-center m-4">Books List</h2><br />
                            <Link className="col-md-3 offset-md-1 border rounded  mt-2 shadow btn btn-outline-success" to="/add-book">Add New Book</Link>
                            <br /><br />
                            <table className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
                                <tr>
                                    <th>Name</th>
                                    <th>Page Number</th>
                                    <th></th>
                                </tr>
                                {this.state.books.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.page}</td>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={() => axios.delete(url1 + item.id)} >Delete</button>
                                            <Link style={{ marginLeft: "12px" }} className="btn btn-outline-warning" to={`/update-book/${item.id}`}>Edit</Link>
                                           
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