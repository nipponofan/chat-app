import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact'


const user = {
  avatar : "https://randomuser.me/api/portraits/women/4.jpg",
  name : "Eva Fields",
  online : false
}

const user2 = {
  avatar : "https://randomuser.me/api/portraits/women/24.jpg",
  name : "Heat Silva",
  online : true
}

const user3 = {
  avatar : "https://randomuser.me/api/portraits/men/79.jpg",
  name : "Eric Peck",
  online : true
}

class App extends Component {
  render() {
    return (
      <div className="App">
<Contact {...user}/>
<Contact {...user2}/>
<Contact {...user3}/>
      </div>
    );
  }
}

export default App;
