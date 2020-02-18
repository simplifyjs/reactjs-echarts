import React, { Component } from 'react';
import classes from './Main.module.css';
import { Route, Switch } from 'react-router-dom';
import Notfound from './Notfound/Notfound';
import ChartWrapper from './ChartWrapper/ChartWrapper';

/** EchartLine representing Line Graph */
 class Main extends Component {
	render() {
		return (
			<main className={classes.Main}>
				<Switch>
					<Route  path="/" exact render={() => <ChartWrapper chartType={'usage'} />} />
					<Route  path="/activity" exact render={() => <ChartWrapper chartType={'activity'} />} />
					<Route  path="/volume" exact render={() => <ChartWrapper chartType={'volume'} />} />
					<Route component={Notfound} />
				</Switch>
			</main>
		);
	}
 }
export default Main;