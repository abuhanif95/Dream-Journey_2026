import React from "react";
import Book from "./Book";

const Library = ({ books }) => {
  return (
    <div>
      <h2>National Central Library</h2>
      <p>Book Collection: {books.length}</p>
      <p>Address: </p>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </ul>
    </div>
  );
};

export default Library;
