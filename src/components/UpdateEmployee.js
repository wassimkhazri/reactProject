import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateEmployee(){
let navigate = useNavigate();

const {id} = useParams();

const [employee, setEmployee] = useState({
    name:"",
    adress:"",
    cin:0,
    library:""

});

const {name, adress, cin, library} = employee;

const onInputChange = (e) => {
    setEmployee({
         ...employee,
          [e.target.name]: e.target.value });
  };
  const handleLibrary = (e) => {
    setEmployee({
      ...employee,
      [e.target.author.name]: e.target.value
    });
  };
//componentDidMount()
  useEffect(() => {
    loadEmployee();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9000/api/employees/${id}`, employee);
    navigate("/employee");
  };

  const loadEmployee= async () => {
    const result = await axios.get(`http://localhost:9000/api/employees/${id}`);
    setEmployee(result.data);
  };


    return(
  <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h2 className="text-center m-4">Edit Employee</h2>

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
            CIN Number:
          </label>
          <input
            type={"number"}
            className="form-control"
            placeholder="Enter your cin number"
            name="cin"
            value={cin}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
              <label htmlFor="Library" className="form-label">
                Library:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Library Name"
                name="library"
                value={library}
                onChange={(e) => handleLibrary(e)}
              />
              {/* <select className="form-select" style={{ marginLeft: "12px" }}

                value={this.state.value}
                onChange={this.handleLibrary}>
                <option selected>Open this select menu</option>
                {this.state.libraries.map((library) => (
                  <option value={library.value}>{library.name}</option>
                ))}
              </select> */}
            </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
        <Link className="btn btn-outline-danger mx-2" to="/employee">
          Cancel
        </Link>
      </form>
    </div>
  </div>
</div>
);

}