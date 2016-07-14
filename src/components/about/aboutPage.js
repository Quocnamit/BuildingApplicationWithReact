"use strict";

var React = require('react');

var About = React.createClass({
	statics:{
		willTransitionTo: function (transition, params, query, callback) {
			if(!confirm('Are you sure you read a page that\'s this boring?')){
				transition.about();
			} else {
				callback();
			}
		},
		willTransitionFrom: function (transition, component) {
			if(!confirm('Are you sure you leave a page that\'s this exciting?')){
				transition.about();
			}
		}
	},
	render: function() {
		return (
			<div>
				<h1>about</h1>
				<p>
					<ul>
						<li>React</li>
						<li>React router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>bootstrap</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;