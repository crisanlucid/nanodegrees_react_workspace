
import React, {Component} from 'react';
import Movie from './Movie';

class Dashboard extends Component {
  constructor(props){
  	super(props);
    this.usersByMovie = {};
    const listUsers = {};
    const {profiles, users} = this.props;
     
    Object.keys(users).forEach((key) => {
      const {id, name} = users[key];
      listUsers[id] = name;
    })

    console.log(listUsers);
    profiles.forEach((profile, key) => {
      const movieID = profile.favoriteMovieID;
      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(listUsers[profile.userID]);
      } else {
        this.usersByMovie[movieID] = [listUsers[profile.userID]];
      }
    });
    
  }
  render() {
    const {movies} = this.props;
    
    return (
      <div>
        {Object.keys(movies).map(id => {
    		return (<Movie title={movies[id].name} usersByMovie={this.usersByMovie[id] || []} key={"movie_" + id}/>)
    	})}
        
      </div>
    );
  }
}

export default Dashboard;
