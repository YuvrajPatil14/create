import React, { Component } from 'react';
//import QRCode from 'qrcode';
import './App.css';
import Qr from './Qr.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', clicked:false };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
  }
 
  handleChange(event) {
    this.setState({ value: event.target.value });

  }

  handleClick(evenet) {
    evenet.preventDefault();
    
     this.state.clicked=true;
     console.log(this.state.value,this.state.clicked);
    if(this.state.clicked)
    {
      console.log("pending :call child to create qr");

    }
  }

  render() {
  return (
      <div className="App">
        <div className="App-header">
          <h2>Create QR code</h2>
        </div>
        <div>
          <form >
            <label>
              Product ID:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="button" value="Create" onClick={this.handleClick}/> 
            <Qr ip={this.state.value}/> 
            
          </form>
         
        </div>  
        
      </div>
      
    );
  }
}

export default App;
