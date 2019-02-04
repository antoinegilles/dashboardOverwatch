import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

gamerTag = null;

  constructor(props) {
    super(props);
    this.state = {value: '',value2:"us",value3:"xbl",json:''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeRegion = this.handleChangeRegion.bind(this);
    this.handleChangePlateform = this.handleChangePlateform.bind(this);
    this.handleSubmitTest = this.handleSubmitTest.bind(this);

  }

  handleChangeName(event) {
    this.setState({value: event.target.value});
  }
  handleChangeRegion(event) {
    this.setState({value2: event.target.value});
  }
  handleChangePlateform(event) {
    this.setState({value3: event.target.value});
  }

  handleSubmitTest(event) {
    event.preventDefault();

    const overwatch = require('overwatch-api');
    const platform = this.state.value3;
    const reg = this.state.value2;
    const tag =  this.state.value;
    console.log(platform + " " + reg)

  
    overwatch.getProfile(platform, reg, tag, (err, json) => {
      if (err) console.error(err);
      else this.setState(json)
      console.log(this.state)
    });  
  }
 
 /*
  getProfiles(name,region,plateform){
  const overwatch = require('overwatch-api');
  const platform = plateform.state.platform;
  const reg = region.target.region;
  const tag =  name.target.name;

  overwatch.getProfile(platform, reg, tag, (err, json) => {
    if (err) console.error(err);
    else this.setState(json)
    console.log(json)
  });
}

handleChangeName(event) {
  this.setState({name: event.target.value});
}
handleChangeRegion(event) {
  this.setState({reg: event.target.value});
}
handleChangePlateform(event) {
  this.setState({tag: event.target.value});
}
*/

  render() {
  
  

    return (
      <div className="App">
    
    <form onSubmit={this.handleSubmitTest}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChangeName} />
        </label>
      
        <label>
          Select the Plateform:
          <select value={this.state.value3} onChange={this.handleChangePlateform}>
            <option value="pc">pc</option>
            <option value="xbl">xbl</option>
            <option value="psn">psn</option> 
          </select>
        </label>       
        
        <label>
          Select the Region
          <select value={this.state.value2} onChange={this.handleChangeRegion}>
            <option value="us">us</option>
            <option value="eu">eu</option>
            <option value="kr">kr</option>
            <option value="cn">cn</option>
            <option value="global">global</option>
          </select>
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
