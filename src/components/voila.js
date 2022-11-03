import axios from 'axios';
import React, { Component } from 'react';


// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const url = "http://localhost:9000/api/authors";
export default class Voila extends Component {
  state = {
    authors: [],
    author: {
      id: null,
      name: undefined,
      adress: undefined,
      phonenumber: 0
    },
    selectedOption: null,
  };
  componentDidMount() {
    axios.get(url).then((response) => this.setState({ authors: response.data }))

  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    // const { selectedOption } = this.state.authors;
    // let options = this.state.authors.map(function (author) {
    //   return { value: author.id, label: author.name };
    // })
    return (
      <select className="form-select" 
        value={this.state.value}
        name={this.state.name}
        onChange={this.state.handleChange} // assigning the function, so it can be trigged with all argument
      >
        {
          this.state.authors.map((item, index) => {
            return <option value={index}>{item.name}</option>
          })
        }
      </select>
    );
  

  }
}


