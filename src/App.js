import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {

  constructor() {
    super();
    this.state = {
      
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

    render() {
      const { monsters, searchField } = this.state; // same as const monsters = this.state.monsters,const searchfield = this.state.searchField.
      const filterMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      return (
        <div className="App">
        <h1>Monsters Rolodex</h1>
          <SearchBox
          placeholder = 'search Monsters'
            handleChange={e => {
              this.setState({ searchField: e.target.value},
                () => console.log(this.state))}
              }
          />
          <CardList monsters ={filterMonsters} />
        </div>         
      );
    }
  }


export default App;


