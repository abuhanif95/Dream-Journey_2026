import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <li>
        Name: {book.name} Price: {book.price}
      </li>
    </div>
  );
};

export default Book;
