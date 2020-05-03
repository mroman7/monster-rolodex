import React, { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monster: [],
      SearchField: ''
    }
  }

  //react lifecycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json() )
      .then(user => this.setState({ monster: user }));
  }

  handleChange = (e) => {
    this.setState({ SearchField: e.target.value });
  }

  render(){

    // destructure our state data
    const { monster, SearchField } = this.state;
    /* 
      filter() method work as a map() method where it takes an array and accepts callback where it return a new array 

      include() method is used to check whether this values in "included" in this array or not and return true or false
    */
    const filteredMonster = monster.filter(monster => 
      monster.name.toLowerCase().includes(SearchField.toLowerCase())  
    );

    return(      
      <div className="App">
         <h1>Monser Roledex</h1>
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        /> 
        <CardList monster={ filteredMonster } />
    </div>
    )
  }
}

export default App;
