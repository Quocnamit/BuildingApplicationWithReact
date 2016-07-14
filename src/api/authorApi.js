"use strict";

var authors = require('./authorData').authors;
var _= require('lodash');

var AuthorApi = (function() {
	function _generateId(author) {
		return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
	};

	function _clone(item){
		return JSON.parse(JSON.stringify(item));
	};

	function getAllAuthors(){
		return _clone(authors);
	};

	var getAuthorById = function(id) {
		var author = _.find(authors, {id:id});
		return _clone(author);
	};

	var saveAuthor = function(author){
		console.log('Pretend this just saved the author form the DB via AJAX Call');
		if (author.id) {
			var existingAuthorIndex = _.indexOf(authors,_.find(authors,{id:authorId}));
			authors.splice(existingAuthorIndex,1,author);
		} else {
			author.id = _generateId(author);
			authors.push(author);
		}
		return _clone(author)
	};

	var deleteAuthor = function(id){
		console.log('Pretend this just deleted the author form the DB via AJAX Call');
		_.remove(authors, { id:id });
	};

	return {
		getAllAuthors: getAllAuthors,
		getAuthorById: getAuthorById,
		saveAuthor: saveAuthor,
		deleteAuthor: deleteAuthor
	};
})();

module.exports = AuthorApi;

