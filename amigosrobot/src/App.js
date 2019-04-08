import React, { Component } from 'react';
import CardLista from './CardLista';
import SearchBox from './SearchBox';
import { robots } from './robots.js';
import './App.css';

class App extends Component {

	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: '',
		}		
	}

	onSearchChange = (event) => {
		this.setState({ searchfield:event.target.value })
		//console.log(filtradoRobots);
	}

	render(){

		const filtradoRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
			<div className='tc'>
			<h1 className='f1'>Amigos Robot</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardLista robots={filtradoRobots}/>
			</div>
			);
	}

}

export default App;