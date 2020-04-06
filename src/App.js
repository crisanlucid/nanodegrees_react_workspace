import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Chat from "./Chat";
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: "Emma" }, { username: "Lucian" }];


class App extends Component {
  state = {
    messageList: []
  };
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  handleAddMessage = (username, message) => {
    console.log("[parent] create a new message...");

    const newMessage = { username, text: message }; //es6 shortcut {username:username} => {username}
    //udate state, but React is doing shallow compare only for lvl1 nested object
    //update the previous array with old data + new message
    this.setState(prevState => ({
      messageList: [...prevState.messageList, newMessage]
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map((user, index) => (
            <Chat
              key={user.username}
              username={user.username}
              messages={this.state.messageList}
              onAddMessage={this.handleAddMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
