import React, { Component } from 'react';
import {Route, Routes , Link} from 'react-router-dom';

import './App.css';
import About from './components/About.js';
import Home from './components/Home.js';
import Details from './components/Details';
import Profile from './components/Profile';
import Author from './components/Author';
import AddAuthor from './components/AddAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import Book from './components/Book';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import Voila from './components/voila';
import Library from './components/Library';
import AddLibrary from './components/AddLibrary';
import UpdateLibrary from './components/UpdateLibrary';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeLibrary from './components/EmployeeByLibrary';
import EmployeeList from './components/EmployeeList';

export default class App extends Component {
  render(){
   
    return(
    <div>
<nav className="navbar navbar-expand-lg bg-light">
{/* <nav className="navbar navbar-expand navbar-light  bg-light " > */}
          <a href="/" className="navbar-brand">
            Wassim Khazri
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/voila" className="nav-link">
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/book" className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/author" className="nav-link">
                Authors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/library" className="nav-link">
                Libraries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/employee" className="nav-link">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/employeelibrary" className="nav-link">
                EmployeeByLibrary
              </Link>
            </li>
          </div>
        </nav>
   
<Routes>

 {/* Main page    */}
<Route path="/" exact element={<Home/>}/>
<Route path="/about" exact element={<About/>}/>
<Route path="/details/:id" exact element={<Details/>}/>
<Route path="/profile" exact element={<Profile/>}/>

{/* Book */}
<Route path="/book/*" exact element={<Book/>}/>
<Route path="/add-book/" exact element = {<AddBook/>}></Route>
<Route path="/update-book/:id" exact element = {<UpdateBook/>}></Route>

 {/* Author */}
<Route path="/author/*" exact element={<Author/>}/>
<Route path="/add-author/" exact element = {<AddAuthor/>}></Route>
<Route path="/update-author/:id" exact element = {<UpdateAuthor/>}></Route>


{/* Library */}
<Route path="/library/*" exact element={<Library/>}/>
<Route path="/add-library/" exact element = {<AddLibrary/>}></Route>
<Route path="/update-library/:id" exact element = {<UpdateLibrary/>}></Route>

{/* Employee */}
<Route path="/employee/*" exact element={<Employee/>}/>
 <Route path="/add-employee/" exact element = {<AddEmployee/>}></Route>
<Route path="/update-employee/:id" exact element = {<UpdateEmployee/>}></Route> 

{/* Exemple */}
<Route path="/voila" element={<Voila />} />
<Route path="/employeelibrary" element={<EmployeeLibrary />} />
<Route path = "/view-employee/:id" exact element = {<EmployeeList/>}></Route>

</Routes>

</div> )
  }
 
 }




