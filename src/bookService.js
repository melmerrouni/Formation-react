let bookList = [
  { ref: "001", title: "book1", description: "desc1" },
  { ref: "002", title: "book2", description: "desc2" }
];

class BookService {
  getBooks() {
    /* return new Promise(resolve => {
      setTimeout(() => {
        resolve(bookList);
      }, 1000);
    });
*/
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(bookList);
      }, 1000);
    });
  }

  deleteBook(bookId) {
    bookList.filter(book => book.ref !== bookId);
    return;
  }

  getByRef(bookRef) {
    const book = bookList.find(book => book.ref === bookRef);
    return new Promise(resolve => resolve(book));
  }
  updataBook(updatedBook) {
    bookList.forEach(book => {
      if (updatedBook.ref === book.ref) {
        book = updatedBook;
      }
    });
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}

export const bookService = new BookService();
