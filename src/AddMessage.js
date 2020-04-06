import React, { Component } from "react";
import PropTypes from "prop-types";

class AddMessage extends Component {
  state = {
    text: ""
  };
  isDisabled = () => {
    //check is not empty the message
    return this.state.text === "";
  };

  handleInputChange = event => {
    //  console.log('change input...')
    const { value } = event.target;
    this.setState(() => ({ text: value }));
  };

  handleSubmit = event => {
    //disable submit and is not refresh the page
    event.preventDefault();
    // console.log('stop submit form...')
    this.props.onAddMessage(this.state.text);
    //clear the message after Send button
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        {/* a form is a Controlled Component with own state */}
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={this.handleInputChange}
            placeholder="Enter your message..."
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMessage.propTypes = {
  onAddMessage: PropTypes.func.isRequired
};

export default AddMessage;
