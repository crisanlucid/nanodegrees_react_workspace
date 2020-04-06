import React, { Component } from "react";
import PropTypes from "prop-types";
import MessageList from "./MessageList";
import AddMessage from "./AddMessage";

class Chat extends Component {
  handleAddMessage = message => {
    // console.log("call callback from parent ...");
    this.props.onAddMessage(this.props.username, message);
  };

  render() {
    const { username, messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>
        {/* show all the messages  */}
        <MessageList username={username} messages={messages} />

        {/* create a new message */}
        <AddMessage onAddMessage={this.handleAddMessage} />
      </div>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  onAddMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
};

export default Chat;
