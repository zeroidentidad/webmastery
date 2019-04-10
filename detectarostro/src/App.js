import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './componentes/Navigation';
import Logo from './componentes/Logo';
import ImageLinkForm from './componentes/ImageLinkForm';
import Rank from './componentes/Rank';
import './App.css';

const opcionesParticulas = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particulas'
      params={opcionesParticulas}
      />      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
