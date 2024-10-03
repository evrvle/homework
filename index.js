// Продвинутый JavaScript (семинары)
// Урок 2. Продвинутая работа с функциями и классами
// Задание 1


class Library {
    #books;
    constructor(initialBooks = []) {
        const uniqueBooks = [...new Set(initialBooks)];
        if (uniqueBooks.length !== initialBooks.length) {
            throw new Error("Начальный список книг не должен содержать дубликатов.");
        }
        this.#books = uniqueBooks;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error(`Книга "${title}" уже существует в библиотеке.`);
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const bookIndex = this.#books.indexOf(title);
        if (bookIndex === -1) {
            throw new Error(`Книга "${title}" не найдена в библиотеке.`);
        }
        this.#books.splice(bookIndex, 1);
    }

    hasBook(title) {
        return this.#books.includes(title); 
    }
}



