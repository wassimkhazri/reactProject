
import axios from "axios";

import { Component } from "react";
import { Link} from "react-router-dom";
// import BookService from "../services/BookService";

const url = "http://localhost:9000/api/addBook";
const url1 = "http://localhost:9000/api/book";
export default class AddBook extends Component{
constructor(props){
    super(props);
    this.state={
        book:{
            name:"",
            page:0
        }
    }
}
handleName=(e)=>{
    this.setState({
        book:{
            ...this.state.book,
            name: e.target.value
        }
    })

    }
handlePage=(e)=>{
    this.setState({
        book:{
            ...this.state.book,
            page:e.target.value
        }
    })
}
// handleSubmit=()=>{
//    BookService.createBook(this).then((response) => axios.get(url1));
  
// }
handleSubmit = () => {
    axios.post(url, this.state.book).then((response) => axios.get(url1)
    );

}
getName=()=>{
    return <h3 className="text-center">Add Book</h3>
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
                                value={this.state.book.name} onChange={this.handleName} />
                        </div>
                        <div className="form-group">
                            <label> Page: </label>
                            <input placeholder="Page" name="page" className="form-control"
                                value={this.state.book.page} onChange={this.handlePage} />
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