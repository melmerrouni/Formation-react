import React from "react";
import { BookList } from "./BookList";
import { bookService } from "./bookService";

const error = { color: "red", fontSize: "100px" };

export class BookView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      error: false,
      books: []
    };

    this.handleDeleteBook = this.handleDeleteBook.bind(this);
  }

  componentDidMount() {
    // ap service
    this.getBooks();
  }
  handleDeleteBook(bookId) {
    //delete service return OK
    // then
    const books = bookService.deleteBook(bookId);
    this.setState({ books });
  }

  getBooks() {
    //service
    bookService
      .getBooks()
      .then(books => {
        this.setState({ books, loader: false });
        console.log("eeeee");
      })
      .catch(() => {
        console.error("ffffff");
        this.setState({ loader: false, error: true });
      });

    console.log("Giiii");
  }

  render() {
    return (
      <div>
        <h1>BookView</h1>
        {this.state.loader ? (
          <p>Loading...</p>
        ) : this.state.error ? (
          <p style={error} className="name">
            Error
          </p>
        ) : (
          <BookList
            books={this.state.books}
            history={this.props.history}
            onDelete={this.handleDeleteBook}
          />
        )}
      </div>
    );
  }
}
