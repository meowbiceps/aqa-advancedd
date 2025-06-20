const Book = require('./Book');

class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this.fileFormat = fileFormat;
	}
	get fileFormat() {
		return this._fileFormat;
	}
	set fileFormat(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Формат файлу має бути рядком.');
		}
		this._fileFormat = value;
	}

	printInfo() {
		super.printInfo();
		console.log(`Формат файлу: ${this.fileFormat}`);
	}
	static fromBoook(bookInstance, format) {
		return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, format);
	}
}

module.exports = EBook;
