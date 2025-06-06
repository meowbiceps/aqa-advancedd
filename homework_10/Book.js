class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	get title() {
		return this._title;
	}
	get author() {
		return this._author;
	}
	get year() {
		return this._year;
	}
	set title(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Назва має бути непорожнім рядком.');
		}
		this._title = value;
	}
	set author(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Автор має бути не порожнім рядком.');
		}
		this._author = value;
	}
	set year(value) {
		if (typeof value !== 'number' || value < 0) {
			throw new Error('Рік має бути додатнім числом.');
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}`);
	}
	static findOldestBook(books) {
		return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
	}
}

module.exports = Book;
