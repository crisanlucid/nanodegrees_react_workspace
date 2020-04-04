import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./AddUser";
import UserList from './UserList';
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    userList: [],
  };

  handleCreateUser = (user) => {
    //update user with extra info
    user.noGamesPlayed = 0
    //console.log("create user...");
    this.setState(prevState => ({
    	userList: [...prevState.userList, user]//take old data and merge with new user
    }))
  };
  render() {
    const {userList} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        {/* Form - Create User */}
        <AddUser
          onAddUser={this.handleCreateUser}
          users={userList}
        />
        {/* show List of Users */}
 		<UserList users={userList}/>
      </div>
    );
  }
}

export default App;
