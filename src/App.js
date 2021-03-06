import React, { Component } from 'react';
import './App.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import Profil from './component/Profil';


class App extends Component {
gamerTag = null;

  constructor(props) {
    super(props);
    this.state = {
      response:[],
      competitiveRank:"",
      games:[],
      value: '',
      value2:"",
      value3:"",
      open: false,
      dataProfile:
      {games:
          {competitive:
              {won:""},
              quickplay:{won:""}}}, 
      spinner:true 
    };
  
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeRegion = this.handleChangeRegion.bind(this);
    this.handleChangePlateform = this.handleChangePlateform.bind(this);
    this.handleSubmitTest = this.handleSubmitTest.bind(this);
}
  
  // input
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  // input2
  handleChange2 = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose2 = () => {
    this.setState({ open: false });
  };

  handleOpen2 = () => {
    this.setState({ open: true });
  };


 // methodes
  handleChangeName(event) {
    this.setState({value: event.target.value});
  }
  handleChangeRegion(event) {
    this.setState({value2: event.target.value});
  }
  handleChangePlateform(event) {
    this.setState({value3: event.target.value});
  }

  async handleSubmitTest(event) {
    
    event.preventDefault();
    const platform = this.state.value3;
    const reg = this.state.value2;
    const tag =  this.state.value;
    console.log(reg + platform + tag)
    

    var elem = document.getElementById('logo');
    elem.style.animation = "App-logo-spin infinite 2s linear"
    
    


      axios.post('https://ovapi.herokuapp.com/'+platform+'/'+reg+'/'+tag+'', {
       
      })
      .then((res) => { 
        this.setState({response: res.data})
        this.setState({competitive: res.data.competitive.rank})
        this.setState({games: res.data.games.competitive})
        }
      )
      .then(() => 
        elem.style.animation = "App-logo-spin infinite 20s linear"
      )
      .then(()=> 
      console.log(this.state)
      )
      .catch((error) => {
        alert("Profil introuvable, vérifiez vos données")
        elem.style.animation = "App-logo-spin infinite 20s linear"
        return null
      })

      
  }

   handleClick = () => {
    this.setState({spinner :false})
   }

   changeStateSpinner = () => {
     console.log("je passe la ")
   }
  
  

  render() {
  
    return (
  <div className="App">
   <form id="conteneur" onSubmit={this.handleSubmitTest}>
 {/* Plateform */}      
    <FormControl className={App.formControl}>
      <InputLabel htmlFor="component-simple">Gamer Tag</InputLabel>
      <Input placeholder="FunnyAstro-2570" id="component-simple" type="text" value={this.state.value} onChange={this.handleChangeName} />
    </FormControl>

{/* Plateform */}   
       <FormControl className={App.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Plateform</InputLabel>
          <Select
            open={this.state.open2}
            onClose={this.handleClose2}
            onOpen={this.handleOpen2}
            value={this.state.value3} 
            onChange={this.handleChangePlateform}
            inputProps={{
              name: 'Platform',
              id: 'demo-controlled-open-select',
            }}
          >
          <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="pc">Pc</MenuItem>
            <MenuItem value="xbl">Xbl</MenuItem>
            <MenuItem value="psn">Psn</MenuItem>
          </Select>
        </FormControl>

{/* Region */}

       <FormControl id="Input2" className={App.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Region</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.value2} 
            onChange={this.handleChangeRegion}
            inputProps={{
              name: 'region',
              id: 'demo-controlled-open-select',
            }}
          >
          <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="us">Us</MenuItem>
            <MenuItem value="eu">Eu</MenuItem>
            <MenuItem value="kr">Kr</MenuItem>
            <MenuItem value="cn">Cn</MenuItem>
            <MenuItem value="global">Global</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" value="Submit" onClick={this.handleClick}>
        Valider
        </Button>
  </form>
  <header className="App-header">
    <img src="./LogoOv.png" id="logo" className="App-logo" alt="logoOverwatch" />
    <Profil data={this.state.response} competitive={this.state.competitive} games={this.state.games}></Profil>
  </header>
  
</div>
    );
  }
}

export default App;
