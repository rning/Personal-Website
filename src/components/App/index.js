import React from 'react';
import './index.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { NavHorizontal, NavVertical } from '../Navigation';
import UnderConstruction from '../UnderConstruction';

// App page navigation performed with React Router
const App = () => (
	<Router>
		<Route component={UnderConstruction}/>
	</Router>
);

export default App;
