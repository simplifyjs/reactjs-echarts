import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Navigation/Menu/Menu';
import classes from './Sidedrawer.module.css';

/**
 * Side Drawer Component - Stateless
 * @function 
 * @name sidedrawer
 * @param {any} props
 */
const sidedrawer = (props: any) => {
	return (
	<header className={classes.Sidedrawer}>
		<Logo />
		<Menu />
	</header>
	);
}



export default sidedrawer;