import React, { Component } from 'react';
import './App.css';
import Mask from './components/Mask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>I am App from React 16.8.6</h3>

        <div className="Mask">
          <Mask />
        </div>
        
        <small>App made by Luis Mencos</small>
        <p>
        <small>support: Alexander Solovyeb</small>
        <p><small>Please note this is a 3D demo only, wait a few seconds</small></p>
        </p>

      </div>
    );
  }
}

export default App;
