import React, { Component } from "react";
import PropTypes from "prop-types";
import User from './User';

class UserList extends Component {
  state = {
    showGamesPlayed: false,
  };

  toogleGamesPlayed = () => {
    //update state
    //console.log("toggle btn...");
    this.setState(prevState => ({
      showGamesPlayed: !prevState.showGamesPlayed,
    }))
  };
  render() {
    const { users } = this.props;

    //JSX for button that toogles and show/hide the player's score
    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toogleGamesPlayed}>
          {`${this.state.showGamesPlayed ? 'Hide' : 'Show' } the Number of Games Played`}
        </button>
      </div>
    );

    return (
      <div>
        <h1>Users</h1>
        {/* create a button with a custom message */}
        {users && users.length > 0 ? gamesPlayedButton : null}
        {/* a list with User Components*/}
        <ol>
          {users.map((user) => (
            <User key={user.username} user={user} showGamesPlayed={this.state.showGamesPlayed} />
          ))}
        </ol>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
