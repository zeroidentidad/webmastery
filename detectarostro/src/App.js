import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './componentes/Navigation';
import Logo from './componentes/Logo';
import ImageLinkForm from './componentes/ImageLinkForm';
import FaceRecognition from './componentes/FaceRecognition';
import Rank from './componentes/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: '0a703c713fa348ffa54e2e2417a070b1'
});

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

  constructor(){
    super();
    this.state= {
      input:'',
      imageUrl:''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(
      function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
    );
  }

  render() {
    return (
      <div className="App">
      <Particles className='particulas'
      params={opcionesParticulas}
      />      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
