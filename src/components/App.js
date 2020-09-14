import React from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from '../robots'

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchCriteria : ''
		};
	}

	onChangeName = (event) => {
		this.setState({searchCriteria: event.target.value});
	}
	render(){
		const searchedRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchCriteria.toLowerCase());
		});
		return(
			<div className="tc">
				<h1>Robo Friends</h1>
				<SearchBox searchCriteria={this.onChangeName}/>
				<CardList robots={searchedRobots}/>
			</div>
		);
	}
}
export default App