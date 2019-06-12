import React from "react";
import { bookService } from "./bookService";

export class UpdateBookView extends React.Component {
  constructor() {
    super();

    this.state = {
      book: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //get book by ref
    this.getBook();
  }

  getBook() {
    const bookRef = this.props.match.params.bookRef;
    bookService.getByRef(bookRef).then(book => this.setState({ book }));
  }

  handleChange(event) {
    console.log(event.target.value);
    let { book } = this.state;
    book[event.target.name] = event.target.value;
    console.log(book);
    this.setState({ book });
  }

  handleSubmit(event) {
    event.preventDefault();
    //call service
    bookService
      .updataBook(this.state.book)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div>
        <p>Update book View {this.state.book.title}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.book.title}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            name="description"
            value={this.state.book.description}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateBookView;
