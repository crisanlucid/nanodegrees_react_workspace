import React from 'react';
import logo from './logo.svg';
import './App.css';

import CreateItem from './CreateItem';
import DeleteLastItem from './DeleteLastItem';
import ItemsList from './ItemsList';

class App extends React.Component {
  state = {
    items: [],
  };

  handleAddItem = newItem => {
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));
  };

  handleDeleteLastItem = event => {
    console.log('clicked')
    this.setState(prevState => ({ items: prevState.items.slice(0, -1) }));//previousState need to be modified
  };


  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
    {/* CreateItem */}
       <CreateItem onAddItem={this.handleAddItem}/>
	{/*deleteItem */}
        <DeleteLastItem 
			onDeleteLastItem={this.handleDeleteLastItem}
			buttonDisabled={this.noItemsFound}
		/>
	{/*ItemsList*/}
        <ItemsList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
