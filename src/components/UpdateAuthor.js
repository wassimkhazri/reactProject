import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateAuthor() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [author, setAuthor] = useState({
    name: "",
    adress: "",
    phonenumber: 0,
  });

  const { name, adress, phonenumber } = author;

  const onInputChange = (e) => {
    setAuthor({
         ...author,
          [e.target.name]: e.target.value });
  };
//componentDidMount()
  useEffect(() => {
    loadAuthor();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9000/api/authors/${id}`, author);
    navigate("/author");
  };

  const loadAuthor= async () => {
    const result = await axios.get(`http://localhost:9000/api/authors/${id}`);
    setAuthor(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Author</h2>

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
              <label htmlFor="Adress" className="form-label">
                Adress:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="adress"
                value={adress}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Phone Number:
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your phone number"
                name="phonenumber"
                value={phonenumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/author">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}