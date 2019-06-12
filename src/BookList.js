import React, { Fragment } from "react";
import { BookCard } from "./BookCard";
export const BookList = props => {
  const books = props.books.map(book => {
    return (
      <BookCard
        key={book.ref}
        book={book}
        onDelete={props.onDelete}
        history={props.history}
      />
    );
  });

  return <Fragment>{books}</Fragment>;
};
