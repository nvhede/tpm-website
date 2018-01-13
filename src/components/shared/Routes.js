import React, { Component } from 'react';

// Routes
import { Switch, Route } from 'react-router-dom';

// Components
import Home from '../home/Home';
import AboutUs from '../about-us/AboutUs';
import Overview from '../overview/Overview';
import Services from '../services/Services';


const Routes = () => (
	<Switch>
		<Route exact path={'/'} component={Home} />
		<Route exact path={'/aboutus'} component={AboutUs} />
		<Route exact path={'/overview'} component={Overview} />
		<Route exact path={'/services'} component={Services} />
	</Switch>
)

export default Routes;