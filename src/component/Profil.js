import React, { Component } from 'react';



class Profil extends Component {
gamerTag = null;

  constructor(props) {
    super(props);
    this.state={}
  }

render() {
    console.log(this.props)
    return (
    <div>
        <p> Profil du Joueur :  </p>
        <img src={this.props.data.portrait}/>
        <p> Nom : {this.props.data.username} </p>
        <p> Rang Compétitif : {this.props.competitive} </p>
        <p> Compétitions gagnées : {this.props.games.won} </p>
        <p> Compétitions perdues : {this.props.games.lost} </p>
    </div>  
    );
  }
}

export default Profil;
