import { Book } from "./books";
export class ElectronicBook extends Book {
  protected format: string;

  constructor(title: string, author: string, year: number, format: string) {
    super(title, author, year);
    this.format = format;
  }

  public getSummary(): string {
    return `The "${this.title}" e-book is available in ${this.format}.`;
  }
}
