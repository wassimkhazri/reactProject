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

{/* Exemple */}
<Route path="/voila" element={<Voila />} />

</Routes>

</div> )
  }
 
 }




