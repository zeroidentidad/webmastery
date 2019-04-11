import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './componentes/Navigation';
import Signin from './componentes/Signin';
import Register from './componentes/Register';
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
      imageUrl:'',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculaFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imagen = document.getElementById('inputimage');
    const ancho = Number(imagen.width);
    const alto = Number(imagen.height);
    return {
      leftCol: clarifaiFace.left_col*ancho,
      topRow: clarifaiFace.top_row*alto,
      rightCol: ancho-(clarifaiFace.right_col*ancho),
      bottomRow: alto-(clarifaiFace.bottom_row*alto)
    }
  }

  mostrarFaceBox = (box) =>{
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict( Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.mostrarFaceBox(this.calculaFaceLocation(response)))
    .catch(error => console.log(error));
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn:false})
    } else if (route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
      <Particles className='particulas'
      params={opcionesParticulas}
      />      
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      { route === 'home'
        ? 
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
        :
        (
          route === 'signin' ? 
          <Signin onRouteChange={this.onRouteChange}/> :
          <Register onRouteChange={this.onRouteChange}/>
        )
      }
      </div>
    );
  }
}

export default App;
