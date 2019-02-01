import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

gamerTag = null;

  constructor(props) {
    super(props);
    this.state = {};

    const overwatch = require('overwatch-api');
    const platform = 'pc';
    const region = 'us';
    const tag =  "Calvin-1337";
  
    overwatch.getProfile(platform, region, tag, (err, json) => {
      if (err) console.error(err);
      else this.setState(json)
      console.log(json)
    });
  
}

 


handleSubmit(event) {
  event.preventDefault();

}


  render() {
    return (
      <div className="App">
    
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="surname"  onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Username : {this.state.username}
          </p>
          <p>
            Level : {this.state.level}
          </p>
          <img alt="logo"
            src={this.state.portrait}
            />
         
          
        </header>
      </div>
    );
  }
}

export default App;
