import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.css";

/**
 * Menu Component - Stateless
 * @function 
 * @name sidedrawer
 * @param {any} props
 */
const menu = (props: any) => {
	return (
		<nav className={classes.Nav}>
			<ul className={classes.Menu}>
				<li>
					<NavLink exact={true} to="/" activeClassName={classes.active}>Usage</NavLink>
				</li>
				<li>
					<NavLink to="/activity" activeClassName={classes.active}>Activity</NavLink>
				</li>
				<li>
					<NavLink to="/volume" activeClassName={classes.active}>Volume</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default menu;
