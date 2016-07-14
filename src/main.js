"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
});
// var Home = require('./components/homePage');
// var Author = require('./components/authors/authorPage');
// var About = require('./components/about/aboutPage');
// var Header = require('./components/common/header');

//For simplest routing
// var App = React.createClass({
// 	render: function() {
// 		var Child;

// 		switch(this.props.route){
// 			case 'about': Child = About; break;
// 			case 'authors': Child = Author; break;
// 			default: Child = Home;
// 		}

// 		return (
// 			<div>
// 				<Header/>
// 				<Child/>
// 			</div>
// 		);
// 	}
// });


// function renderApp() {
// 	var route = window.location.hash.substr(1);
// 	React.render(<App route={route}/>, document.getElementById('app'));
// }

// window.addEventListener('hashChange', renderApp);

// renderApp();

