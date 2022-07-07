import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import NavScrollExample from './components/Navbar';

class App extends Component{
    render(){
      return(
        <div className='App'>
          <NavScrollExample title = "User App"/>
             <User
             name = "Aygun"
             salary = "2000$"
             age = '21'
             />

            <User
             name = "Aygun"
             salary = "2000$"
             age = '21'
             />
        </div>
      )
}

}


export default App;