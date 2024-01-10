// components/BookList.js
import React from 'react';

export default function Booklist(props) { 

    const removeBook = (index) => {
        const updatedBooks = [...props.book];
        updatedBooks.splice(index, 1);
        props.onRemove(updatedBooks);
      };
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {props.book.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => removeBook(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

