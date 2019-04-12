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

const estadoInicial = {
  input:'',
  imageUrl:'',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {

  constructor(){
    super();
    this.state=estadoInicial
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
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
    .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
        }
        this.mostrarFaceBox(this.calculaFaceLocation(response))
    })
    //.then(response => this.mostrarFaceBox(this.calculaFaceLocation(response)))
    .catch(error => console.log(error));
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({estadoInicial})
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
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
        :
        (
          route === 'signin' ? 
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> :
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
      }
      </div>
    );
  }
}

export default App;
