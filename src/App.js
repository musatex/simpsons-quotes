import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
//import Quote from "./Quote";
import Lamp from "./Lamp";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
    };
  } 
  homerWorking = () => {
    this.setState({working: !this.state.working });   
  };
  render(){
    
    return (
      
      <div className="App">
        <header className="App-header">
          {this.state.working ?
          <img src={logo} className= "App-logo-work" alt="logo-working"/>
          :
          <img src={logo} className="App-logo" alt="logo" /> 
          }
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.homerWorking}
        className ={"Bouton-homer"}>
        </button>
        <Quotes/>
        <Lamp on={true}>
        </Lamp>
          

      </div>
      );
    }
  }



export default App;
