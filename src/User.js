import React from 'react';
import PropTypes from 'prop-types';

/*
* Stateless Functional Component
*/

const User = ({user, showGamesPlayed}) => {
 return (<li>
          <p>{user.username} played {showGamesPlayed ? user.noGamesPlayed : '*'} games</p>
        </li>)
}

User.propTypes = {
	showGamesPlayed: PropTypes.bool.isRequired, 
  user: PropTypes.object.isRequired
}

export default User;