const Book = require('./Book');
const EBook = require('./ebook'); 

const book1 = new Book("Після мене", "Лінда Грін", 2018);
const book2 = new Book("Воно", "Стівен Кінг", 1973);
const ebook1 = new EBook("Кєррі", "Стівен Кінг", 1974, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

const oldest = Book.findOldestBook([book1, book2, ebook1]);
console.log("Найстаріша книга");
oldest.printInfo();

const ebookFromBook = EBook.fromBoook(book1, "EPUB");
ebookFromBook.printInfo();