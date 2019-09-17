import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MeatDept from './components/MeatDept'
import FrozenDept from './components/FrozenDept'
import DairyDept from './components/DairyDept'
import Main from './components/Main'


function App(){
	return(
		<Router>
			<div className="container">
				<div className="row">
				<h1>Welcome to Publix Inventory System</h1>
				<Route path="/" component={NavBar} />
				<Route exact path="/" component={Main} />
				<Route exact path="/meat-dept" component={MeatDept} />
				<Route exact path="/frozen-dept" component={FrozenDept} />
				<Route exact path="/dairy-dept" component={DairyDept} />
				</div>
			</div>
		</Router>
	)
}

export default App;