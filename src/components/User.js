import React, { Component } from 'react';
import PropTypes from 'prop-types'

class User extends Component {
    render() {

      //Destructing
      const {name, salary, age} = this.props;
      return(
        <div>
           <ul>
            <li>Name: {name}</li>
            <li>Salary: {salary}</li>
            <li>Age: {age}</li>
           </ul>
        </div>
      )
    }
  }


User.defaultProps = {
  name: "no info",
  salary: "no info",
  age: "no info",
}

User.propTypes ={
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  age : PropTypes.string.isRequired 
}

  export default User;

