import React from "react";
import { UpdateBookView } from "./UpdateBookView";

export const BookCard = props => {
  return (
    <div>
      <p>{props.book.ref}</p>
      <p>{props.book.title}</p>
      <p>{props.book.description}</p>
      <p>
        <button onClick={() => props.onDelete(props.book.ref)}>Delete</button>
        <button
          onClick={() => props.history.push(`/book/update/${props.book.ref}`)}
        >
          Update
        </button>
      </p>
    </div>
  );
};
