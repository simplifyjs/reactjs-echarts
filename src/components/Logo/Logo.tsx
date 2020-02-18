import React, {Fragment} from 'react';
import logoImagePath from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = (props: any) =>	(
	<section className={classes.Logowrap}>
		<img src={logoImagePath}  alt="test" title="logo" height="auto" width="100%" />
	</section>
);

export default logo; 