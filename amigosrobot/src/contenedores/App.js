import React, { Component } from 'react';
import CardLista from '../componentes/CardLista';
import SearchBox from '../componentes/SearchBox';
import Scroll from '../componentes/Scroll';
//import { robots } from './robots.js';
import './App.css';

class App extends Component {

	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}		
	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then( respuesta=> respuesta.json() )
		.then( users=> this.setState({ robots: users }) );
	}

	onSearchChange = (event) => {
		this.setState({ searchfield:event.target.value })
		//console.log(filtradoRobots);
	}

	render(){
		const { robots, searchfield } = this.state;
		const filtradoRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ?
		<h1 className='tc'>Cargando</h1> :
			 (
				<div className='tc'>
				<h1 className='f1'>Amigos Robot</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<CardLista robots={filtradoRobots}/>
				</Scroll>
				</div>
			);
	}

}

export default App;