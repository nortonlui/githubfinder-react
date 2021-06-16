import React from 'react';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
