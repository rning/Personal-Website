import React from 'react';
import './index.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { NavHorizontal } from '../Navigation';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

// App page navigation performed with React Router
const App = () => (
	<Router>
		<NavHorizontal />
		<Switch>
			<Route exact path={ROUTES.ABOUT} component={About}/>
			<Route path={ROUTES.PROJECTS} component={Projects}/>
			<Route path={ROUTES.CONTACT} component={Contact}/>
		</Switch>
	</Router>
);

export default App;
