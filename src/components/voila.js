import axios from 'axios';
import React, { Component } from 'react';
import Select from 'react-select';
import AuthorService from "../services/AuthorService";

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
  componentDidMount(){
    axios.get(url).then((response) => this.setState({ authors: response.data }))
    
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state.authors;

    return (
<Select
                
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.authors.map((item, index) => {
                    return (
                        <option key={item.id} children={item.children}>
                            {item.children}
                        </option>
                    );
                })}
    


        
    //   <Select
    //     value={selectedOption}
    //     onChange={this.handleChange}
    //     options={options}
      />
    );
  }
}