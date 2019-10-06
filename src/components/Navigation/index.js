import React from 'react';
import './index.css';
import logo from './RXN-Logo-192.png';

import { withRouter, NavLink } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showProjectsSubMenu: false,
		};
	}

	onMouseEnterProjects = (event) => {
		this.setState({
			showProjectsSubMenu: true,
		});
	};

	onMouseLeaveProjects = (event) => {
		this.setState({
			showProjectsSubMenu: false,
		});
	};

	about = (
		<NavLink
			activeClassName="nav-bar-link-active"
			style={{order: 1}}
			exact
			to={ROUTES.ABOUT}
			name={ROUTES.ABOUT}
		>
			ABOUT
		</NavLink>
	);

	contact = (
		<NavLink
			activeClassName="nav-bar-link-active"
			style={{order: 5}}
			exact
			to={ROUTES.CONTACT}
			name={ROUTES.CONTACT}
		>
			CONTACT
		</NavLink>
	);
}

class NavHorizontal extends Navigation {
	projects = (
		<NavLink
			activeClassName="nav-bar-link-active"
			style={{order: 2}}
			exact
			to={ROUTES.PROJECTS}
			name={ROUTES.PROJECTS}
		>
			PROJECTS
		</NavLink>
	);

	projectsHorizontal = () => (
		<div
			className="projects"
			style={{order: 2}}
			onMouseEnter={this.onMouseEnterProjects}
			onMouseLeave={this.onMouseLeaveProjects}
		>
			<NavLink
				activeClassName="nav-bar-link-active"
				className={this.state.showProjectsSubMenu ? "hover" : ""}
				to={ROUTES.PROJECTS}
				name={ROUTES.PROJECTS}
			>
				PROJECTS
			</NavLink>

			{this.state.showProjectsSubMenu
				?
				<div className="nav-bar-sub-menu">
					<NavLink
						activeClassName="nav-bar-link-active"
						className="nav-bar-sub-menu-item"
						exact
						to={ROUTES.FRIENDZONE}
						name={ROUTES.FRIENDZONE}
					>
						&#8627; FRIENDZONE
					</NavLink>
					<NavLink
						activeClassName="nav-bar-link-active"
						className="nav-bar-sub-menu-item"
						exact
						to={ROUTES.ARQUE}
						name={ROUTES.ARQUE}
					>
						&#8627; ARQUE
					</NavLink>
				</div>
				:
				null
			}
		</div>
	);

	render() {
		return (
			<div className="nav-bar">
				<picture className="logo">
					<source
						srcSet={logo}
					/>
					<img
						src={logo}
						alt="Rafael Ning"
					/>
				</picture>

				{this.about}
				{this.projectsHorizontal()}
				{this.contact}
			</div>
		);
	}
}

class NavVertical extends Navigation {
	constructor(props) {
		super(props);

		this.state = {
			showSideBar: false,
		};
	}

	toggleShowSideBar = (event) => {
		this.setState({
			showSideBar: ! this.state.showSideBar,
		});
	}

	projectsVertical = (
		<NavLink
			activeClassName="nav-bar-link-active"
			style={{order: 2}}
			to={ROUTES.PROJECTS}
			name={ROUTES.PROJECTS}
		>
			PROJECTS
		</NavLink>
	);

	friendzone = (
		<NavLink
			activeClassName="nav-bar-link-active"
			className="nav-bar-vertical-sub-menu-item"
			style={{order: 3}}
			exact
			to={ROUTES.FRIENDZONE}
			name={ROUTES.FRIENDZONE}
		>
			&#8627; FRIENDZONE
		</NavLink>
	);

	arque = (
		<NavLink
			activeClassName="nav-bar-link-active"
			className="nav-bar-vertical-sub-menu-item"
			style={{order: 4}}
			exact
			to={ROUTES.ARQUE}
			name={ROUTES.ARQUE}
		>
			&#8627; ARQUE
		</NavLink>
	);

	render() {
		return (
			<div className="nav-bar-vertical">
				<div className="nav-bar-vertical-top">
					<picture className="logo vertical">
						<source
							srcSet={logo}
						/>
						<img
							src={logo}
							alt="Rafael Ning"
						/>
					</picture>

					<a
						className="hamburger"
						onClick={this.toggleShowSideBar}
					>
						&#9776;
					</a>
				</div>
				<div
					className={
						"nav-bar-vertical-side" +
						(this.state.showSideBar ? " show" : "")
					}
					onClick={this.toggleShowSideBar}
				>
					{this.about}
					{this.projectsVertical}
					{this.friendzone}
					{this.arque}
					{this.contact}
				</div>
			</div>
		);
	}
}

export { NavHorizontal, NavVertical };
