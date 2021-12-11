/* jslint node: true */
/* jshint browser: true */
'use strict';

const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const title = document.querySelectorAll('h2');
const marketing = document.querySelector('.adv');
const bookList2 = books[0].querySelectorAll('ul > li');
const bookList5 = books[5].querySelectorAll('ul > li');
const bookList6 = books[2].querySelectorAll('ul > li');

books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

body.style.backgroundImage = 'url(./image/adv.jpg)';

title[4].innerHTML = 'Книга 3. this и Прототипы Объектов';

marketing.remove();

bookList2[10].before(bookList2[2]);
bookList2[9].before(bookList2[7]);
bookList2[3].after(bookList2[6]);
bookList2[4].before(bookList2[8]);

bookList5[3].before(bookList5[9]);
bookList5[6].before(bookList5[2]);
bookList5[7].after(bookList5[5]);

let li = document.createElement('li');
li.className = "li1";
li.innerHTML = "Глава 8: За пределами ES6";
bookList6[9].before(li);