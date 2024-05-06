import { Book } from "./books"; 
import { ElectronicBook } from "./e-books"; 

const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
const eBook = new ElectronicBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, "PDF");

console.log(book1.getSummary());
console.log(eBook.getSummary());