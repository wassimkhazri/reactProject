
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function UpdateBook() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [book, setBook] = useState({
    name: "",
    page: 0,
  });

  const { name, page} = book;

  const onInputChange = (e) => {
    setBook({
         ...book,
          [e.target.name]: e.target.value });
  };
//componentDidMount()
  useEffect(() => {
    loadBook();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
     await axios.put(`http://localhost:9000/api/books/${id}`, book);
    navigate("/book");
  };

  const loadBook= async () => {
     const result = await axios.get(`http://localhost:9000/api/bookById/${id}`);
    setBook(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Book</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Page" className="form-label">
                Page:
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter page number"
                name="page"
                value={page}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/book">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}