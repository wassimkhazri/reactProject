import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function UpdateLibrary(){
    let navigate = useNavigate();

    const { id } = useParams();
  
    const [library, setLibrary] = useState({
      name: "",
      adress: ""
    });
  
    const { name, adress } = library;
  
    const onInputChange = (e) => {
      setLibrary({
           ...library,
            [e.target.name]: e.target.value });
    };
  //componentDidMount()
    useEffect(() => {
      loadLibrary();
    }, []);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:9000/api/libraries/${id}`, library);
      navigate("/library");
    };
  
    const loadLibrary= async () => {
      const result = await axios.get(`http://localhost:9000/api/libraries/${id}`);
      setLibrary(result.data);
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit Library</h2>
  
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
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/library">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}