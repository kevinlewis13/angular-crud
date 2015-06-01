'use strict';

var greet = require('./greet');
document.write(greet());
var bookList = document.getElementById('bookList');

var request = require('superagent');

request
  .get('/api/books')
  .end(function (err, res) {
    if (err) return console.log(err);

    var books = JSON.parse(res.text);

    books.forEach(function (book) {
      var bookEl = document.createElement('li');
      bookEl.innerHTML = book.title + ', by ' + book.author;
      bookList.appendChild(bookEl);

    });
  });
