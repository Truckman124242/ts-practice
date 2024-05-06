"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getSummary = function () {
        return "The book \"".concat(this.title, "\" was written in ").concat(this.year, " by ").concat(this.author, ".");
    };
    return Book;
}());
exports.Book = Book;
