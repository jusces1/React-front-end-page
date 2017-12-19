/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router'
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


import LoginForm from '../LoginFormPage/index';

import Header from 'components/Header';
import Footer from 'components/Footer';
import MainContent from 'containers/MainContentPage/index'
import Registration from 'containers/RegistrationPage';
import AddNewRowPage from 'containers/AddNewRowPage';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();
export default function App(props) {
  return (
		<MuiThemeProvider theme={theme}>
		<div>
		<Header/>
     	 <Switch>
				<Route exact path="/" component={LoginForm} />

				<Route exact path="/login" component={LoginForm} />
				{(localStorage.getItem("name") != "" && localStorage.getItem("name")) ? <Route exact path="/home" component={MainContent} /> : <Redirect from='/home' to='/login' />}
				<Route exact path="/registration" component={Registration} />
				{(localStorage.getItem("name") != "" && localStorage.getItem("name")) ? <Route exact path="/row" component={AddNewRowPage} /> : <Redirect from='/row' to='/login' />}
				<Route component={NotFoundPage} /> 
		</Switch>
		<Footer/>
		</div>
			</MuiThemeProvider >
  );
}
