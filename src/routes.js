'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var Author = require('./components/authors/authorPage');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var About = require('./components/about/aboutPage')
var NotFoundPage = require('./components/NotFoundPage');

var routes = (
	<Route name="app" path="/" handler={App}>
		<DefaultRoute handler={HomePage} />
		<Route name="authors" handler={Author} />
		<Route name="addAuthor" path="author" handler={ManageAuthorPage}/>
		<Route name="manageAuthor" path="author/:id" handler={ManageAuthorPage}/>
		<Route name="about" handler={About} />
		<NotFoundRoute handler={NotFoundPage} />
		<Redirect from="about-us" to="about" />
		<Redirect from="awthurs" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = routes;