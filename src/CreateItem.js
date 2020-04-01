import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
form in React is Controlled Component (has state) not Stateless Component
*/
class CreateItem extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  inputIsEmpty = () => {
  	return this.state.value === '';
  }

  addItem = event => {
    //prevent submit form
    event.preventDefault();
    //call the parent function
    this.props.onAddItem(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

CreateItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};


export default CreateItem;