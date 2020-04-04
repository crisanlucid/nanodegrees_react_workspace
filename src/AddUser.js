import React, { Component } from "react";
import PropTypes from "prop-types";

class AddUser extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
    },
    userExists: false,
  };

  handleSubmit = (event) => {
    //console.log('submit form...');
    //prevent to submit the form
    event.preventDefault();

    //check if the user is unique
    const userExists = this.checkUserUnique(this.state.user.username);

    //if is not unique update callback onAddUser
    if (!userExists) this.props.onAddUser(this.state.user);

    //update the state
    this.setState({
      userExists,
    });
  };
  handleInputChange = (event) => {
    //console.log('on Change...')
    const { name, value } = event.target;
    //React is doing shallow render,
    //is compare only lvl1 for a nested object/array
    this.setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user, //lvl2
        [name]: value, //update object with dynamic props
      },
    }));
  };

  checkUserUnique = (newUsername) => {
    const { users } = this.props;
    //return new array if match with one of users from the list
    const userMatch = users.filter((user) => user.username === newUsername);

    return userMatch.length > 0; //found if true
  };
  isDisabled = () => {
    const { username, firstName, lastName } = this.state.user;
    return username === "" || firstName === "" || lastName === "";
  };
  render() {
    const { username, firstName, lastName } = this.state.user;
    return (
      <div>
        <h1>New User</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        {/* show Error */}
        {this.state.userExists ? (
          <p className="error">The username already exists.</p>
        ) : null}
      </div>
    );
  }
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUser;
