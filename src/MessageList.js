import React from "react";
import PropTypes from "prop-types";

import Message from "./Message";

// Stateless Functional Component
const MessageList = ({ messages, username }) => {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <Message
          key={`${username}_${index}`}
          message={message}
          username={username}
        />
      ))}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

export default MessageList;
