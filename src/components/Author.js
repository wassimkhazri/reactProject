import axios from "axios";
import { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AddAuthor from "./AddAuthor";
import "./Author.css";
import UpdateAuthor from "./UpdateAuthor";

const url = "http://localhost:9000/api/authors";
const url1 = "http://localhost:9000/api/addAuthor";
const url2 = "http://localhost:9000/api/authors/";
export default class Author extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            author: {
                id: null,
                name: undefined,
                adress: undefined,
                phonenumber: 0
            },
         

        }
    }


   
    componentDidMount() {
        axios.get(url).then((response) => this.setState({ authors: response.data }))
    }

    handleName = (e) => {
        this.setState({
            author: {
                ...this.state.author,
                name: e.target.value
            }
        })
    }
    deleteAuthor = () => {

        axios.get(url).then((response) => this.setState({ authors: response.data }))

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
    handleSubmit = (e) => {
      
        axios.post(url1, this.state.author)
        
    }
    componentDidUpdate() {

        axios.get(url).then((response) => this.setState({ authors: response.data }))
    }
    shouldComponentUpdate() {
        return true
    }

    componentWillUnmount() {

    }
    editAuthor(id){
        this.props.history.push(`/add-author/${id}`);
    }
    viewAuthor(id){
        this.props.history.push(`/view-author/${id}`);
    }
   
    render() {
        return (
            <div >
                <div  className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">

                  <Routes>
                    <Route path="/add-author/_add" exact element={<AddAuthor/>}></Route>
                    <Route path = "/update-author/:id" exact element = {<UpdateAuthor/>}></Route>
                </Routes>
                <h2 className="text-center m-4">Authors List</h2><br />
                <Link className="col-md-3 offset-md-1 border rounded  mt-2 shadow btn btn-outline-success" to="/add-author">Add New Author</Link>
                <br /><br />
                <table className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
                    <tr>
                        <th>Name</th>
                        <th>Adress</th>
                        <th>Phone Number</th>
                        <th></th>
                    </tr>
                    {this.state.authors.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.adress}</td>
                            <td>{item.phonenumber}</td>   
                            <td>
                            <button className="btn btn-outline-danger" onClick={() => axios.delete(url2 + item.id)} >Delete</button>
                            <Link style={{ marginLeft: "12px" }} className="btn btn-outline-warning" to={`/update-author/${item.id}`}>Edit</Link>
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