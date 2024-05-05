export class Book {
        protected title: string;
        protected author: string;
        protected year: number;
    
        public constructor(title: string, author: string, year: number) {
            this.title = title;
            this.author = author;
            this.year = year;
        }
    
        public getSummary(): string {
            return `The book "${this.title}" was written in ${this.year} by ${this.author}.`;
        }
    }
    const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
    console.log(book1.getSummary());
   