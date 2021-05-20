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
      searchField: '',
      title: ''
    };
   // this.handleChange=this.handleChange.bind(this);
  }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
    }
    onSearchChange = (event) => {
      this.setState({
        searchField: event.target.value,
        title: event.target.value
      });
    };
    handleChange =(e)=>{
      this.setState({searchField:e.target.value})
    }

    render() {
      const { monsters, searchField, title } = this.state; 
      // same as const monsters = this.state.monsters,const searchfield = this.state.searchField.
      const filterMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
        <div className="App">
        <h1> {title}</h1>
          <SearchBox 
          placeholder = " Search Monster"
          handleChange={this.handleChange}
           />
          <CardList monsters ={filterMonsters} />
        </div>         
      );
    }
  }
  // coment(
  //   placeholder = 'search Monsters',
  //     handleChange={e => {
  //       this.setState({ 
  //         searchField: e.target.value, 
  //         title: e.target.value},
  //         () => console.log(this.state))}
  //       }
  //   )

export default App;


