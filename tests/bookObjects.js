"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var books_1 = require("./books");
var e_books_1 = require("./e-books");
var book1 = new books_1.Book("Harry Potter", "J.K. Rowling", 1997);
var eBook = new e_books_1.ElectronicBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, "PDF");
console.log(book1.getSummary());
console.log(eBook.getSummary());
