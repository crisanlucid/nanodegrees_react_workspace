import React, {Component, Fragment} from 'react';

class Movie extends Component {
  render() {
    const {usersByMovie, title} = this.props;
    return (
      <Fragment>
        <h2>{title}</h2>
        {usersByMovie.length ? (
          <Fragment>
            <p>Liked By:</p>
            <ul>
      			{usersByMovie.map((fan, i) => (<li key={i}>{fan}</li>))}
            </ul>
          </Fragment>
        ) : (
          <p> None of the current users liked this movie</p>
        )}
      </Fragment>
    );
  }
}
export default Movie;