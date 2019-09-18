import React from 'react';
import './index.css';

import { withRouter, NavLink } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	about = (
		<NavLink
			activeClassName=""
			className=""
			exact
			to={ROUTES.ABOUT}
			name={ROUTES.ABOUT}
		>
			ABOUT
		</NavLink>
	);

	projects = (
		<NavLink
			activeClassName=""
			className=""
			exact
			to={ROUTES.PROJECTS}
			name={ROUTES.PROJECTS}
		>
			PROJECTS
		</NavLink>
	);

	contact = (
		<NavLink
			activeClassName=""
			className=""
			exact
			to={ROUTES.CONTACT}
			name={ROUTES.CONTACT}
		>
			CONTACT
		</NavLink>
	);
}

class NavHorizontal extends Navigation {
	render() {
		return (
			<div>
				{this.about}
				{this.projects}
				{this.contact}
			</div>
		);
	}
}

export { NavHorizontal };
